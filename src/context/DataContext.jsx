import React, { createContext, useContext, useState } from 'react';
import {
  initialExecutiveData,
  initialSalesData,
  initialCustomerData,
  initialProductData,
  initialMarketingData,
  initialInventoryData,
  dwhArchitectureData,
  kpiCatalogueData
} from '../data/mockData';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [activeModule, setActiveModule] = useState('executive');
  const [timeframe, setTimeframe] = useState('YTD 2026');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // State slices
  const [executiveData, setExecutiveData] = useState(initialExecutiveData);
  const [salesData, setSalesData] = useState(initialSalesData);
  const [customerData, setCustomerData] = useState(initialCustomerData);
  const [productData, setProductData] = useState(initialProductData);
  const [marketingData, setMarketingData] = useState(initialMarketingData);
  const [inventoryData, setInventoryData] = useState(initialInventoryData);

  // Notification Toast State
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => setToast(null), 4000);
  };

  // Reorder Trigger Action
  const triggerAutoReorder = (alertId) => {
    setInventoryData(prev => {
      const updatedAlerts = prev.alerts.map(item => {
        if (item.id === alertId) {
          return { ...item, status: 'PO Placed (Pending Delivery)', currentStock: item.currentStock + item.optimalOrder };
        }
        return item;
      });
      return {
        ...prev,
        alerts: updatedAlerts,
        lowStockCount: Math.max(0, prev.lowStockCount - 1)
      };
    });
    showToast(`Purchase order generated successfully for alert #${alertId}! Supply chain team notified.`, 'success');
  };

  // What-If Pricing Simulator Action
  const applyWhatIfSimulation = (priceAdjustmentPct, discountPct) => {
    const revenueImpact = (executiveData.totalRevenue * (priceAdjustmentPct / 100)).toFixed(2);
    const marginImpact = (priceAdjustmentPct * 0.85 - discountPct * 0.5).toFixed(1);
    
    showToast(`What-If Model Applied: Price change of ${priceAdjustmentPct > 0 ? '+' : ''}${priceAdjustmentPct}% yields est. ₹${revenueImpact} Cr revenue shift & ${marginImpact > 0 ? '+' : ''}${marginImpact}% margin impact.`, 'info');
  };

  // Form Handlers from Data Entry Centre
  const addCustomerRecord = (newCust) => {
    setCustomerData(prev => ({
      ...prev,
      totalCustomers: parseFloat((prev.totalCustomers + 0.001).toFixed(3)),
      segments: prev.segments.map(seg => seg.segment === newCust.segment ? { ...seg, count: `${(parseInt(seg.count.replace(/,/g, '')) + 1).toLocaleString()}` } : seg)
    }));
    setExecutiveData(prev => ({ ...prev, activeCustomers: parseFloat((prev.activeCustomers + 0.001).toFixed(3)) }));
    showToast(`New customer '${newCust.name}' registered in Data Warehouse!`, 'success');
  };

  const addProductRecord = (newProd) => {
    setProductData(prev => ({
      ...prev,
      skus: [
        {
          sku: newProd.sku || `NYK-NEW-${Math.floor(100 + Math.random() * 900)}`,
          name: newProd.name,
          brand: newProd.brand,
          category: newProd.category,
          price: parseFloat(newProd.price),
          margin: parseFloat(newProd.margin),
          status: 'Star',
          stock: parseInt(newProd.stock)
        },
        ...prev.skus
      ]
    }));
    showToast(`Product SKU '${newProd.name}' added to Product Intelligence Master!`, 'success');
  };

  const addSalesRecord = (newSale) => {
    const saleAmountCr = parseFloat(newSale.amount) / 10000000;
    setExecutiveData(prev => ({
      ...prev,
      totalRevenue: parseFloat((prev.totalRevenue + saleAmountCr).toFixed(2)),
      grossProfit: parseFloat((prev.grossProfit + (saleAmountCr * 0.55)).toFixed(2)),
      totalOrders: parseFloat((prev.totalOrders + 0.001).toFixed(3))
    }));
    showToast(`Sales transaction of ₹${parseFloat(newSale.amount).toLocaleString()} logged into Fact_Sales!`, 'success');
  };

  const addCampaignRecord = (newCamp) => {
    setMarketingData(prev => ({
      ...prev,
      campaigns: [
        {
          id: `CMP-2026-0${prev.campaigns.length + 1}`,
          name: newCamp.name,
          channel: newCamp.channel,
          spend: `₹${newCamp.spend} Cr`,
          revenue: `₹${(parseFloat(newCamp.spend) * 3.8).toFixed(1)} Cr`,
          roi: '3.8x',
          cac: '₹360',
          status: 'Active'
        },
        ...prev.campaigns
      ]
    }));
    showToast(`Marketing campaign '${newCamp.name}' deployed!`, 'success');
  };

  const updateInventoryStock = (skuCode, stockValue) => {
    setProductData(prev => ({
      ...prev,
      skus: prev.skus.map(s => s.sku === skuCode ? { ...s, stock: parseInt(stockValue) } : s)
    }));
    showToast(`Inventory stock for SKU ${skuCode} updated to ${stockValue} units.`, 'info');
  };

  return (
    <DataContext.Provider value={{
      activeModule,
      setActiveModule,
      timeframe,
      setTimeframe,
      selectedRegion,
      setSelectedRegion,
      selectedCategory,
      setSelectedCategory,
      executiveData,
      salesData,
      customerData,
      productData,
      marketingData,
      inventoryData,
      dwhArchitectureData,
      kpiCatalogueData,
      toast,
      showToast,
      triggerAutoReorder,
      applyWhatIfSimulation,
      addCustomerRecord,
      addProductRecord,
      addSalesRecord,
      addCampaignRecord,
      updateInventoryStock
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
