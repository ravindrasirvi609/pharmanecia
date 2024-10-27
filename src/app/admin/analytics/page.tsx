"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Calendar,
  Clock,
  Users,
  Eye,
  Activity,
  Monitor,
  Chrome,
  Server,
} from "lucide-react";
import PropTypes from "prop-types";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

// Define the interface for the overview data
interface Overview {
  totalPageViews: number;
  uniqueVisitors: number;
  averageTimeOnPage: number;
  bounceRate: number;
}

// Define the interface for user behavior data
interface UserBehavior {
  topPages: { _id: string; visits: number }[]; // Adjust the structure as needed
}

// Define the interface for device stats
interface DeviceStats {
  deviceTypes: { _id: string; count: number }[]; // Adjust structure as needed
  browsers: { _id: string; count: number }[];
  operatingSystems: { _id: string; count: number }[];
}

// Define the interface for performance data
interface PerformanceData {
  loadTimes: {
    _id: string;
    avgLoadTime: number;
    avgFirstPaint: number;
    avgFirstContentfulPaint: number;
  }[];
}

const Analytics = () => {
  const [period, setPeriod] = useState("7d");
  const [overview, setOverview] = useState<Overview | null>(null);
  const [pageViews, setPageViews] = useState([]);
  const [userBehavior, setUserBehavior] = useState<UserBehavior | null>(null);
  const [deviceStats, setDeviceStats] = useState<DeviceStats | null>(null);
  const [performance, setPerformance] = useState<PerformanceData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [
        overviewRes,
        pageViewsRes,
        userBehaviorRes,
        deviceStatsRes,
        performanceRes,
      ] = await Promise.all([
        axios.get("/api/analytics/overview"),
        axios.get(`/api/analytics/page-views?period=${period}`),
        axios.get(`/api/analytics/user-behavior?period=${period}`),
        axios.get(`/api/analytics/device-stats?period=${period}`),
        axios.get(`/api/analytics/performance?period=${period}`),
      ]);

      setOverview(overviewRes.data);
      setPageViews(pageViewsRes.data);
      setUserBehavior(userBehaviorRes.data);
      setDeviceStats(deviceStatsRes.data);
      setPerformance(performanceRes.data);
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [period]);

  const StatCard: React.FC<{
    icon: React.ElementType;
    title: string;
    value: string;
    subtitle?: string;
  }> = ({ icon: Icon, title, value, subtitle }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-50 rounded-full">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{value}</h3>
          <p className="text-sm text-gray-500">{title}</p>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
      </div>
    </div>
  );

  // Update the prop types to allow string as a valid type for icon
  StatCard.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string])
      .isRequired, // Allow both React component types and strings
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    subtitle: PropTypes.string, // Make subtitle optional
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Period Selector */}
      <div className="mb-8">
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Eye}
          title="Total Page Views"
          value={overview?.totalPageViews?.toLocaleString() || "0"}
        />
        <StatCard
          icon={Users}
          title="Unique Visitors"
          value={overview?.uniqueVisitors?.toLocaleString() || "0"}
        />
        <StatCard
          icon={Clock}
          title="Avg. Time on Page"
          value={`${Math.round((overview?.averageTimeOnPage || 0) / 60)} min`}
        />
        <StatCard
          icon={Activity}
          title="Bounce Rate"
          value={`${Math.round(overview?.bounceRate || 0)}%`}
          subtitle="" // Provide an empty string or a default value
        />
      </div>

      {/* Page Views Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Page Views Trend</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pageViews}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#0088FE"
                name="Page Views"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Pages and Device Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Top Pages */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userBehavior?.topPages?.slice(0, 5)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visits" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Types */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Device Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceStats?.deviceTypes}
                  dataKey="count"
                  nameKey="_id"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {deviceStats?.deviceTypes?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performance?.loadTimes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="avgLoadTime"
                stroke="#0088FE"
                name="Avg Load Time"
              />
              <Line
                type="monotone"
                dataKey="avgFirstPaint"
                stroke="#00C49F"
                name="First Paint"
              />
              <Line
                type="monotone"
                dataKey="avgFirstContentfulPaint"
                stroke="#FFBB28"
                name="First Contentful Paint"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Browser and OS Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Browser Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Browser Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceStats?.browsers}
                  dataKey="count"
                  nameKey="_id"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {deviceStats?.browsers?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* OS Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">OS Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceStats?.operatingSystems}
                  dataKey="count"
                  nameKey="_id"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {deviceStats?.operatingSystems?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
