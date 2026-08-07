import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export const KPICard = ({ 
  title, 
  value, 
  prefix = '', 
  suffix = '', 
  change, 
  changePeriod = 'vs last period', 
  icon: Icon, 
  badge,
  badgeType = 'nykaa',
  accentColor = 'var(--nykaa-pink)',
  target
}) => {
  const isPositive = change > 0;
  const isNegative = change < 0;

  return (
    <div className="dss-card kpi-card" style={{ '--card-accent': accentColor }}>
      <div className="kpi-top">
        <div className="kpi-icon-wrapper" style={{ backgroundColor: `rgba(233, 30, 99, 0.12)`, color: accentColor }}>
          {Icon && <Icon size={20} />}
        </div>
        {badge && (
          <span className={`badge badge-${badgeType}`}>{badge}</span>
        )}
      </div>

      <div className="kpi-body">
        <span className="kpi-title">{title}</span>
        <div className="kpi-value-container">
          <span className="kpi-value">{prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}</span>
        </div>

        {(change !== undefined || target) && (
          <div className="kpi-meta">
            {change !== undefined && (
              <span className={`kpi-change ${isPositive ? 'positive' : isNegative ? 'negative' : 'neutral'}`}>
                {isPositive ? <ArrowUpRight size={14} /> : isNegative ? <ArrowDownRight size={14} /> : <Minus size={14} />}
                {Math.abs(change)}%
              </span>
            )}
            <span className="kpi-period">{target ? `Target: ${target}` : changePeriod}</span>
          </div>
        )}
      </div>

      <div className="kpi-glow-bar" style={{ background: accentColor }}></div>
    </div>
  );
};
