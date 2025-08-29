import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';
import SalesReport from './pages/SalesReport/SalesReport';
import Setting from './pages/Setting/Setting';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/sales-report" element={<SalesReport/>}/>
          <Route path="/settings" element={<Setting/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;