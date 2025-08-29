import { Download } from 'lucide-react';
import MetricCard from '../../components/dashboard/MetricCard/MetricCard';
import VisitorChart from '../../components/dashboard/Charts/VisitorChart/VisitorChart';
import RevenueChart from '../../components/dashboard/Charts/RevenueChart/RevenueChart';
import SatisfactionChart from '../../components/dashboard/Charts/SatisfactionChart/SatisfactionChart';
import TargetChart from '../../components/dashboard/Charts/TargetChart/TargetChart';
import TopProducts from '../../components/dashboard/TopProducts/TopProducts';
import SalesMapping from '../../components/dashboard/SalesMapping/SalesMapping';
import VolumeChart from '../../components/dashboard/Charts/VolumeChart/VolumeChart';
import { dashboardMetrics } from '../../data/mockData';

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="space-y-8">
        
        {/* Today's Sales Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Today's Sales</h2>
                <p className="text-gray-500">Sales Summary</p>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Export</span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {dashboardMetrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>

          {/* Visitor Insights */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <VisitorChart />
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <RevenueChart />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <SatisfactionChart />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <TargetChart />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <TopProducts />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <SalesMapping />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <VolumeChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;