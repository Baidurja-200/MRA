import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { KPICard } from '../components/KPICard';
import { 
  Package, 
  Layers, 
  Award, 
  TrendingUp, 
  Search, 
  PieChart as PieIcon,
  Filter
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

export const ProductView = () => {
  const { productData } = useData();
  const [skuSearch, setSkuSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredSKUs = productData.skus.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(skuSearch.toLowerCase()) || 
                          s.brand.toLowerCase().includes(skuSearch.toLowerCase()) ||
                          s.sku.toLowerCase().includes(skuSearch.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || s.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const COLORS = ['#e91e63', '#f48fb1', '#d4af37', '#3b82f6', '#10b981'];

  return (
    <div className="module-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Package className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            Product Intelligence & Portfolio Strategy
          </h1>
          <p className="page-description">
            Assortment Planning, Brand Revenue Share, Category Dynamics & SKU Profitability Matrix
          </p>
        </div>
      </div>

      {/* Category Performance Breakdown */}
      <div className="grid-2">
        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <Layers size={18} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Category Revenue Contribution (₹ Cr) & Margin %</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData.categories}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="category" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                <Bar dataKey="revenue" fill="#e91e63" radius={[4, 4, 0, 0]} name="Revenue (₹ Cr)" />
                <Bar dataKey="marginPct" fill="#10b981" radius={[4, 4, 0, 0]} name="Margin %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <Award size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
              <span>Key Portfolio Brands Revenue (₹ Cr)</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData.brands}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="brand" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                <Bar dataKey="revenue" fill="#f48fb1" radius={[4, 4, 0, 0]} name="Revenue (₹ Cr)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Brand Portfolio Table */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <Award size={18} style={{ color: 'var(--nykaa-pink)' }} />
            <span>Brand Portfolio Performance & Market Share</span>
          </div>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Revenue (₹ Cr)</th>
                <th>Gross Margin %</th>
                <th>Active SKU Count</th>
                <th>Market Share %</th>
                <th>Portfolio Status</th>
              </tr>
            </thead>
            <tbody>
              {productData.brands.map(b => (
                <tr key={b.brand}>
                  <td style={{ fontWeight: 600 }}>{b.brand}</td>
                  <td style={{ color: '#10b981', fontWeight: 600 }}>₹{b.revenue} Cr</td>
                  <td><span className="badge badge-nykaa">{b.marginPct}%</span></td>
                  <td>{b.productsCount} SKUs</td>
                  <td>{b.marketShare}%</td>
                  <td><span className="badge badge-success">High Growth</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Master SKU Catalogue Table */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <Package size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
            <span>SKU Profitability & Assortment Matrix</span>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div className="search-input-wrapper">
              <Search size={15} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search SKU code or name..." 
                value={skuSearch} 
                onChange={(e) => setSkuSearch(e.target.value)}
                className="dss-input search-input"
              />
            </div>

            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Matrix Quadrants</option>
              <option value="Star">Star (High Volume, High Margin)</option>
              <option value="Cash Cow">Cash Cow (High Volume, Mod Margin)</option>
              <option value="Question Mark">Question Mark (Low Volume, High Margin)</option>
            </select>
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
                <th>Unit Price</th>
                <th>Margin %</th>
                <th>Warehouse Stock</th>
                <th>Matrix Quadrant</th>
              </tr>
            </thead>
            <tbody>
              {filteredSKUs.map(s => (
                <tr key={s.sku}>
                  <td style={{ fontFamily: 'monospace', color: '#f48fb1' }}>{s.sku}</td>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td>{s.brand}</td>
                  <td><span className="chip">{s.category}</span></td>
                  <td>₹{s.price}</td>
                  <td><span className="badge badge-nykaa">{s.margin}%</span></td>
                  <td style={{ color: s.stock < 200 ? '#ef4444' : '#10b981', fontWeight: 600 }}>{s.stock} units</td>
                  <td>
                    <span className={`badge ${s.status === 'Star' ? 'badge-success' : s.status === 'Cash Cow' ? 'badge-nykaa' : 'badge-warning'}`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
