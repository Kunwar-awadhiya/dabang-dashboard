import React from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';
import { visitorData } from '../../../../data/chartData';

const VisitorChart = () => {
  return (
    <>
      <h3 className="text-lg font-bold text-gray-900 mb-6">Visitor Insights</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={visitorData}>
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }} 
            />
            <Line 
              type="monotone" 
              dataKey="loyal" 
              stroke="#8b5cf6" 
              strokeWidth={3} 
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }} 
            />
            <Line 
              type="monotone" 
              dataKey="new" 
              stroke="#ef4444" 
              strokeWidth={3} 
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }} 
            />
            <Line 
              type="monotone" 
              dataKey="unique" 
              stroke="#22c55e" 
              strokeWidth={3} 
              dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Loyal Customers</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-xs text-gray-600">New Customers</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Unique Customers</span>
        </div>
      </div>
    </>
  );
};

export default VisitorChart;