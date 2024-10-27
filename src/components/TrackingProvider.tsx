"use client";
import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import _ from "lodash";
import {
  getConnectionInfo,
  getDeviceInfo,
  getPerformanceMetrics,
  getSessionId,
  getVisitorInfo,
} from "@/lib/tracking";

// Constants
const TRACK_DEBOUNCE_MS = 1000;
const EXIT_DEBOUNCE_MS = 2000;

// Types
interface TrackingContextType {
  pageViewId: string | null;
  trackClick: (event: MouseEvent, element: HTMLElement) => Promise<void>;
  trackEvent: (eventData: {
    eventType: string;
    eventCategory?: string;
    eventAction?: string;
    eventLabel?: string;
    eventValue?: number;
  }) => Promise<void>;
}

interface TrackingData {
  page: string;
  userAgent: string;
  sessionId: string | null;
  screenResolution: string;
  [key: string]: unknown;
}

interface ExitData {
  id: string;
  timeOnPage: number;
  scrollDepth: number;
  exitPage: string;
}

interface TrackingResponse {
  success: boolean;
  id: string;
}

interface TrackingProviderProps {
  children: React.ReactNode;
}

// Context
export const TrackingContext = createContext<TrackingContextType | null>(null);

export const useTrackingContext = () => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error(
      "useTrackingContext must be used within a TrackingProvider"
    );
  }
  return context;
};

// Custom hook for tracking
export const useTracking = (pageViewId: string | null) => {
  const trackClick = useCallback(
    _.debounce(
      async (event: MouseEvent, element: HTMLElement): Promise<void> => {
        if (!pageViewId) return Promise.resolve(); // Return a resolved promise if pageViewId is not set

        try {
          await fetch("/api/track/click", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pageViewId,
              elementId: element.id,
              elementClass: element.className,
              elementText: element.textContent,
              xPosition: event.clientX,
              yPosition: event.clientY,
            }),
          });
        } catch (error) {
          console.error("Failed to track click:", error);
        }
      },
      500
    ),
    [pageViewId]
  );

  const trackEvent = useCallback(
    _.debounce(
      async (eventData: {
        eventType: string;
        eventCategory?: string;
        eventAction?: string;
        eventLabel?: string;
        eventValue?: number;
      }) => {
        if (!pageViewId) return;

        try {
          await fetch("/api/track/event", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pageViewId,
              ...eventData,
            }),
          });
        } catch (error) {
          console.error("Failed to track event:", error);
        }
      },
      500
    ),
    [pageViewId]
  );

  return { trackClick, trackEvent };
};

// Provider Component
export default function TrackingProvider({
  children,
}: TrackingProviderProps): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pageViewId, setPageViewId] = useState<string | null>(null);
  const startTime = useRef(Date.now());
  const isInitialMount = useRef(true);
  const lastTrackTime = useRef(Date.now());

  const { trackClick, trackEvent } = useTracking(pageViewId);

  const trackPageView = useCallback(
    _.debounce(async (): Promise<void> => {
      // Prevent tracking if less than TRACK_DEBOUNCE_MS has passed
      const now = Date.now();
      if (now - lastTrackTime.current < TRACK_DEBOUNCE_MS) {
        return;
      }
      lastTrackTime.current = now;

      const data: TrackingData = {
        page: pathname ?? "",
        userAgent: navigator.userAgent,
        ...getDeviceInfo(navigator.userAgent),
        ...getVisitorInfo(),
        sessionId: getSessionId(),
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        ...getPerformanceMetrics(),
        ...getConnectionInfo(),
      };

      // Add UTM parameters
      const utmParams = [
        "source",
        "medium",
        "campaign",
        "term",
        "content",
      ] as const;
      utmParams.forEach((param) => {
        const value = searchParams?.get(`utm_${param}`);
        if (value) {
          data[`utm${param.charAt(0).toUpperCase() + param.slice(1)}`] = value;
        }
      });

      try {
        const response = await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = (await response.json()) as TrackingResponse;
        if (result.success) {
          setPageViewId(result.id);
        }
      } catch (error) {
        console.error(
          "Failed to track page view:",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, TRACK_DEBOUNCE_MS),
    [pathname, searchParams]
  );

  const trackExit = useCallback(
    _.debounce(async (): Promise<void> => {
      if (!pageViewId) return;

      const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);
      const scrollDepth = Math.floor(
        ((window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight) *
          100
      );

      const exitData: ExitData = {
        id: pageViewId,
        timeOnPage,
        scrollDepth,
        exitPage: pathname ?? "",
      };

      try {
        const response = await fetch("/api/track/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(exitData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error(
          "Failed to track exit:",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, EXIT_DEBOUNCE_MS),
    [pathname, pageViewId]
  );

  // Set up global click tracking
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = event.target as HTMLElement;
      if (element) {
        void trackClick(event, element);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [trackClick]);

  // Handle page view tracking
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      void trackPageView();
    }

    const handleBeforeUnload = (): void => {
      void trackExit();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      void trackExit();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [trackPageView, trackExit]);
  return (
    <TrackingContext.Provider
      value={{
        pageViewId,
        trackClick: trackClick as any,
        trackEvent: trackEvent as any,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
}
