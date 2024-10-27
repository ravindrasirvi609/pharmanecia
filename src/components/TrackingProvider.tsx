"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  getConnectionInfo,
  getDeviceInfo,
  getPerformanceMetrics,
  getSessionId,
  getVisitorInfo,
} from "@/lib/tracking";
import { Suspense } from "react";

// Define interfaces for better type safety
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

export default function TrackingProvider({
  children,
}: TrackingProviderProps): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageViewId = useRef<string | null>(null);
  const startTime = useRef<number>(Date.now());

  const trackPageView = useCallback(async (): Promise<void> => {
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

    // Add UTM parameters if they exist
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
        pageViewId.current = result.id;
      }
    } catch (error) {
      console.error(
        "Failed to track page view:",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }, [pathname, searchParams]);

  const trackExit = useCallback(async (): Promise<void> => {
    if (!pageViewId.current) return;

    const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);
    const scrollDepth = Math.floor(
      ((window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight) *
        100
    );

    const exitData: ExitData = {
      id: pageViewId.current,
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
  }, [pathname]);

  useEffect(() => {
    void trackPageView();

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
    <>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </>
  );
}
