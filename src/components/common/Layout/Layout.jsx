import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - stays left on desktop, hidden on mobile if you add toggle later */}
      <Sidebar />

      {/* Right content wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Header always visible */}
        <Header />

        {/* Main content scrollable */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
