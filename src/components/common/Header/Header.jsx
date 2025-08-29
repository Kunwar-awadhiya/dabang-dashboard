import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import SearchBar from '../../ui/SearchBar/SearchBar';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          {/* Search */}
          <SearchBar />
          
          {/* Language Selector */}
          <div className="flex items-center space-x-2 text-gray-600 cursor-pointer">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Crect width='20' height='20' fill='%23012169'/%3E%3Cpath d='M0 0l20 20M20 0L0 20' stroke='%23fff' stroke-width='2'/%3E%3Cpath d='M10 0v20M0 10h20' stroke='%23fff' stroke-width='3'/%3E%3Cpath d='M10 0v20M0 10h20' stroke='%23c8102e' stroke-width='2'/%3E%3C/svg%3E" 
              alt="US Flag" 
              className="w-5 h-5" 
            />
            <span className="text-sm font-medium">Eng (US)</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          
          {/* Notification */}
          <div className="relative cursor-pointer">
            <Bell className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full"></div>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-sm">
              <div className="font-medium text-gray-900">Musfiq</div>
              <div className="text-gray-500">Admin</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;