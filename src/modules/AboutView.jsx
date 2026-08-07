import React from 'react';
import { useData } from '../context/DataContext';
import { 
  Info, 
  Target, 
  Cpu, 
  Sparkles, 
  BookOpen, 
  CheckCircle,
  FileText
} from 'lucide-react';

export const AboutView = () => {
  const { kpiCatalogueData } = useData();

  return (
    <div className="module-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Info className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            About & Project Documentation
          </h1>
          <p className="page-description">
            Comprehensive Project Specifications, Executive Objectives, System Architecture & KPI Dictionary
          </p>
        </div>
      </div>

      {/* Overview & Objectives */}
      <div className="grid-2">
        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <Target size={18} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Project Overview & Executive Purpose</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
            The <strong>Nykaa Insight Decision Support System (DSS)</strong> is an enterprise analytical platform built to empower senior executive leadership, brand managers, marketing strategists, and supply chain planners. By integrating real-time transaction streams with BigQuery Star Schema warehousing and prescriptive AI decision engines, the system transforms raw beauty retail data into actionable business intelligence.
          </p>
        </div>

        <div className="dss-card">
          <div className="dss-card-header">
            <div className="dss-card-title">
              <Cpu size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
              <span>Core Technology Stack</span>
            </div>
          </div>
          <ul className="tech-stack-list">
            <li><strong>Frontend Application:</strong> React 18 + Vite with Custom Responsive Design System</li>
            <li><strong>Data Visualization Engine:</strong> Recharts, Custom Canvas & Power BI Embedded Visuals</li>
            <li><strong>Data Warehouse Backend:</strong> Google Cloud BigQuery Star Schema (Fact/Dim Tables)</li>
            <li><strong>State Management:</strong> Reactive React DataContext with real-time operational sync</li>
            <li><strong>Analytics & AI Engine:</strong> Elasticity What-If Simulator & Prescriptive AI Alert Rules</li>
          </ul>
        </div>
      </div>

      {/* Complete KPI Catalogue Table */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <BookOpen size={18} style={{ color: 'var(--nykaa-pink)' }} />
            <span>Master KPI Catalogue & Mathematical Formula Dictionary</span>
          </div>
          <span className="badge badge-nykaa">14 Strategic Metric Definitions</span>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>KPI Metric</th>
                <th>Category</th>
                <th>Mathematical Formula</th>
                <th>Target Benchmark</th>
                <th>Strategic Business Decision Utility</th>
              </tr>
            </thead>
            <tbody>
              {kpiCatalogueData.map(k => (
                <tr key={k.kpi}>
                  <td style={{ fontWeight: 700, color: '#fff' }}>{k.kpi}</td>
                  <td><span className="chip">{k.category}</span></td>
                  <td style={{ fontFamily: 'monospace', color: '#f48fb1', fontSize: '0.82rem' }}>{k.formula}</td>
                  <td><span className="badge badge-success">{k.target}</span></td>
                  <td style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{k.decision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Future Roadmap */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <Sparkles size={18} style={{ color: 'var(--nykaa-gold)' }} />
            <span>Future Scope & Strategic Roadmap</span>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: '8px' }}>
          <div className="roadmap-box">
            <div className="rm-title">1. GenAI Conversational Copilot</div>
            <p className="rm-desc">Natural language SQL querying across BigQuery tables allowing executives to ask "What was Charlotte Tilbury's net profit margin in Mumbai last month?"</p>
          </div>
          <div className="roadmap-box">
            <div className="rm-title">2. Supply Chain Digital Twin</div>
            <p className="rm-desc">Automated predictive inventory replenishment using weather forecasting and festive sale sentiment models.</p>
          </div>
          <div className="roadmap-box">
            <div className="rm-title">3. Personalized CAC Optimizer</div>
            <p className="rm-desc">Real-time programmatic ad bid adjustments based on customer micro-segment retention probabilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
