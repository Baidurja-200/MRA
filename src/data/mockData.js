// Nykaa Insight Decision Support System - Master Mock Dataset

export const initialExecutiveData = {
  healthScore: 94,
  totalRevenue: 485.6, // in ₹ Crores
  totalRevenueYoY: 18.4,
  grossProfit: 267.1, // in ₹ Crores
  grossMarginPct: 55.0,
  totalOrders: 4.82, // in Millions
  totalOrdersYoY: 14.2,
  activeCustomers: 3.15, // in Millions
  activeCustomersYoY: 21.5,
  avgOrderValue: 1007, // in ₹
  repeatPurchaseRate: 48.5, // %
  customerLifetimeValue: 4850, // ₹
  cac: 385, // ₹
  campaignROI: 3.85, // multiplier
  inventoryHealth: 92.4, // %
  lowStockCount: 18,
  outOfStockCount: 4,

  aiRecommendations: [
    {
      id: 'rec-1',
      title: 'North Region Inventory Bottleneck',
      category: 'Inventory',
      priority: 'High',
      impact: 'Avoid ₹4.5L Revenue Loss',
      description: 'Kay Beauty Matte Lipstick (Shade 04) stock depleted to 140 units in Bhiwandi Hub. Demand surging by +34% due to weekend sale campaign.',
      actionText: 'Trigger Auto-Reorder (1,500 Units)',
      targetModule: 'Inventory'
    },
    {
      id: 'rec-2',
      title: 'Instagram Campaign Budget Optimization',
      category: 'Marketing',
      priority: 'Medium',
      impact: '+₹18.2L Projected Profit',
      description: 'Instagram Ad CAC increased by +12% to ₹420. Reallocate ₹15L ad spend to Email Retargeting (ROI 4.8x, CAC ₹190).',
      actionText: 'Reallocate Campaign Budget',
      targetModule: 'Marketing'
    },
    {
      id: 'rec-3',
      title: 'Luxe Skincare Price Adjustment Opportunity',
      category: 'Sales',
      priority: 'Low',
      impact: '+₹62.0L Gross Margin Boost',
      description: 'High customer retention (68%) in Charlotte Tilbury Skincare range allows 3.5% price adjustment without elasticity penalty.',
      actionText: 'Open What-If Simulator',
      targetModule: 'Sales'
    }
  ],

  executiveAlerts: [
    { id: 'alt-1', type: 'danger', message: '4 SKUs currently Out-of-Stock in Gurgaon Distribution Hub', time: '10 mins ago' },
    { id: 'alt-2', type: 'warning', message: 'Instagram Ad Campaign CAC breached target threshold by +8%', time: '1 hour ago' },
    { id: 'alt-3', type: 'success', message: 'Nykaa Beauty Festival Campaign achieved 4.2x ROI milestone', time: '3 hours ago' },
    { id: 'alt-4', type: 'info', message: 'Q3 Regional Sales target reached 94% completion', time: '5 hours ago' }
  ]
};

export const initialSalesData = {
  monthlyTrend: [
    { month: 'Jan', revenue2025: 32.4, revenue2026: 38.2, target: 36.0, profit: 21.0, orders: 380 },
    { month: 'Feb', revenue2025: 31.0, revenue2026: 36.8, target: 35.5, profit: 20.2, orders: 365 },
    { month: 'Mar', revenue2025: 34.8, revenue2026: 41.5, target: 39.0, profit: 22.8, orders: 410 },
    { month: 'Apr', revenue2025: 33.2, revenue2026: 39.4, target: 38.0, profit: 21.6, orders: 390 },
    { month: 'May', revenue2025: 36.5, revenue2026: 44.1, target: 41.0, profit: 24.3, orders: 435 },
    { month: 'Jun', revenue2025: 38.0, revenue2026: 46.8, target: 43.5, profit: 25.7, orders: 460 },
    { month: 'Jul', revenue2025: 37.2, revenue2026: 45.2, target: 42.5, profit: 24.9, orders: 445 },
    { month: 'Aug', revenue2025: 41.5, revenue2026: 51.0, target: 47.0, profit: 28.1, orders: 505 },
    { month: 'Sep', revenue2025: 40.0, revenue2026: 49.5, target: 46.0, profit: 27.2, orders: 490 },
    { month: 'Oct', revenue2025: 45.8, revenue2026: 56.4, target: 52.0, profit: 31.0, orders: 560 },
    { month: 'Nov', revenue2025: 49.2, revenue2026: 60.8, target: 55.0, profit: 33.4, orders: 600 },
    { month: 'Dec', revenue2025: 46.0, revenue2026: 56.0, target: 52.0, profit: 30.8, orders: 550 }
  ],

  regionalSales: [
    { region: 'North', revenue: 142.5, profit: 78.4, orders: 1.41, growth: 22.1, topCategory: 'Makeup' },
    { region: 'South', revenue: 128.2, profit: 70.5, orders: 1.27, growth: 18.5, topCategory: 'Skincare' },
    { region: 'West', revenue: 115.4, profit: 63.5, orders: 1.14, growth: 16.8, topCategory: 'Haircare' },
    { region: 'East', revenue: 68.5, profit: 37.6, orders: 0.68, growth: 14.2, topCategory: 'Makeup' },
    { region: 'Central', revenue: 31.0, profit: 17.1, orders: 0.32, growth: 12.0, topCategory: 'Fragrance' }
  ],

  topProducts: [
    { sku: 'NYK-KAY-101', name: 'Kay Beauty Matte Drama Lipstick', brand: 'Kay Beauty', category: 'Makeup', unitsSold: '142,500', revenue: '14.25', marginPct: 62.0, growthPct: 24.5 },
    { sku: 'NYK-DOT-202', name: 'Dot & Key Vitamin C Serum', brand: 'Dot & Key', category: 'Skincare', unitsSold: '118,000', revenue: '10.62', marginPct: 58.5, growthPct: 31.2 },
    { sku: 'NYK-CHA-303', name: 'Charlotte Tilbury Magic Cream', brand: 'Charlotte Tilbury', category: 'Skincare', unitsSold: '34,200', revenue: '22.23', marginPct: 68.0, growthPct: 19.4 },
    { sku: 'NYK-COS-404', name: 'Nykaa Cosmetics Liquid Eyeliner', brand: 'Nykaa Cosmetics', category: 'Makeup', unitsSold: '210,000', revenue: '8.40', marginPct: 54.0, growthPct: 15.0 },
    { sku: 'NYK-EST-505', name: 'Estée Lauder Advanced Night Repair', brand: 'Estée Lauder', category: 'Skincare', unitsSold: '22,500', revenue: '18.00', marginPct: 65.0, growthPct: 12.8 },
    { sku: 'NYK-LOH-606', name: 'L’Oréal Paris Hyaluronic Shampoo', brand: 'L’Oréal Paris', category: 'Haircare', unitsSold: '165,000', revenue: '7.42', marginPct: 48.0, growthPct: 28.0 },
    { sku: 'NYK-FOR-707', name: 'Forest Essentials Kumkumadi Oil', brand: 'Forest Essentials', category: 'Skincare', unitsSold: '28,900', revenue: '11.56', marginPct: 64.0, growthPct: 21.0 }
  ]
};

export const initialCustomerData = {
  totalCustomers: 3.15, // M
  repeatRate: 48.5, // %
  clv: 4850, // ₹
  cac: 385, // ₹
  churnRate: 14.2, // %

  segments: [
    { segment: 'Luxe Beauty Enthusiasts', count: '693,000', percentage: 22, avgCLV: '₹12,400', description: 'High basket size, buys premium luxury skincare & cosmetics' },
    { segment: 'Daily Skincare Shoppers', count: '1,417,500', percentage: 45, avgCLV: '₹4,200', description: 'Regular repeat monthly purchases for routine skincare' },
    { segment: 'Trend & Gen-Z Experimenters', count: '724,500', percentage: 23, avgCLV: '₹2,800', description: 'Influenced by Instagram/Reels, tries new product launches' },
    { segment: 'Bargain & Festival Buyers', count: '315,000', percentage: 10, avgCLV: '₹1,950', description: 'Active primarily during Pink Friday & Grand Festive Sales' }
  ],

  cities: [
    { city: 'Mumbai', customers: '580,000', revenue: '₹89.2 Cr', repeatRate: '52.4%' },
    { city: 'Delhi NCR', customers: '620,000', revenue: '₹94.5 Cr', repeatRate: '51.0%' },
    { city: 'Bengaluru', customers: '490,000', revenue: '₹76.8 Cr', repeatRate: '49.8%' },
    { city: 'Hyderabad', customers: '310,000', revenue: '₹48.2 Cr', repeatRate: '46.5%' },
    { city: 'Kolkata', customers: '280,000', revenue: '₹42.0 Cr', repeatRate: '45.2%' },
    { city: 'Chennai', customers: '240,000', revenue: '₹37.5 Cr', repeatRate: '44.0%' },
    { city: 'Pune', customers: '210,000', revenue: '₹32.4 Cr', repeatRate: '47.1%' }
  ],

  cohortData: [
    { cohort: 'Q1 2025', m1: 100, m3: 68, m6: 54, m12: 46 },
    { cohort: 'Q2 2025', m1: 100, m3: 65, m6: 52, m12: 44 },
    { cohort: 'Q3 2025', m1: 100, m3: 71, m6: 58, m12: 49 },
    { cohort: 'Q4 2025', m1: 100, m3: 74, m6: 61, m12: 52 },
    { cohort: 'Q1 2026', m1: 100, m3: 72, m6: 59, m12: 50 }
  ]
};

export const initialProductData = {
  brands: [
    { brand: 'Kay Beauty', revenue: 68.4, marginPct: 62.0, productsCount: 145, marketShare: 14.1 },
    { brand: 'Nykaa Cosmetics', revenue: 94.2, marginPct: 54.0, productsCount: 320, marketShare: 19.4 },
    { brand: 'Charlotte Tilbury', revenue: 52.8, marginPct: 68.0, productsCount: 65, marketShare: 10.9 },
    { brand: 'Dot & Key', revenue: 45.6, marginPct: 58.5, productsCount: 82, marketShare: 9.4 },
    { brand: 'Estée Lauder', revenue: 38.0, marginPct: 65.0, productsCount: 54, marketShare: 7.8 },
    { brand: 'Forest Essentials', revenue: 32.5, marginPct: 64.0, productsCount: 78, marketShare: 6.7 },
    { brand: 'Maybelline New York', revenue: 58.0, marginPct: 45.0, productsCount: 210, marketShare: 11.9 }
  ],

  categories: [
    { category: 'Makeup', revenue: 203.9, pctShare: 42, marginPct: 58.0, growth: 18.2 },
    { category: 'Skincare', revenue: 170.0, pctShare: 35, marginPct: 61.5, growth: 22.4 },
    { category: 'Haircare', revenue: 58.3, pctShare: 12, marginPct: 48.0, growth: 15.6 },
    { category: 'Fragrances', revenue: 34.0, pctShare: 7, marginPct: 55.0, growth: 12.0 },
    { category: 'Appliances', revenue: 19.4, pctShare: 4, marginPct: 38.0, growth: 9.5 }
  ],

  skus: [
    { sku: 'NYK-KAY-101', name: 'Kay Beauty Matte Drama Lipstick', brand: 'Kay Beauty', category: 'Makeup', price: 999, margin: 62, status: 'Star', stock: 140 },
    { sku: 'NYK-DOT-202', name: 'Dot & Key Vitamin C Serum', brand: 'Dot & Key', category: 'Skincare', price: 899, margin: 58.5, status: 'Star', stock: 840 },
    { sku: 'NYK-CHA-303', name: 'Charlotte Tilbury Magic Cream', brand: 'Charlotte Tilbury', category: 'Skincare', price: 6500, margin: 68, status: 'Cash Cow', stock: 320 },
    { sku: 'NYK-COS-404', name: 'Nykaa Liquid Eyeliner Black', brand: 'Nykaa Cosmetics', category: 'Makeup', price: 399, margin: 54, status: 'Cash Cow', stock: 2400 },
    { sku: 'NYK-EST-505', name: 'Estée Lauder Repair Serum', brand: 'Estée Lauder', category: 'Skincare', price: 8000, margin: 65, status: 'Star', stock: 190 },
    { sku: 'NYK-LOH-606', name: 'L’Oréal Hyaluronic Shampoo 250ml', brand: 'L’Oréal Paris', category: 'Haircare', price: 450, margin: 48, status: 'Cash Cow', stock: 1800 },
    { sku: 'NYK-FOR-707', name: 'Forest Essentials Kumkumadi Oil', brand: 'Forest Essentials', category: 'Skincare', price: 4000, margin: 64, status: 'Star', stock: 410 },
    { sku: 'NYK-MAY-808', name: 'Maybelline Fit Me Foundation', brand: 'Maybelline', category: 'Makeup', price: 549, margin: 45, status: 'Cash Cow', stock: 3200 },
    { sku: 'NYK-DY-909', name: 'Dyson Airwrap Multi-Styler', brand: 'Dyson', category: 'Appliances', price: 45900, margin: 35, status: 'Question Mark', stock: 25 },
    { sku: 'NYK-HUD-100', name: 'Huda Beauty Empowered Palette', brand: 'Huda Beauty', category: 'Makeup', price: 5800, margin: 60, status: 'Question Mark', stock: 110 }
  ]
};

export const initialMarketingData = {
  roi: 3.85,
  cac: 385,
  conversionRate: 3.42,
  totalSpend: 42.5, // ₹ Cr

  channels: [
    { channel: 'Instagram & Meta Ads', spend: 18.5, revenue: 64.75, roi: 3.50, cac: 420, conversions: '154,000' },
    { channel: 'Google Search & Shopping', spend: 12.0, revenue: 51.60, roi: 4.30, cac: 340, conversions: '151,800' },
    { channel: 'Influencer Marketing', spend: 6.5, revenue: 23.40, roi: 3.60, cac: 390, conversions: '60,000' },
    { channel: 'Email & WhatsApp Push', spend: 2.5, revenue: 13.00, roi: 5.20, cac: 180, conversions: '72,200' },
    { channel: 'Affiliate Network', spend: 3.0, revenue: 11.10, roi: 3.70, cac: 360, conversions: '30,800' }
  ],

  campaigns: [
    { id: 'CMP-2026-01', name: 'Nykaa Pink Friday Festival', channel: 'Omnichannel', spend: '₹14.5 Cr', revenue: '₹60.9 Cr', roi: '4.2x', cac: '₹320', status: 'Active' },
    { id: 'CMP-2026-02', name: 'Monsoon Skincare Hydration', channel: 'Instagram & Meta', spend: '₹4.2 Cr', revenue: '₹14.7 Cr', roi: '3.5x', cac: '₹410', status: 'Active' },
    { id: 'CMP-2026-03', name: 'Kay Beauty New Shade Launch', channel: 'Influencer', spend: '₹2.8 Cr', revenue: '₹10.6 Cr', roi: '3.8x', cac: '₹375', status: 'Completed' },
    { id: 'CMP-2026-04', name: 'Luxe Beauty Masterclass Event', channel: 'Email & Push', spend: '₹1.1 Cr', revenue: '₹5.5 Cr', roi: '5.0x', cac: '₹195', status: 'Active' },
    { id: 'CMP-2026-05', name: 'Haircare Wellness Week', channel: 'Google Search', spend: '₹3.4 Cr', revenue: '₹13.6 Cr', roi: '4.0x', cac: '₹350', status: 'Paused' }
  ]
};

export const initialInventoryData = {
  healthScore: 92.4,
  stockValuation: 142.8, // ₹ Cr
  lowStockCount: 18,
  outOfStockCount: 4,
  turnoverRatio: 4.2, // x/year

  warehouses: [
    { name: 'Bhiwandi Main Hub', location: 'Maharashtra (West)', totalCapacity: '500,000 Units', utilizedPct: 88, lowStockSkus: 6, health: 'Optimal' },
    { name: 'Gurgaon Express Hub', location: 'Haryana (North)', totalCapacity: '450,000 Units', utilizedPct: 94, lowStockSkus: 8, health: 'Warning' },
    { name: 'Chakan Logistics Hub', location: 'Pune (West)', totalCapacity: '350,000 Units', utilizedPct: 76, lowStockSkus: 2, health: 'Optimal' },
    { name: 'Whitefield Fulfillment', location: 'Bengaluru (South)', totalCapacity: '400,000 Units', utilizedPct: 82, lowStockSkus: 2, health: 'Optimal' }
  ],

  alerts: [
    { id: 'INV-101', sku: 'NYK-KAY-101', name: 'Kay Beauty Matte Drama Lipstick', brand: 'Kay Beauty', currentStock: 140, reorderLevel: 500, optimalOrder: 1500, status: 'Low Stock', warehouse: 'Bhiwandi Main Hub' },
    { id: 'INV-102', sku: 'NYK-EST-505', name: 'Estée Lauder Repair Serum 50ml', brand: 'Estée Lauder', currentStock: 0, reorderLevel: 100, optimalOrder: 300, status: 'Out of Stock', warehouse: 'Gurgaon Express Hub' },
    { id: 'INV-103', sku: 'NYK-DY-909', name: 'Dyson Airwrap Multi-Styler', brand: 'Dyson', currentStock: 25, reorderLevel: 50, optimalOrder: 100, status: 'Low Stock', warehouse: 'Gurgaon Express Hub' },
    { id: 'INV-104', sku: 'NYK-HUD-100', name: 'Huda Beauty Empowered Palette', brand: 'Huda Beauty', currentStock: 0, reorderLevel: 80, optimalOrder: 250, status: 'Out of Stock', warehouse: 'Whitefield Fulfillment' },
    { id: 'INV-105', sku: 'NYK-CHA-303', name: 'Charlotte Tilbury Magic Cream', brand: 'Charlotte Tilbury', currentStock: 320, reorderLevel: 400, optimalOrder: 800, status: 'Low Stock', warehouse: 'Bhiwandi Main Hub' }
  ]
};

export const dwhArchitectureData = {
  starSchema: {
    factTables: [
      {
        name: 'Fact_Sales',
        type: 'Fact Table',
        granularity: 'One row per order item transaction',
        primaryKey: 'Sales_ID',
        foreignKeys: ['Customer_ID', 'Product_ID', 'Region_ID', 'Time_ID', 'Promotion_ID'],
        measures: ['Quantity_Sold', 'Sales_Amount', 'Discount_Amount', 'Cost_Amount', 'Net_Profit', 'Tax_Amount']
      },
      {
        name: 'Fact_Inventory_Daily',
        type: 'Snapshot Fact Table',
        granularity: 'Daily snapshot per SKU per Warehouse',
        primaryKey: 'Snapshot_ID',
        foreignKeys: ['Product_ID', 'Warehouse_ID', 'Time_ID'],
        measures: ['Stock_On_Hand', 'Stock_In_Transit', 'Reserved_Units', 'Stock_Value_INR', 'Days_Of_Supply']
      },
      {
        name: 'Fact_Marketing_Campaign',
        type: 'Fact Table',
        granularity: 'Daily summary per marketing channel campaign',
        primaryKey: 'Campaign_Fact_ID',
        foreignKeys: ['Channel_ID', 'Product_Category_ID', 'Time_ID'],
        measures: ['Ad_Spend_INR', 'Impressions', 'Clicks', 'Conversions', 'Attributed_Revenue', 'CAC_INR']
      }
    ],
    dimensionTables: [
      {
        name: 'Dim_Customer',
        type: 'Dimension Table (SCD Type 2)',
        primaryKey: 'Customer_ID',
        attributes: ['Customer_GUID', 'First_Name', 'Last_Name', 'Email', 'City', 'State', 'Segment', 'Registration_Date', 'Loyalty_Tier']
      },
      {
        name: 'Dim_Product',
        type: 'Dimension Table (SCD Type 1)',
        primaryKey: 'Product_ID',
        attributes: ['SKU_Code', 'Product_Name', 'Brand_Name', 'Category', 'Sub_Category', 'Unit_Price', 'Unit_Cost', 'Reorder_Level']
      },
      {
        name: 'Dim_Store_Region',
        type: 'Dimension Table',
        primaryKey: 'Region_ID',
        attributes: ['Zone_Name', 'State', 'Tier_Classification', 'Warehouse_Assigned', 'Regional_Manager']
      },
      {
        name: 'Dim_Time',
        type: 'Role-Playing Dimension',
        primaryKey: 'Time_ID',
        attributes: ['Full_Date', 'Day_Of_Week', 'Month_Name', 'Quarter', 'Fiscal_Year', 'Is_Festive_Sale_Day']
      }
    ]
  },

  etlFlow: [
    { step: 1, title: 'Extract (POS / App API / ERP)', desc: 'Real-time CDC & Kafka streams from Nykaa E-commerce engine, retail POS & ERP systems.' },
    { step: 2, title: 'Staging Area (GCS / S3 Storage)', desc: 'Raw Parquet files landing zone with automated schema validation & encryption.' },
    { step: 3, title: 'Transform & Cleanse (dbt / Spark)', desc: 'De-duplication, SCD Type 2 tracking, surrogate key assignment, currency normalization.' },
    { step: 4, title: 'Data Warehouse (BigQuery / Snowflake)', desc: 'Optimized Star Schema modeling with partitioned fact tables & clustered dimension keys.' },
    { step: 5, title: 'Semantic & BI Layer (Power BI / DSS)', desc: 'DAX measures, fast OLAP aggregation, real-time REST APIs feeding Executive Dashboard.' }
  ]
};

export const kpiCatalogueData = [
  { kpi: 'Total Revenue', formula: 'SUM(Sales Amount)', category: 'Sales', decision: 'Measure overall business performance & top-line revenue health.', target: '₹500 Cr / Year' },
  { kpi: 'Gross Profit', formula: 'SUM(Sales Amount - Cost)', category: 'Sales', decision: 'Evaluate core operational profitability before overheads.', target: '₹275 Cr / Year' },
  { kpi: 'Gross Profit Margin', formula: '(Gross Profit / Revenue) × 100', category: 'Sales', decision: 'Assess margin efficiency & pricing power across product lines.', target: '≥ 55.0%' },
  { kpi: 'Total Orders', formula: 'COUNT(Order ID)', category: 'Sales', decision: 'Monitor sales transaction volume & order throughput.', target: '5.0 Million' },
  { kpi: 'Average Order Value (AOV)', formula: 'Revenue / Orders', category: 'Sales', decision: 'Analyse basket size and cross-selling effectiveness.', target: '≥ ₹1,000' },
  { kpi: 'Total Active Customers', formula: 'COUNT(DISTINCT CustomerID)', category: 'Customer', decision: 'Evaluate customer base reach & market penetration.', target: '3.5 Million' },
  { kpi: 'Repeat Purchase Rate', formula: '(Repeat Customers / Total Customers) × 100', category: 'Customer', decision: 'Measure customer loyalty & brand retention strength.', target: '≥ 45.0%' },
  { kpi: 'Customer Lifetime Value (CLV)', formula: 'Avg Order Value × Purchase Freq × Customer Lifespan', category: 'Customer', decision: 'Quantify long-term monetary value of customer cohorts.', target: '≥ ₹4,500' },
  { kpi: 'Inventory Health Index', formula: '(Healthy Inventory / Total Inventory) × 100', category: 'Inventory', decision: 'Evaluate stock freshness and minimize deadstock risk.', target: '≥ 90.0%' },
  { kpi: 'Low Stock Alert Count', formula: 'COUNT(Products WHERE Stock <= Reorder Level)', category: 'Inventory', decision: 'Trigger timely supplier replenishment to prevent stockouts.', target: '≤ 15 SKUs' },
  { kpi: 'Out of Stock Count', formula: 'COUNT(Products WHERE Stock = 0)', category: 'Inventory', decision: 'Monitor lost revenue opportunities from stock availability gaps.', target: '0 SKUs' },
  { kpi: 'Inventory Turnover', formula: 'COGS / Average Inventory Value', category: 'Inventory', decision: 'Measure inventory velocity and working capital efficiency.', target: '≥ 4.0x / Year' },
  { kpi: 'Campaign ROI', formula: '((Attributed Revenue - Campaign Cost) / Cost) × 100', category: 'Marketing', decision: 'Assess advertising channel productivity & profitability.', target: '≥ 3.5x' },
  { kpi: 'Customer Acquisition Cost (CAC)', formula: 'Total Marketing Spend / New Customers Acquired', category: 'Marketing', decision: 'Evaluate acquisition spend efficiency vs Customer Lifetime Value.', target: '≤ ₹400' }
];
