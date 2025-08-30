import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  ShoppingBag,
  Package,
  TrendingUp,
  MessageSquare,
  Settings,
  LogOut,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { name: "Leaderboard", path: "/leaderboard", icon: BarChart3 },
    { name: "Order", path: "/orders", icon: ShoppingBag },
    { name: "Products", path: "/products", icon: Package },
    { name: "Sales Report", path: "/sales-report", icon: TrendingUp },
    { name: "Messages", path: "/messages", icon: MessageSquare },
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "Sign Out", path: "/logout", icon: LogOut },
  ];

  const isActive = (path) => {
    return (
      location.pathname === path ||
      (path === "/dashboard" && location.pathname === "/")
    );
  };

  return (
    <>
      {/* Mobile Navbar with Hamburger */}
      <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 md:hidden">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">Dabang</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg border-r border-gray-200 w-64 z-20 
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-100 hidden md:flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Dabang</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} // close menu on mobile
                className={`px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                  active
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Pro Banner (hidden on very small screens for space) */}
        <div className="m-4 p-6 bg-indigo-600 rounded-xl text-white hidden sm:block">
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="48" height="48" rx="16" fill="white" />
            <path
              d="M18.5514 14.1968C17.4193 15.3498 17.4193 17.2157 18.5724 18.3688L21.0881 20.8845C23.4572 23.2536 23.4572 27.1111 21.0881 29.4801L16.4759 24.8679C15.2914 23.6833 14.6939 22.1215 14.6939 20.5701C14.6939 19.0187 15.2914 17.4568 16.4759 16.2723L18.52 14.2282C18.5304 14.2177 18.5409 14.2073 18.5514 14.1968Z"
              fill="#5D5FEF"
            />
            <path
              d="M20.564 20.3593L18.5723 18.3677C17.4192 17.2146 17.4088 15.3592 18.5513 14.1957C19.6834 13.0845 21.4864 13.1055 22.608 14.2271C23.1741 14.7932 23.4571 15.5374 23.4571 16.2712C23.4571 17.0049 23.1741 17.7492 22.608 18.3152L22.1363 18.787"
              fill="#5D5FEF"
            />
            <path
              d="M30.4486 34.794C31.5807 33.6409 31.5807 31.775 30.4277 30.622L27.9119 28.1062C25.5429 25.7372 25.5429 21.8796 27.9119 19.5106L32.5241 24.1229C33.7086 25.3074 34.3061 26.8693 34.3061 28.4207C34.3061 29.9721 33.7086 31.5339 32.5241 32.7184L30.4801 34.7625C30.4591 34.7835 30.4486 34.794 30.4486 34.794Z"
              fill="#5D5FEF"
            />
            <path
              d="M28.4251 28.6407L30.4167 30.6324C31.5698 31.7855 31.5803 33.6408 30.4377 34.8044C29.3056 35.9155 27.5026 35.8946 26.381 34.773C25.8149 34.2069 25.5319 33.4627 25.5319 32.7289C25.5319 31.9951 25.8149 31.2509 26.381 30.6848L26.8632 30.2026"
              fill="#5D5FEF"
            />
          </svg>

          <h3 className="font-bold text-lg mb-2">Dabang Pro</h3>
          <p className="text-sm opacity-90 mb-4">
            Get access to all features on tetumbas
          </p>
          <button className="w-full bg-white text-indigo-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Get Pro
          </button>
        </div>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
