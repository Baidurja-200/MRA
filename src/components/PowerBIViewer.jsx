import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { 
  Maximize2, RefreshCw, Download, Filter, Layers, BarChart2, PieChart as PieIcon, Table as TableIcon 
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const PowerBIViewer = () => {
  const { salesData, productData, showToast } = useData();
  const [activePage, setActivePage] = useState('Overview');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [reportFilter, setReportFilter] = useState('All');

  const COLORS = ['#e91e63', '#f48fb1', '#9c27b0', '#d4af37', '#3b82f6'];

  const categoryPieData = productData.categories.map(c => ({
    name: c.category,
    value: c.revenue
  }));

  const handleExport = () => {
    showToast('Power BI Executive Report exported to PDF/Excel format!', 'success');
  };

  return (
    <div className={`pbi-container ${isFullScreen ? 'pbi-fullscreen' : ''}`}>
      {/* Power BI Top Ribbon Header */}
      <div className="pbi-ribbon">
        <div className="pbi-title-area">
          <div className="pbi-logo">PBI</div>
          <div>
            <div className="pbi-report-name">Nykaa Executive BI Dashboard (Embedded Live)</div>
            <div className="pbi-meta-info">Data Refreshed: Today at 19:15 IST • DirectQuery BigQuery Star Schema</div>
          </div>
        </div>

        <div className="pbi-controls">
          <div className="pbi-tab-selector">
            {['Overview', 'Regional Sales', 'Product Matrix', 'Category Share'].map(page => (
              <button 
                key={page} 
                className={`pbi-tab-btn ${activePage === page ? 'active' : ''}`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="pbi-actions">
            <button className="pbi-btn" onClick={() => showToast('Dataset refreshed from BigQuery!', 'info')} title="Refresh Data">
              <RefreshCw size={14} /> Refresh
            </button>
            <button className="pbi-btn" onClick={handleExport} title="Export Report">
              <Download size={14} /> Export
            </button>
            <button className="pbi-btn" onClick={() => setIsFullScreen(!isFullScreen)} title="Toggle Fullscreen">
              <Maximize2 size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Workspace View */}
      <div className="pbi-workspace">
        {activePage === 'Overview' && (
          <div className="pbi-grid">
            <div className="pbi-card pbi-card-large">
              <div className="pbi-card-header">
                <span>Revenue vs Target Trend (2026 YoY)</span>
                <span className="pbi-badge">Line Visual</span>
              </div>
              <div className="pbi-chart-container">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={salesData.monthlyTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} unit="Cr" />
                    <Tooltip 
                      contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }}
                      formatter={(val) => [`₹${val} Cr`, '']}
                    />
                    <Line type="monotone" dataKey="revenue2026" stroke="#e91e63" strokeWidth={3} name="2026 Revenue" />
                    <Line type="monotone" dataKey="target" stroke="#d4af37" strokeWidth={2} strokeDasharray="5 5" name="Target" />
                    <Line type="monotone" dataKey="revenue2025" stroke="#64748b" strokeWidth={2} name="2025 Revenue" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="pbi-card">
              <div className="pbi-card-header">
                <span>Category Revenue Distribution</span>
                <span className="pbi-badge">Donut Visual</span>
              </div>
              <div className="pbi-chart-container">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={categoryPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {categoryPieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }}
                      formatter={(val) => [`₹${val} Cr`, 'Revenue']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activePage === 'Regional Sales' && (
          <div className="pbi-grid">
            <div className="pbi-card pbi-card-large">
              <div className="pbi-card-header">
                <span>Regional Revenue Breakdown (₹ Cr)</span>
                <span className="pbi-badge">Bar Visual</span>
              </div>
              <div className="pbi-chart-container">
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={salesData.regionalSales}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="region" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} unit="Cr" />
                    <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                    <Bar dataKey="revenue" fill="#e91e63" radius={[4, 4, 0, 0]} name="Revenue (₹ Cr)" />
                    <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} name="Profit (₹ Cr)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activePage === 'Product Matrix' && (
          <div className="pbi-card pbi-card-full">
            <div className="pbi-card-header">
              <span>Top Best Selling Products Matrix</span>
              <span className="pbi-badge">Table Visual</span>
            </div>
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>SKU Code</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Units Sold</th>
                    <th>Revenue (₹ Cr)</th>
                    <th>Margin %</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.topProducts.map((p) => (
                    <tr key={p.sku}>
                      <td style={{ fontFamily: 'monospace', color: '#f48fb1' }}>{p.sku}</td>
                      <td style={{ fontWeight: 600 }}>{p.name}</td>
                      <td>{p.category}</td>
                      <td>{p.brand}</td>
                      <td>{p.unitsSold}</td>
                      <td style={{ color: '#10b981', fontWeight: 600 }}>₹{p.revenue}</td>
                      <td><span className="badge badge-nykaa">{p.marginPct}%</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activePage === 'Category Share' && (
          <div className="pbi-grid">
            <div className="pbi-card pbi-card-large">
              <div className="pbi-card-header">
                <span>Category Performance & YoY Growth Rate</span>
                <span className="pbi-badge">Bar Chart</span>
              </div>
              <div className="pbi-chart-container">
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={productData.categories}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="category" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                    <Bar dataKey="revenue" fill="#f48fb1" radius={[4, 4, 0, 0]} name="Revenue (₹ Cr)" />
                    <Bar dataKey="growth" fill="#3b82f6" radius={[4, 4, 0, 0]} name="YoY Growth %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
