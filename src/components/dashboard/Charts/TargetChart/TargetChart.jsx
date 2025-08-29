import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Target } from 'lucide-react';
import { targetRealityData } from '../../../../data/chartData';

const TargetChart = () => {
  return (
    <>
      <h3 className="text-lg font-bold text-gray-900 mb-6">Target vs Reality</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={targetRealityData}>
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
            />
            <Bar 
              dataKey="target" 
              fill="#fbbf24" 
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="reality" 
              fill="#06b6d4" 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-green-500" />
          <span className="text-xs text-gray-600">Reality Sales</span>
          <span className="text-sm font-medium">8,823</span>
        </div>
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-orange-500" />
          <span className="text-xs text-gray-600">Target Sales</span>
          <span className="text-sm font-medium">12,122</span>
        </div>
      </div>
    </>
  );
};

export default TargetChart;