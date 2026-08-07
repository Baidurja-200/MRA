import React from 'react';
import { useData } from '../context/DataContext';
import { 
  Sparkles, 
  Calendar, 
  Globe, 
  Layers, 
  Bell, 
  CheckCircle2, 
  AlertCircle,
  Database,
  Menu
} from 'lucide-react';

export const Header = () => {
  const { 
    timeframe, 
    setTimeframe, 
    selectedRegion, 
    setSelectedRegion, 
    selectedCategory, 
    setSelectedCategory,
    toggleSidebar,
    toast,
    executiveData
  } = useData();

  return (
    <header className="dss-header">
      <div className="header-left">
        <button 
          className="mobile-toggle-btn" 
          onClick={toggleSidebar} 
          aria-label="Open Navigation Menu"
        >
          <Menu size={22} />
        </button>

        <div className="brand-badge">
          <Sparkles className="brand-icon" size={20} />
          <div>
            <div className="brand-title">NYKAA INSIGHT</div>
            <div className="brand-subtitle">Executive Decision Support System</div>
          </div>
        </div>
        <div className="system-pill">
          <span className="pulse-dot"></span>
          <span>DSS Engine v3.4 Active</span>
        </div>
      </div>

      <div className="header-filters">
        <div className="filter-group">
          <Calendar size={15} className="filter-icon" />
          <select 
            value={timeframe} 
            onChange={(e) => setTimeframe(e.target.value)}
            className="filter-select"
          >
            <option value="YTD 2026">YTD 2026</option>
            <option value="MTD">MTD (August)</option>
            <option value="Q3 2026">Q3 2026</option>
            <option value="Full Year 2025">Full Year 2025</option>
          </select>
        </div>

        <div className="filter-group">
          <Globe size={15} className="filter-icon" />
          <select 
            value={selectedRegion} 
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Regions</option>
            <option value="North">North Zone</option>
            <option value="South">South Zone</option>
            <option value="West">West Zone</option>
            <option value="East">East Zone</option>
            <option value="Central">Central Zone</option>
          </select>
        </div>

        <div className="filter-group">
          <Layers size={15} className="filter-icon" />
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Categories</option>
            <option value="Makeup">Makeup</option>
            <option value="Skincare">Skincare</option>
            <option value="Haircare">Haircare</option>
            <option value="Fragrances">Fragrances</option>
            <option value="Appliances">Appliances</option>
          </select>
        </div>
      </div>

      <div className="header-right">
        <div className="alerts-indicator" title="System Alerts">
          <Bell size={18} />
          <span className="alerts-badge">{executiveData.executiveAlerts.length}</span>
        </div>

        <div className="user-profile">
          <div className="avatar">EX</div>
          <div className="user-info">
            <span className="user-name">Executive Command</span>
            <span className="user-role">Strategic Leadership</span>
          </div>
        </div>
      </div>

      {toast && (
        <div className={`toast-notification toast-${toast.type}`}>
          {toast.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          <span>{toast.message}</span>
        </div>
      )}
    </header>
  );
};
