import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { revenueData } from "../../../../data/chartData";

const RevenueChart = () => {
  return (
    <>
      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
        Total Revenue
      </h3>

      {/* Chart */}
      <div className="h-56 sm:h-64 md:h-72 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} barCategoryGap="20%">
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#6b7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              width={19}
            />
            <Bar dataKey="online" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="offline" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 mt-17 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600">Online Sales</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600">Offline Sales</span>
        </div>
      </div>
    </>
  );
};

export default RevenueChart;
