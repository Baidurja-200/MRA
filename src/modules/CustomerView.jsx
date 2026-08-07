import React from 'react';
import { useData } from '../context/DataContext';
import { KPICard } from '../components/KPICard';
import { 
  Users, 
  Repeat, 
  HeartHandshake, 
  DollarSign, 
  MapPin, 
  UserCheck, 
  UserPlus, 
  TrendingUp,
  PieChart as PieIcon
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export const CustomerView = () => {
  const { customerData, executiveData } = useData();

  const COLORS = ['#e91e63', '#f48fb1', '#d4af37', '#3b82f6'];

  const segmentPie = customerData.segments.map(s => ({
    name: s.segment,
    value: s.percentage
  }));

  return (
    <div className="module-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Users className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            Customer Intelligence & Retention Analytics
          </h1>
          <p className="page-description">
            Customer Lifetime Value (CLV), Segmentation, Cohort Retention Curves & Geographic Distribution
          </p>
        </div>
      </div>

      {/* Customer Core KPIs */}
      <div className="grid-5">
        <KPICard 
          title="Total Active Customers" 
          value={executiveData.activeCustomers} 
          suffix=" M" 
          change={21.5} 
          icon={Users}
          badge="3.15M Base"
          accentColor="#e91e63"
        />
        <KPICard 
          title="Repeat Purchase Rate" 
          value={executiveData.repeatPurchaseRate} 
          suffix="%" 
          change={4.2} 
          icon={Repeat}
          badge="Benchmark 42%"
          badgeType="success"
          accentColor="#10b981"
        />
        <KPICard 
          title="Customer Lifetime Value" 
          value={executiveData.customerLifetimeValue} 
          prefix="₹" 
          change={8.5} 
          icon={HeartHandshake}
          badge="Target ₹4,500"
          badgeType="nykaa"
          accentColor="#f48fb1"
        />
        <KPICard 
          title="Customer Acquisition Cost" 
          value={executiveData.cac} 
          prefix="₹" 
          change={-3.2} 
          icon={DollarSign}
          badge="Target ≤₹400"
          badgeType="info"
          accentColor="#3b82f6"
        />
        <KPICard 
          title="Annual Churn Rate" 
          value={customerData.churnRate} 
          suffix="%" 
          change={-1.4} 
          icon={UserCheck}
          badge="Low Churn"
          badgeType="success"
          accentColor="#d4af37"
        />
      </div>

      {/* Customer Segments & Cohort Retention */}
      <div className="grid-2">
        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <PieIcon size={18} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Customer Segmentation Breakdown (%)</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={segmentPie}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {segmentPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <TrendingUp size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
              <span>Cohort Retention Rates (% Active over 12 Months)</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={customerData.cohortData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="cohort" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} unit="%" />
                <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                <Line type="monotone" dataKey="m1" stroke="#e91e63" name="Month 1" strokeWidth={2} />
                <Line type="monotone" dataKey="m3" stroke="#f48fb1" name="Month 3" strokeWidth={2} />
                <Line type="monotone" dataKey="m6" stroke="#d4af37" name="Month 6" strokeWidth={2} />
                <Line type="monotone" dataKey="m12" stroke="#10b981" name="Month 12" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Customer Segments Detailed Cards */}
      <div className="grid-4">
        {customerData.segments.map(seg => (
          <div key={seg.segment} className="dss-card segment-card">
            <div className="segment-top">
              <span className="segment-title">{seg.segment}</span>
              <span className="badge badge-nykaa">{seg.percentage}% Base</span>
            </div>
            <div className="segment-count">{seg.count} Shoppers</div>
            <div className="segment-clv">Avg CLV: <strong>{seg.avgCLV}</strong></div>
            <p className="segment-desc">{seg.description}</p>
          </div>
        ))}
      </div>

      {/* City Distribution Data Table */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <MapPin size={18} style={{ color: 'var(--nykaa-pink)' }} />
            <span>Top Metro & Tier-1 City Customer Penetration</span>
          </div>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>City Name</th>
                <th>Active Customer Base</th>
                <th>Annual Revenue Contribution</th>
                <th>Repeat Purchase Rate %</th>
                <th>Market Penetration Status</th>
              </tr>
            </thead>
            <tbody>
              {customerData.cities.map(c => (
                <tr key={c.city}>
                  <td style={{ fontWeight: 600 }}>{c.city}</td>
                  <td>{c.customers}</td>
                  <td style={{ color: '#10b981', fontWeight: 600 }}>{c.revenue}</td>
                  <td><span className="badge badge-nykaa">{c.repeatRate}</span></td>
                  <td><span className="badge badge-success">Strong Retention</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
