import { TrendingUp, ShoppingBag, Package, Users } from 'lucide-react';

// Dashboard metrics data
export const dashboardMetrics = [
  {
    title: 'Total Sales',
    value: '$1k',
    change: '+8% from yesterday',
    changeType: 'positive',
    icon: TrendingUp,
    bgColor: 'bg-pink-100',
    iconColor: 'bg-pink-500'
  },
  {
    title: 'Total Order',
    value: '300',
    change: '+5% from yesterday',
    changeType: 'positive',
    icon: ShoppingBag,
    bgColor: 'bg-orange-100',
    iconColor: 'bg-orange-500'
  },
  {
    title: 'Product Sold',
    value: '5',
    change: '+1.2% from yesterday',
    changeType: 'positive',
    icon: Package,
    bgColor: 'bg-green-100',
    iconColor: 'bg-green-500'
  },
  {
    title: 'New Customers',
    value: '8',
    change: '0.5% from yesterday',
    changeType: 'positive',
    icon: Users,
    bgColor: 'bg-purple-100',
    iconColor: 'bg-purple-500'
  }
];

// Top products data
export const topProductsData = [
  { 
    name: 'Home Decor Range', 
    popularity: 45, 
    sales: '45%',
    color: 'bg-blue-500'
  },
  { 
    name: 'Disney Princess Pink Bag 18', 
    popularity: 29, 
    sales: '29%',
    color: 'bg-green-500'
  },
  { 
    name: 'Bathroom Essentials', 
    popularity: 18, 
    sales: '18%',
    color: 'bg-purple-500'
  },
  { 
    name: 'Apple Smartwatches', 
    popularity: 22, 
    sales: '22%',
    color: 'bg-orange-500'
  }
];

// User profile data
export const userProfile = {
  name: 'Musfiq',
  role: 'Admin',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
};

// Navigation items
export const navigationItems = [
  { name: 'Dashboard', path: '/dashboard', active: true },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Order', path: '/orders' },
  { name: 'Products', path: '/products' },
  { name: 'Sales Report', path: '/sales-report' },
  { name: 'Messages', path: '/messages' },
  { name: 'Settings', path: '/settings' },
  { name: 'Sign Out', path: '/logout' }
];