import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { KPICard } from '../components/KPICard';
import { WhatIfSimulator } from '../components/WhatIfSimulator';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Tag, 
  Globe, 
  Filter, 
  Search,
  ArrowUpRight
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const SalesView = () => {
  const { salesData, executiveData } = useData();
  const [trendGranularity, setTrendGranularity] = useState('Monthly');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = salesData.topProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="module-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <TrendingUp className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            Sales Intelligence & Revenue Planning
          </h1>
          <p className="page-description">
            Advanced Sales Analytics, Regional Performance, Pricing Strategy & Forecasting Models
          </p>
        </div>
      </div>

      {/* Core Sales Metrics */}
      <div className="grid-5">
        <KPICard 
          title="Total Revenue" 
          value={executiveData.totalRevenue} 
          prefix="₹" 
          suffix=" Cr" 
          change={18.4} 
          icon={DollarSign}
          accentColor="#e91e63"
        />
        <KPICard 
          title="Gross Profit" 
          value={executiveData.grossProfit} 
          prefix="₹" 
          suffix=" Cr" 
          change={19.1} 
          icon={TrendingUp}
          accentColor="#10b981"
        />
        <KPICard 
          title="Total Orders" 
          value={executiveData.totalOrders} 
          suffix=" M" 
          change={14.2} 
          icon={ShoppingBag}
          accentColor="#3b82f6"
        />
        <KPICard 
          title="Average Order Value" 
          value={executiveData.avgOrderValue} 
          prefix="₹" 
          change={6.4} 
          icon={Tag}
          badge="AOV Target ₹1,000"
          badgeType="nykaa"
          accentColor="#f48fb1"
        />
        <KPICard 
          title="Gross Margin %" 
          value={executiveData.grossMarginPct} 
          suffix="%" 
          change={1.2} 
          icon={TrendingUp}
          badge="Target 55%"
          badgeType="success"
          accentColor="#d4af37"
        />
      </div>

      {/* Embedded Strategic What-If Decision Simulator */}
      <WhatIfSimulator />

      {/* Sales Trend Chart & Regional Breakdown */}
      <div className="grid-2">
        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <TrendingUp size={18} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Sales Revenue & Profitability Trend</span>
            </div>
            <div className="tab-pill-group">
              {['Daily', 'Weekly', 'Monthly'].map(g => (
                <button 
                  key={g} 
                  className={`tab-pill ${trendGranularity === g ? 'active' : ''}`}
                  onClick={() => setTrendGranularity(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData.monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} unit="Cr" />
                <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                <Line type="monotone" dataKey="revenue2026" stroke="#e91e63" strokeWidth={3} name="Revenue (₹ Cr)" />
                <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} name="Gross Profit (₹ Cr)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <Globe size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
              <span>Regional Sales & Growth Rate</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData.regionalSales}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="region" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                <Bar dataKey="revenue" fill="#e91e63" radius={[4, 4, 0, 0]} name="Revenue (₹ Cr)" />
                <Bar dataKey="growth" fill="#f48fb1" radius={[4, 4, 0, 0]} name="YoY Growth %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Best Selling Products Data Table */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <ShoppingBag size={18} style={{ color: 'var(--nykaa-pink)' }} />
            <span>Top Performing Best Selling Products Master</span>
          </div>

          <div className="search-input-wrapper">
            <Search size={15} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by SKU, Product Name, Brand..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="dss-input search-input"
            />
          </div>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>SKU Code</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Units Sold</th>
                <th>Revenue (₹ Cr)</th>
                <th>Margin %</th>
                <th>YoY Growth %</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(p => (
                <tr key={p.sku}>
                  <td style={{ fontFamily: 'monospace', color: '#f48fb1' }}>{p.sku}</td>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td>{p.brand}</td>
                  <td><span className="chip">{p.category}</span></td>
                  <td>{p.unitsSold}</td>
                  <td style={{ color: '#10b981', fontWeight: 600 }}>₹{p.revenue} Cr</td>
                  <td><span className="badge badge-nykaa">{p.marginPct}%</span></td>
                  <td style={{ color: '#10b981' }}>+{p.growthPct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
