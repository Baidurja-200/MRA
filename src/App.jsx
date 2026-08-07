import React from 'react';
import { DataProvider, useData } from './context/DataContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ExecutiveView } from './modules/ExecutiveView';
import { SalesView } from './modules/SalesView';
import { CustomerView } from './modules/CustomerView';
import { ProductView } from './modules/ProductView';
import { MarketingView } from './modules/MarketingView';
import { InventoryView } from './modules/InventoryView';
import { DataEntryView } from './modules/DataEntryView';
import { DataWarehouseView } from './modules/DataWarehouseView';
import { AboutView } from './modules/AboutView';
import './styles/index.css';
import './styles/components.css';
import './styles/modules.css';

const MainContent = () => {
  const { activeModule } = useData();

  const renderModule = () => {
    switch (activeModule) {
      case 'executive':
        return <ExecutiveView />;
      case 'sales':
        return <SalesView />;
      case 'customer':
        return <CustomerView />;
      case 'product':
        return <ProductView />;
      case 'marketing':
        return <MarketingView />;
      case 'inventory':
        return <InventoryView />;
      case 'data-entry':
        return <DataEntryView />;
      case 'data-warehouse':
        return <DataWarehouseView />;
      case 'about':
        return <AboutView />;
      default:
        return <ExecutiveView />;
    }
  };

  return (
    <main className="main-wrapper">
      <Header />
      <div className="content-scrollable">
        {renderModule()}
      </div>
    </main>
  );
};

export default function App() {
  return (
    <DataProvider>
      <div className="app-container">
        <Sidebar />
        <MainContent />
      </div>
    </DataProvider>
  );
}
