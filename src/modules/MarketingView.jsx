import React from 'react';
import { useData } from '../context/DataContext';
import { KPICard } from '../components/KPICard';
import { 
  Megaphone, 
  DollarSign, 
  Target, 
  TrendingUp, 
  PieChart as PieIcon, 
  Zap,
  CheckCircle,
  PauseCircle
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const MarketingView = () => {
  const { marketingData } = useData();

  return (
    <div className="module-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Megaphone className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            Marketing Intelligence & Campaign Performance
          </h1>
          <p className="page-description">
            Ad Channel Attribution, Campaign ROI, CAC Efficiency & Digital Growth Metrics
          </p>
        </div>
      </div>

      {/* Core Marketing KPIs */}
      <div className="grid-4">
        <KPICard 
          title="Overall Campaign ROI" 
          value={marketingData.roi} 
          suffix="x" 
          change={12.4} 
          icon={TrendingUp}
          badge="Target ≥3.5x"
          badgeType="success"
          accentColor="#10b981"
        />
        <KPICard 
          title="Customer Acquisition Cost (CAC)" 
          value={marketingData.cac} 
          prefix="₹" 
          change={-4.8} 
          icon={DollarSign}
          badge="Target ≤₹400"
          badgeType="nykaa"
          accentColor="#e91e63"
        />
        <KPICard 
          title="Conversion Rate" 
          value={marketingData.conversionRate} 
          suffix="%" 
          change={0.8} 
          icon={Target}
          badge="E-comm Industry 2.8%"
          badgeType="info"
          accentColor="#3b82f6"
        />
        <KPICard 
          title="Total Ad Spend" 
          value={marketingData.totalSpend} 
          prefix="₹" 
          suffix=" Cr" 
          change={15.0} 
          icon={Megaphone}
          badge="YTD Spend"
          badgeType="warning"
          accentColor="#d4af37"
        />
      </div>

      {/* Digital Channel Performance Chart */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <PieIcon size={18} style={{ color: 'var(--nykaa-pink)' }} />
            <span>Digital Channel Spend vs Attributed Revenue (₹ Cr)</span>
          </div>
        </div>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={marketingData.channels}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="channel" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={12} unit="Cr" />
              <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
              <Bar dataKey="spend" fill="#d4af37" radius={[4, 4, 0, 0]} name="Ad Spend (₹ Cr)" />
              <Bar dataKey="revenue" fill="#e91e63" radius={[4, 4, 0, 0]} name="Attributed Revenue (₹ Cr)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Marketing Campaigns Table */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <Zap size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
            <span>Active Campaign Performance Tracker</span>
          </div>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign ID</th>
                <th>Campaign Name</th>
                <th>Channel</th>
                <th>Total Spend</th>
                <th>Attributed Revenue</th>
                <th>Campaign ROI</th>
                <th>Blended CAC</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {marketingData.campaigns.map(c => (
                <tr key={c.id}>
                  <td style={{ fontFamily: 'monospace', color: '#f48fb1' }}>{c.id}</td>
                  <td style={{ fontWeight: 600 }}>{c.name}</td>
                  <td><span className="chip">{c.channel}</span></td>
                  <td>{c.spend}</td>
                  <td style={{ color: '#10b981', fontWeight: 600 }}>{c.revenue}</td>
                  <td><span className="badge badge-success">{c.roi}</span></td>
                  <td>{c.cac}</td>
                  <td>
                    <span className={`badge ${c.status === 'Active' ? 'badge-success' : c.status === 'Completed' ? 'badge-nykaa' : 'badge-warning'}`}>
                      {c.status}
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
