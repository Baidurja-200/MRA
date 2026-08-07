import React, { useState } from 'react';
import { Database, Table, Key, ArrowRight, Server, GitMerge, Cpu, BarChart2 } from 'lucide-react';
import { useData } from '../context/DataContext';

export const StarSchemaVisualizer = () => {
  const { dwhArchitectureData } = useData();
  const [selectedTable, setSelectedTable] = useState(dwhArchitectureData.starSchema.factTables[0]);

  return (
    <div className="dwh-visualizer-container">
      {/* Star Schema Interactive Diagram */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <Database size={18} style={{ color: 'var(--nykaa-pink)' }} />
            <span>Nykaa Enterprise Data Warehouse - Star Schema Topology</span>
          </div>
          <span className="badge badge-nykaa">BigQuery Enterprise OLAP</span>
        </div>

        <div className="schema-diagram">
          {/* Dimension Cards (Left Column) */}
          <div className="schema-column">
            <div className="schema-col-title">Dimension Tables</div>
            {dwhArchitectureData.starSchema.dimensionTables.slice(0, 2).map(dim => (
              <div 
                key={dim.name} 
                className={`schema-node node-dim ${selectedTable.name === dim.name ? 'selected' : ''}`}
                onClick={() => setSelectedTable(dim)}
              >
                <div className="node-header">
                  <Table size={14} />
                  <span>{dim.name}</span>
                </div>
                <div className="node-pk">PK: {dim.primaryKey}</div>
                <div className="node-type">{dim.type}</div>
              </div>
            ))}
          </div>

          {/* Fact Cards (Center Column) */}
          <div className="schema-column schema-center-col">
            <div className="schema-col-title">Core Fact Tables</div>
            {dwhArchitectureData.starSchema.factTables.map(fact => (
              <div 
                key={fact.name} 
                className={`schema-node node-fact ${selectedTable.name === fact.name ? 'selected' : ''}`}
                onClick={() => setSelectedTable(fact)}
              >
                <div className="node-header">
                  <Database size={15} />
                  <span>{fact.name}</span>
                </div>
                <div className="node-pk">PK: {fact.primaryKey}</div>
                <div className="node-sub">{fact.granularity}</div>
              </div>
            ))}
          </div>

          {/* Dimension Cards (Right Column) */}
          <div className="schema-column">
            <div className="schema-col-title">Dimension Tables</div>
            {dwhArchitectureData.starSchema.dimensionTables.slice(2).map(dim => (
              <div 
                key={dim.name} 
                className={`schema-node node-dim ${selectedTable.name === dim.name ? 'selected' : ''}`}
                onClick={() => setSelectedTable(dim)}
              >
                <div className="node-header">
                  <Table size={14} />
                  <span>{dim.name}</span>
                </div>
                <div className="node-pk">PK: {dim.primaryKey}</div>
                <div className="node-type">{dim.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Table Metadata Inspector */}
        <div className="schema-inspector">
          <div className="inspector-header">
            <div className="inspector-title">
              <Table size={18} style={{ color: 'var(--nykaa-rose-gold)' }} />
              <span>Schema Detail Inspector: <strong style={{ color: '#fff' }}>{selectedTable.name}</strong></span>
            </div>
            <span className="badge badge-info">{selectedTable.type}</span>
          </div>

          <div className="inspector-body grid-2">
            <div>
              <div className="inspector-sub">Keys & Relational Links</div>
              <div className="key-list">
                <div className="key-item pk">
                  <Key size={14} /> Primary Key: <strong>{selectedTable.primaryKey}</strong>
                </div>
                {selectedTable.foreignKeys && selectedTable.foreignKeys.map(fk => (
                  <div key={fk} className="key-item fk">
                    <GitMerge size={14} /> Foreign Key: {fk}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inspector-sub">
                {selectedTable.measures ? 'Numeric Measures (Aggregable)' : 'Dimension Attributes'}
              </div>
              <div className="attribute-chips">
                {(selectedTable.measures || selectedTable.attributes).map(item => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ETL Pipeline Architecture Flow */}
      <div className="dss-card">
        <div className="dss-card-header">
          <div className="dss-card-title">
            <Cpu size={18} style={{ color: 'var(--nykaa-pink)' }} />
            <span>End-to-End ETL Pipeline & Data Flow Architecture</span>
          </div>
        </div>

        <div className="etl-flow-grid">
          {dwhArchitectureData.etlFlow.map((step, idx) => (
            <div key={step.step} className="etl-step-card">
              <div className="step-num">{step.step}</div>
              <div className="step-content">
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
              {idx < dwhArchitectureData.etlFlow.length - 1 && (
                <div className="step-arrow">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
