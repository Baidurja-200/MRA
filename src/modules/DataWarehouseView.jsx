import React from 'react';
import { Database, Server, GitMerge, Cpu, BarChart2 } from 'lucide-react';
import { StarSchemaVisualizer } from '../components/StarSchemaVisualizer';

export const DataWarehouseView = () => {
  return (
    <div className="module-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Database className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            Data Warehouse & BI Architecture
          </h1>
          <p className="page-description">
            Star Schema Data Modeling, Fact & Dimension Tables, Relational Keys & End-to-End ETL Pipeline
          </p>
        </div>
      </div>

      <StarSchemaVisualizer />
    </div>
  );
};
