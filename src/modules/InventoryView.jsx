import React from 'react';
import { useData } from '../context/DataContext';
import { KPICard } from '../components/KPICard';
import { 
  Boxes, 
  AlertTriangle, 
  XCircle, 
  RotateCw, 
  DollarSign, 
  Warehouse, 
  ShoppingBag,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const InventoryView = () => {
  const { inventoryData, triggerAutoReorder } = useData();

  return (
    <div className="module-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Boxes className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            Inventory Intelligence & Supply Chain Optimization
          </h1>
          <p className="page-description">
            Stock Valuation, Warehouse Capacity Utilization, Low-Stock Monitoring & Automated PO Triggers
          </p>
        </div>
      </div>

      {/* Core Inventory Metrics */}
      <div className="grid-5">
        <KPICard 
          title="Inventory Health Score" 
          value={inventoryData.healthScore} 
          suffix="%" 
          change={1.4} 
          icon={Boxes}
          badge="Target ≥90%"
          badgeType="success"
          accentColor="#10b981"
        />
        <KPICard 
          title="Total Stock Valuation" 
          value={inventoryData.stockValuation} 
          prefix="₹" 
          suffix=" Cr" 
          change={4.2} 
          icon={DollarSign}
          badge="Valuation"
          accentColor="#e91e63"
        />
        <KPICard 
          title="Low Stock Alert SKUs" 
          value={inventoryData.lowStockCount} 
          change={-2.0} 
          icon={AlertTriangle}
          badge="Replenish"
          badgeType="warning"
          accentColor="#f59e0b"
        />
        <KPICard 
          title="Out of Stock SKUs" 
          value={inventoryData.outOfStockCount} 
          change={-1.0} 
          icon={XCircle}
          badge="Urgent"
          badgeType="danger"
          accentColor="#ef4444"
        />
        <KPICard 
          title="Inventory Turnover Ratio" 
          value={inventoryData.turnoverRatio} 
          suffix="x / yr" 
          change={0.3} 
          icon={RotateCw}
          badge="Optimal 4.0x"
          badgeType="nykaa"
          accentColor="#f48fb1"
        />
      </div>

      {/* Warehouse Status Grid */}
      <div className="section-title-wrapper" style={{ marginTop: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Warehouse size={20} style={{ color: 'var(--nykaa-rose-gold)' }} />
          Regional Warehouse Operations & Capacity Status
        </h2>
      </div>

      <div className="grid-4">
        {inventoryData.warehouses.map(wh => (
          <div key={wh.name} className="dss-card warehouse-card">
            <div className="wh-top">
              <span className="wh-name">{wh.name}</span>
              <span className={`badge ${wh.health === 'Optimal' ? 'badge-success' : 'badge-warning'}`}>
                {wh.health}
              </span>
            </div>
            <div className="wh-loc">{wh.location}</div>

            <div className="wh-capacity-bar-wrapper">
              <div className="wh-capacity-label">
                <span>Capacity Utilized</span>
                <strong>{wh.utilizedPct}%</strong>
              </div>
              <div className="wh-bar">
                <div className="wh-fill" style={{ width: `${wh.utilizedPct}%`, background: wh.utilizedPct > 90 ? '#f59e0b' : 'var(--nykaa-pink)' }}></div>
              </div>
            </div>

            <div className="wh-footer">
              <span>Capacity: {wh.totalCapacity}</span>
              <span className="wh-alerts">{wh.lowStockSkus} Low Stock SKUs</span>
            </div>
          </div>
        ))}
      </div>

      {/* Reorder Alerts & One-Click PO Trigger Table */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <Zap size={18} style={{ color: 'var(--nykaa-pink)' }} />
            <span>Automated Reorder Alerts & Purchase Order Actions</span>
          </div>
          <span className="badge badge-nykaa">AI Prescriptive Replenishment</span>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Alert ID</th>
                <th>SKU Code</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Current Stock</th>
                <th>Reorder Level</th>
                <th>Optimal Order Qty</th>
                <th>Status</th>
                <th>Action Trigger</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.alerts.map(alt => (
                <tr key={alt.id}>
                  <td style={{ fontFamily: 'monospace', color: '#f48fb1' }}>{alt.id}</td>
                  <td style={{ fontFamily: 'monospace' }}>{alt.sku}</td>
                  <td style={{ fontWeight: 600 }}>{alt.name}</td>
                  <td>{alt.brand}</td>
                  <td style={{ color: alt.currentStock === 0 ? '#ef4444' : '#f59e0b', fontWeight: 700 }}>
                    {alt.currentStock} units
                  </td>
                  <td>{alt.reorderLevel} units</td>
                  <td style={{ color: '#10b981', fontWeight: 600 }}>+{alt.optimalOrder} units</td>
                  <td>
                    <span className={`badge ${alt.status.includes('PO Placed') ? 'badge-info' : alt.status === 'Out of Stock' ? 'badge-danger' : 'badge-warning'}`}>
                      {alt.status}
                    </span>
                  </td>
                  <td>
                    {alt.status.includes('PO Placed') ? (
                      <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={14} /> PO Issued
                      </span>
                    ) : (
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => triggerAutoReorder(alt.id)}
                        style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                      >
                        <Zap size={12} /> Issue PO ({alt.optimalOrder})
                      </button>
                    )}
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
