import React from 'react';
import { Trophy, Users, TrendingUp } from 'lucide-react';

const Leaderboard = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Leaderboard</h1>
        <p className="text-gray-600">Top performing sales representatives</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h2 className="text-lg font-semibold">Sales Leaderboard</h2>
        </div>
        
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Leaderboard Coming Soon</h3>
          <p className="text-gray-500">Sales performance rankings will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;