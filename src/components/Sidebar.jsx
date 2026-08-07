import React from 'react';
import { useData } from '../context/DataContext';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Users, 
  Package, 
  Megaphone, 
  Boxes, 
  PenTool, 
  Database, 
  Info,
  ChevronRight
} from 'lucide-react';

export const Sidebar = () => {
  const { activeModule, setActiveModule } = useData();

  const navItems = [
    { id: 'executive', label: 'Executive Command', icon: LayoutDashboard, category: 'Core Strategy' },
    { id: 'sales', label: 'Sales Intelligence', icon: TrendingUp, category: 'Business Domains' },
    { id: 'customer', label: 'Customer Intelligence', icon: Users, category: 'Business Domains' },
    { id: 'product', label: 'Product Intelligence', icon: Package, category: 'Business Domains' },
    { id: 'marketing', label: 'Marketing Intelligence', icon: Megaphone, category: 'Business Domains' },
    { id: 'inventory', label: 'Inventory Intelligence', icon: Boxes, category: 'Business Domains' },
    { id: 'data-entry', label: 'Data Entry Centre', icon: PenTool, category: 'Operations' },
    { id: 'data-warehouse', label: 'Data Warehouse', icon: Database, category: 'Architecture' },
    { id: 'about', label: 'About & Documentation', icon: Info, category: 'System Info' }
  ];

  return (
    <aside className="dss-sidebar">
      <div className="sidebar-brand">
        <div className="nykaa-logo-wrapper">
          <img src="/nykaa_logo.png" alt="Nykaa Logo" className="nykaa-logo-img" />
          <div className="nykaa-logo-text">NYKAA</div>
        </div>
        <span className="nykaa-tagline">INSIGHT DSS</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          const showHeader = idx === 0 || navItems[idx - 1].category !== item.category;

          return (
            <React.Fragment key={item.id}>
              {showHeader && (
                <div className="nav-section-title">{item.category}</div>
              )}
              <button
                className={`nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveModule(item.id)}
              >
                <Icon size={18} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
                {isActive && <ChevronRight size={14} className="active-indicator" />}
              </button>
            </React.Fragment>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-status">
          <div className="status-indicator"></div>
          <div>
            <div className="footer-title">GCP BigQuery Connected</div>
            <div className="footer-sub">Real-time OLAP Active</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
