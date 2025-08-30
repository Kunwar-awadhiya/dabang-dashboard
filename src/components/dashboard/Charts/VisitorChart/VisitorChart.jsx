import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { visitorData } from "../../../../data/chartData";

const VisitorChart = () => {
  return (
    <>
      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
        Visitor Insights
      </h3>

      {/* Chart */}
      <div className="h-56 sm:h-64 md:h-72 lg:h-43">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={visitorData}
            margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
          >
            {/* X Axis */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#6b7280" }}
            />

            {/* Y Axis */}
            <YAxis
              type="number"
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              width={30}
            />

            {/* Lines */}
            <Line
              type="monotone"
              dataKey="loyal"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="new"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ fill: "#ef4444", strokeWidth: 2, r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="unique"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ fill: "#22c55e", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 mt-4 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600">
            Loyal Customers
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600">
            New Customers
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600">
            Unique Customers
          </span>
        </div>
      </div>
    </>
  );
};

export default VisitorChart;
