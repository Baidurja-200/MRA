import React, { useState } from 'react';
import { Sliders, Zap, TrendingUp, DollarSign, Percent, RefreshCcw } from 'lucide-react';
import { useData } from '../context/DataContext';

export const WhatIfSimulator = () => {
  const { executiveData, applyWhatIfSimulation } = useData();

  const [priceDelta, setPriceDelta] = useState(2); // %
  const [discountRate, setDiscountRate] = useState(8); // %
  const [marketingBudgetDelta, setMarketingBudgetDelta] = useState(3); // ₹ Cr

  const baseRevenue = executiveData.totalRevenue;
  const baseMargin = executiveData.grossMarginPct;

  // Elasticity Model Calculations
  // Price elasticity of demand assumed e = -1.2 for beauty products
  const volumeShiftPct = (-1.2 * priceDelta) + (0.8 * (discountRate - 8)) + (0.5 * marketingBudgetDelta);
  const projectedRevenue = (baseRevenue * (1 + (priceDelta / 100)) * (1 + (volumeShiftPct / 100))).toFixed(2);
  const projectedMargin = (baseMargin + (priceDelta * 0.7) - (discountRate * 0.4)).toFixed(1);
  const revenueDifference = (projectedRevenue - baseRevenue).toFixed(2);
  const netProfitDifference = ((projectedRevenue * (projectedMargin / 100)) - (baseRevenue * (baseMargin / 100)) - (marketingBudgetDelta * 0.4)).toFixed(2);

  const handleReset = () => {
    setPriceDelta(0);
    setDiscountRate(8);
    setMarketingBudgetDelta(0);
  };

  const handleApply = () => {
    applyWhatIfSimulation(priceDelta, discountRate);
  };

  return (
    <div className="dss-card simulator-card">
      <div className="dss-card-header">
        <div className="dss-card-title">
          <Sliders size={18} style={{ color: 'var(--nykaa-pink)' }} />
          <span>Strategic What-If Decision Simulator</span>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={handleReset} style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
          <RefreshCcw size={12} /> Reset Parameters
        </button>
      </div>

      <div className="simulator-grid">
        {/* Sliders Area */}
        <div className="simulator-controls">
          <div className="slider-group">
            <div className="slider-label">
              <span>Base Price Adjustment (%)</span>
              <span className={`slider-value ${priceDelta >= 0 ? 'text-success' : 'text-danger'}`}>
                {priceDelta > 0 ? `+${priceDelta}` : priceDelta}%
              </span>
            </div>
            <input 
              type="range" 
              min="-10" 
              max="15" 
              step="0.5" 
              value={priceDelta} 
              onChange={(e) => setPriceDelta(parseFloat(e.target.value))}
              className="dss-slider"
            />
            <div className="slider-sub">Simulates elasticity impact across SKU portfolio</div>
          </div>

          <div className="slider-group">
            <div className="slider-label">
              <span>Promotional Discount Rate (%)</span>
              <span className="slider-value text-nykaa">{discountRate}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="25" 
              step="1" 
              value={discountRate} 
              onChange={(e) => setDiscountRate(parseFloat(e.target.value))}
              className="dss-slider"
            />
            <div className="slider-sub">Festival discount campaign simulation</div>
          </div>

          <div className="slider-group">
            <div className="slider-label">
              <span>Marketing Budget Delta (₹ Cr)</span>
              <span className="slider-value text-info">
                {marketingBudgetDelta > 0 ? `+₹${marketingBudgetDelta}` : `₹${marketingBudgetDelta}`} Cr
              </span>
            </div>
            <input 
              type="range" 
              min="-5" 
              max="15" 
              step="1" 
              value={marketingBudgetDelta} 
              onChange={(e) => setMarketingBudgetDelta(parseFloat(e.target.value))}
              className="dss-slider"
            />
            <div className="slider-sub">Reallocate digital ad spend budget</div>
          </div>
        </div>

        {/* Real-Time Outcome Panel */}
        <div className="simulator-outcomes">
          <div className="outcome-box">
            <span className="outcome-label">Projected Gross Revenue</span>
            <div className="outcome-value">₹{projectedRevenue} Cr</div>
            <span className={`outcome-delta ${revenueDifference >= 0 ? 'positive' : 'negative'}`}>
              {revenueDifference >= 0 ? `+₹${revenueDifference}` : `-₹${Math.abs(revenueDifference)}`} Cr vs Baseline
            </span>
          </div>

          <div className="outcome-box">
            <span className="outcome-label">Projected Gross Margin %</span>
            <div className="outcome-value">{projectedMargin}%</div>
            <span className="outcome-sub">Baseline: {baseMargin}%</span>
          </div>

          <div className="outcome-box">
            <span className="outcome-label">Estimated Net Profit Shift</span>
            <div className={`outcome-value ${netProfitDifference >= 0 ? 'text-success' : 'text-danger'}`}>
              {netProfitDifference >= 0 ? `+₹${netProfitDifference}` : `-₹${Math.abs(netProfitDifference)}`} Cr
            </div>
            <span className="outcome-sub">Net ROI after ad spend shift</span>
          </div>

          <button className="btn btn-primary" onClick={handleApply} style={{ width: '100%', marginTop: '8px' }}>
            <Zap size={16} /> Apply Simulation Scenario to DSS
          </button>
        </div>
      </div>
    </div>
  );
};
