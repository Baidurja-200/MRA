import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  PenTool, 
  UserPlus, 
  PackagePlus, 
  DollarSign, 
  Megaphone, 
  Boxes,
  CheckCircle2,
  Database
} from 'lucide-react';

export const DataEntryView = () => {
  const { 
    addCustomerRecord, 
    addProductRecord, 
    addSalesRecord, 
    addCampaignRecord, 
    updateInventoryStock,
    productData 
  } = useData();

  const [activeTab, setActiveTab] = useState('customer');

  // Customer Form State
  const [custForm, setCustForm] = useState({ name: '', email: '', city: 'Mumbai', segment: 'Luxe Beauty Enthusiasts' });
  // Product Form State
  const [prodForm, setProdForm] = useState({ name: '', sku: '', brand: 'Kay Beauty', category: 'Makeup', price: 999, margin: 60, stock: 500 });
  // Sales Form State
  const [salesForm, setSalesForm] = useState({ customerName: '', amount: 1500, category: 'Makeup', region: 'North' });
  // Marketing Form State
  const [campForm, setCampForm] = useState({ name: '', channel: 'Instagram & Meta Ads', spend: 2.5 });
  // Inventory Form State
  const [invForm, setInvForm] = useState({ sku: productData.skus[0]?.sku || '', stock: 500 });

  const handleCustSubmit = (e) => {
    e.preventDefault();
    if (!custForm.name || !custForm.email) return;
    addCustomerRecord(custForm);
    setCustForm({ name: '', email: '', city: 'Mumbai', segment: 'Luxe Beauty Enthusiasts' });
  };

  const handleProdSubmit = (e) => {
    e.preventDefault();
    if (!prodForm.name) return;
    addProductRecord(prodForm);
    setProdForm({ name: '', sku: '', brand: 'Kay Beauty', category: 'Makeup', price: 999, margin: 60, stock: 500 });
  };

  const handleSalesSubmit = (e) => {
    e.preventDefault();
    if (!salesForm.customerName) return;
    addSalesRecord(salesForm);
    setSalesForm({ customerName: '', amount: 1500, category: 'Makeup', region: 'North' });
  };

  const handleCampSubmit = (e) => {
    e.preventDefault();
    if (!campForm.name) return;
    addCampaignRecord(campForm);
    setCampForm({ name: '', channel: 'Instagram & Meta Ads', spend: 2.5 });
  };

  const handleInvSubmit = (e) => {
    e.preventDefault();
    updateInventoryStock(invForm.sku, invForm.stock);
  };

  return (
    <div className="module-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <PenTool className="title-icon" size={24} style={{ color: 'var(--nykaa-pink)' }} />
            Data Entry Centre & Operational Hub
          </h1>
          <p className="page-description">
            Maintain operational master data across Customers, Products, Sales, Marketing & Inventory
          </p>
        </div>
      </div>

      {/* Form Category Navigation Tabs */}
      <div className="data-entry-tabs">
        <button className={`de-tab-btn ${activeTab === 'customer' ? 'active' : ''}`} onClick={() => setActiveTab('customer')}>
          <UserPlus size={16} /> Customer Entry
        </button>
        <button className={`de-tab-btn ${activeTab === 'product' ? 'active' : ''}`} onClick={() => setActiveTab('product')}>
          <PackagePlus size={16} /> Product SKU Entry
        </button>
        <button className={`de-tab-btn ${activeTab === 'sales' ? 'active' : ''}`} onClick={() => setActiveTab('sales')}>
          <DollarSign size={16} /> Sales Record Entry
        </button>
        <button className={`de-tab-btn ${activeTab === 'marketing' ? 'active' : ''}`} onClick={() => setActiveTab('marketing')}>
          <Megaphone size={16} /> Marketing Campaign
        </button>
        <button className={`de-tab-btn ${activeTab === 'inventory' ? 'active' : ''}`} onClick={() => setActiveTab('inventory')}>
          <Boxes size={16} /> Inventory Update
        </button>
      </div>

      {/* Form Panel */}
      <div className="dss-card form-panel-card">
        {activeTab === 'customer' && (
          <form onSubmit={handleCustSubmit} className="de-form">
            <div className="form-title">
              <UserPlus size={20} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Register New Customer Profile</span>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="dss-input"
                  placeholder="e.g. Ananya Sharma" 
                  value={custForm.name} 
                  onChange={(e) => setCustForm({ ...custForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="dss-input"
                  placeholder="ananya@example.com" 
                  value={custForm.email} 
                  onChange={(e) => setCustForm({ ...custForm, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">City Location</label>
                <select 
                  className="dss-input"
                  value={custForm.city}
                  onChange={(e) => setCustForm({ ...custForm, city: e.target.value })}
                >
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Target Customer Segment</label>
                <select 
                  className="dss-input"
                  value={custForm.segment}
                  onChange={(e) => setCustForm({ ...custForm, segment: e.target.value })}
                >
                  <option value="Luxe Beauty Enthusiasts">Luxe Beauty Enthusiasts</option>
                  <option value="Daily Skincare Shoppers">Daily Skincare Shoppers</option>
                  <option value="Trend & Gen-Z Experimenters">Trend & Gen-Z Experimenters</option>
                  <option value="Bargain & Festival Buyers">Bargain & Festival Buyers</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '16px' }}>
              <CheckCircle2 size={16} /> Save Customer Record to Dim_Customer
            </button>
          </form>
        )}

        {activeTab === 'product' && (
          <form onSubmit={handleProdSubmit} className="de-form">
            <div className="form-title">
              <PackagePlus size={20} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Create New Product SKU Master Record</span>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Product Name</label>
                <input 
                  type="text" 
                  className="dss-input"
                  placeholder="e.g. Kay Beauty Hydrating Lip Glow" 
                  value={prodForm.name} 
                  onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">SKU Code (Optional)</label>
                <input 
                  type="text" 
                  className="dss-input"
                  placeholder="e.g. NYK-KAY-505" 
                  value={prodForm.sku} 
                  onChange={(e) => setProdForm({ ...prodForm, sku: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Brand</label>
                <select 
                  className="dss-input"
                  value={prodForm.brand}
                  onChange={(e) => setProdForm({ ...prodForm, brand: e.target.value })}
                >
                  <option value="Kay Beauty">Kay Beauty</option>
                  <option value="Nykaa Cosmetics">Nykaa Cosmetics</option>
                  <option value="Charlotte Tilbury">Charlotte Tilbury</option>
                  <option value="Dot & Key">Dot & Key</option>
                  <option value="Estée Lauder">Estée Lauder</option>
                  <option value="Forest Essentials">Forest Essentials</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Category</label>
                <select 
                  className="dss-input"
                  value={prodForm.category}
                  onChange={(e) => setProdForm({ ...prodForm, category: e.target.value })}
                >
                  <option value="Makeup">Makeup</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Haircare">Haircare</option>
                  <option value="Fragrance">Fragrance</option>
                  <option value="Appliances">Appliances</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Unit Retail Price (₹)</label>
                <input 
                  type="number" 
                  className="dss-input"
                  value={prodForm.price} 
                  onChange={(e) => setProdForm({ ...prodForm, price: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Margin %</label>
                <input 
                  type="number" 
                  className="dss-input"
                  value={prodForm.margin} 
                  onChange={(e) => setProdForm({ ...prodForm, margin: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '16px' }}>
              <CheckCircle2 size={16} /> Insert SKU to Dim_Product
            </button>
          </form>
        )}

        {activeTab === 'sales' && (
          <form onSubmit={handleSalesSubmit} className="de-form">
            <div className="form-title">
              <DollarSign size={20} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Log Manual Sales Order Transaction</span>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Customer Name</label>
                <input 
                  type="text" 
                  className="dss-input"
                  placeholder="e.g. Priya Mehta" 
                  value={salesForm.customerName} 
                  onChange={(e) => setSalesForm({ ...salesForm, customerName: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Order Amount (₹)</label>
                <input 
                  type="number" 
                  className="dss-input"
                  value={salesForm.amount} 
                  onChange={(e) => setSalesForm({ ...salesForm, amount: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Product Category</label>
                <select 
                  className="dss-input"
                  value={salesForm.category}
                  onChange={(e) => setSalesForm({ ...salesForm, category: e.target.value })}
                >
                  <option value="Makeup">Makeup</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Haircare">Haircare</option>
                  <option value="Fragrance">Fragrance</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Sales Region Zone</label>
                <select 
                  className="dss-input"
                  value={salesForm.region}
                  onChange={(e) => setSalesForm({ ...salesForm, region: e.target.value })}
                >
                  <option value="North">North Zone</option>
                  <option value="South">South Zone</option>
                  <option value="West">West Zone</option>
                  <option value="East">East Zone</option>
                  <option value="Central">Central Zone</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '16px' }}>
              <CheckCircle2 size={16} /> Post Transaction to Fact_Sales
            </button>
          </form>
        )}

        {activeTab === 'marketing' && (
          <form onSubmit={handleCampSubmit} className="de-form">
            <div className="form-title">
              <Megaphone size={20} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Launch Marketing Campaign Record</span>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Campaign Name</label>
                <input 
                  type="text" 
                  className="dss-input"
                  placeholder="e.g. Festive Glam Sale 2026" 
                  value={campForm.name} 
                  onChange={(e) => setCampForm({ ...campForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Ad Channel</label>
                <select 
                  className="dss-input"
                  value={campForm.channel}
                  onChange={(e) => setCampForm({ ...campForm, channel: e.target.value })}
                >
                  <option value="Instagram & Meta Ads">Instagram & Meta Ads</option>
                  <option value="Google Search & Shopping">Google Search & Shopping</option>
                  <option value="Influencer Marketing">Influencer Marketing</option>
                  <option value="Email & Push">Email & Push</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Planned Budget (₹ Cr)</label>
                <input 
                  type="number" 
                  step="0.1"
                  className="dss-input"
                  value={campForm.spend} 
                  onChange={(e) => setCampForm({ ...campForm, spend: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '16px' }}>
              <CheckCircle2 size={16} /> Save Campaign to Fact_Marketing
            </button>
          </form>
        )}

        {activeTab === 'inventory' && (
          <form onSubmit={handleInvSubmit} className="de-form">
            <div className="form-title">
              <Boxes size={20} style={{ color: 'var(--nykaa-pink)' }} />
              <span>Update Warehouse SKU Stock Level</span>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Select SKU</label>
                <select 
                  className="dss-input"
                  value={invForm.sku}
                  onChange={(e) => setInvForm({ ...invForm, sku: e.target.value })}
                >
                  {productData.skus.map(s => (
                    <option key={s.sku} value={s.sku}>{s.sku} - {s.name} ({s.stock} currently)</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">New Stock Quantity (Units)</label>
                <input 
                  type="number" 
                  className="dss-input"
                  value={invForm.stock} 
                  onChange={(e) => setInvForm({ ...invForm, stock: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '16px' }}>
              <CheckCircle2 size={16} /> Update Inventory Snapshot
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
