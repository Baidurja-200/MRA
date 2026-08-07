import React from 'react';
import { useData } from '../context/DataContext';
import { KPICard } from '../components/KPICard';
import { PowerBIViewer } from '../components/PowerBIViewer';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  PieChart as PieIcon,
  Activity
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

export const ExecutiveView = () => {
  const { executiveData, salesData, productData, setActiveModule, triggerAutoReorder, showToast } = useData();

  return (
    <div className="module-container">
      {/* Page Title & Subtitle */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Activity className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            Executive Command Center
          </h1>
          <p className="page-description">
            Single-Page Strategic Overview for Senior Leadership & Board Reporting
          </p>
        </div>

        <div className="health-score-card">
          <div className="health-score-number">{executiveData.healthScore}</div>
          <div className="health-score-info">
            <span className="health-score-label">Business Health Score</span>
            <span className="badge badge-success"><ShieldCheck size={12} /> Optimal Performance</span>
          </div>
        </div>
      </div>

      {/* Top Strategic KPIs */}
      <div className="grid-5">
        <KPICard 
          title="Total Revenue"
          value={executiveData.totalRevenue}
          prefix="₹"
          suffix=" Cr"
          change={executiveData.totalRevenueYoY}
          changePeriod="YoY Growth"
          icon={DollarSign}
          badge="YTD 2026"
          accentColor="#e91e63"
        />

        <KPICard 
          title="Gross Profit"
          value={executiveData.grossProfit}
          prefix="₹"
          suffix=" Cr"
          change={19.1}
          changePeriod="Margin: 55.0%"
          icon={TrendingUp}
          badge="Margin 55%"
          badgeType="success"
          accentColor="#10b981"
        />

        <KPICard 
          title="Total Orders"
          value={executiveData.totalOrders}
          suffix=" M"
          change={executiveData.totalOrdersYoY}
          changePeriod="YoY Volume"
          icon={ShoppingBag}
          badge="4.82M Volume"
          badgeType="info"
          accentColor="#3b82f6"
        />

        <KPICard 
          title="Active Customers"
          value={executiveData.activeCustomers}
          suffix=" M"
          change={executiveData.activeCustomersYoY}
          changePeriod="Active Shoppers"
          icon={Users}
          badge="48.5% Repeat"
          badgeType="nykaa"
          accentColor="#f48fb1"
        />

        <KPICard 
          title="Inventory Health"
          value={executiveData.inventoryHealth}
          suffix="%"
          change={2.1}
          changePeriod="18 Low Stock SKUs"
          icon={Zap}
          badge="92.4% Stock"
          badgeType="warning"
          accentColor="#d4af37"
        />
      </div>

      {/* AI Decision Engine & Executive Alerts Row */}
      <div className="grid-2-1">
        {/* AI Decision Engine Card */}
        <div className="dss-card ai-engine-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <Sparkles size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
              <span>AI Strategic Decision Engine (Automated Prescriptive Insights)</span>
            </div>
            <span className="badge badge-nykaa">GenAI Agent Prescriptions</span>
          </div>

          <div className="ai-rec-list">
            {executiveData.aiRecommendations.map(rec => (
              <div key={rec.id} className="ai-rec-item">
                <div className="ai-rec-top">
                  <div className="ai-rec-title">
                    <span className={`priority-dot priority-${rec.priority.toLowerCase()}`}></span>
                    <strong>{rec.title}</strong>
                  </div>
                  <span className="badge badge-success">{rec.impact}</span>
                </div>

                <p className="ai-rec-desc">{rec.description}</p>

                <div className="ai-rec-footer">
                  <span className="rec-cat">Category: {rec.category}</span>
                  <button 
                    className="btn btn-outline-nykaa btn-sm"
                    onClick={() => {
                      if (rec.targetModule === 'Inventory') triggerAutoReorder('INV-101');
                      else setActiveModule(rec.targetModule.toLowerCase());
                    }}
                  >
                    <span>{rec.actionText}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Alerts Feed */}
        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <AlertTriangle size={18} style={{ color: '#f59e0b' }} />
              <span>Executive Alert Feed</span>
            </div>
            <span className="badge badge-warning">Live System Feeds</span>
          </div>

          <div className="alerts-feed-list">
            {executiveData.executiveAlerts.map(alt => (
              <div key={alt.id} className={`alert-feed-item alert-feed-${alt.type}`}>
                <div className="alert-feed-content">{alt.message}</div>
                <div className="alert-feed-time">{alt.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Trend & Top Brands/Categories Breakdown */}
      <div className="grid-2">
        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <TrendingUp size={18} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Monthly Revenue Trend vs Target (2026 YoY)</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData.monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} unit="Cr" />
                <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                <Line type="monotone" dataKey="revenue2026" stroke="#e91e63" strokeWidth={3} name="2026 Actual" />
                <Line type="monotone" dataKey="target" stroke="#d4af37" strokeWidth={2} strokeDasharray="4 4" name="Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <PieIcon size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
              <span>Top Portfolio Brands Performance (Revenue ₹ Cr)</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData.brands.slice(0, 5)}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="brand" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={12} unit="Cr" />
                <Tooltip contentStyle={{ background: '#180d21', borderColor: '#e91e63', color: '#fff' }} />
                <Bar dataKey="revenue" fill="#e91e63" radius={[4, 4, 0, 0]} name="Revenue (₹ Cr)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Embedded Power BI Executive Report */}
      <div className="section-title-wrapper" style={{ marginTop: '12px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#fff' }}>Power BI Executive Dashboard Integration</h2>
      </div>
      <PowerBIViewer />
    </div>
  );
};
