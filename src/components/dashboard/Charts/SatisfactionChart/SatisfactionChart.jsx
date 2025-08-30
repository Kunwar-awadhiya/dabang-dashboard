import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { satisfactionData } from '../../../../data/chartData';

const SatisfactionChart = () => {
  return (
    <>
      <h3 className="text-lg font-bold text-gray-900 mb-19">Customer Satisfaction</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={satisfactionData}>
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10 }}
              width={11} 
            />
            <Area 
              type="monotone" 
              dataKey="lastMonth" 
              stackId="1" 
              stroke="#60a5fa" 
              fill="#dbeafe" 
            />
            <Area 
              type="monotone" 
              dataKey="thisMonth" 
              stackId="2" 
              stroke="#34d399" 
              fill="#d1fae5" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-between mt-17">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <span className="text-xs text-gray-600">Last Month</span>
          <span className="text-sm font-medium">$3,004</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-xs text-gray-600">This Month</span>
          <span className="text-sm font-medium">$4,504</span>
        </div>
      </div>
    </>
  );
};

export default SatisfactionChart;