import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar - stays on left in desktop, hidden in mobile until toggled */}
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header always visible */}
        <Header />

        {/* Main content scrollable */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
