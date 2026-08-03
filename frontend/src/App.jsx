import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { 
  ShoppingBag, Search, PlusCircle, Bell, Heart, BookOpen, 
  Laptop, Armchair, Shirt, Watch, ArrowRight, MessageCircle, 
  Trash2, Filter, CheckCircle, Tag, Phone, User, Info, LayoutDashboard
} from 'lucide-react';

// ================= INITIAL DATA (MOCK STATE) =================
const INITIAL_PRODUCTS = [
  {
    id: '1',
    title: 'MacBook Air M1 (2020)',
    price: 650,
    category: 'Electronics',
    condition: 'Like New',
    description: 'MacBook Air M1 in excellent condition. 8GB RAM, 256GB SSD. Battery health 95%. Perfect for computer science students.',
    sellerName: 'Ahmed',
    sellerPhone: '252610000001',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800',
    createdAt: '2026-08-01'
  },
  {
    id: '2',
    title: 'Java Programming Textbook',
    price: 30,
    category: 'Books',
    condition: 'Good',
    description: 'Introduction to Java Programming and Data Structures, 12th Edition. Clean pages with minimal highlighting.',
    sellerName: 'Maryan',
    sellerPhone: '252610000002',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800',
    createdAt: '2026-08-02'
  },
  {
    id: '3',
    title: 'Ergonomic Study Chair',
    price: 45,
    category: 'Furniture',
    condition: 'Like New',
    description: 'Comfortable mesh office chair with lumbar support. Perfect for long study sessions.',
    sellerName: 'Abdalla',
    sellerPhone: '252610000003',
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800',
    createdAt: '2026-08-02'
  },
  {
    id: '4',
    title: 'iPhone 12 - 128GB',
    price: 380,
    category: 'Electronics',
    condition: 'Used',
    description: 'Unlocked iPhone 12 in Blue. Face ID works fine, battery percentage 87%. Includes fast charger.',
    sellerName: 'Nasteexa',
    sellerPhone: '252610000004',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
    createdAt: '2026-08-02'
  }
];

// ================= NAVBAR COMPONENT =================
function Navbar({ searchTerm, setSearchTerm, wishlistCount }) {
  return (
    <nav style={{ background: '#fff', padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100, width: '100%', boxSizing: 'border-box' }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ShoppingBag color="#6C4CF1" size={32} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>
          Student <span style={{ color: '#6C4CF1' }}>Marketplace</span>
        </span>
      </Link>

      <div style={{ display: 'flex', background: '#f1f5f9', padding: '0.6rem 1.2rem', borderRadius: '25px', width: '40%', alignItems: 'center', gap: '10px' }}>
        <Search size={20} color="#94a3b8" />
        <input 
          type="text" 
          placeholder="Search for books, laptops, furniture..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.95rem' }} 
        />
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/all-items" style={{ textDecoration: 'none', color: '#475569', fontWeight: '600' }}>Browse Items</Link>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: '#475569', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Heart size={22} color="#64748b" />
          {wishlistCount > 0 && (
            <span style={{ position: 'absolute', top: '-6px', right: '-8px', background: '#ef4444', color: '#fff', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '50%', fontWeight: 'bold' }}>
              {wishlistCount}
            </span>
          )}
        </div>

        <Link to="/add-item" style={{ background: '#6C4CF1', color: '#fff', padding: '0.6rem 1.2rem', borderRadius: '10px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          <PlusCircle size={20} /> Sell an Item
        </Link>
      </div>
    </nav>
  );
}

// ================= HOME PAGE =================
function Home({ products, toggleWishlist, wishlist }) {
  const categories = [
    { name: 'Books', icon: <BookOpen color="#6C4CF1" size={22} /> },
    { name: 'Electronics', icon: <Laptop color="#6C4CF1" size={22} /> },
    { name: 'Furniture', icon: <Armchair color="#6C4CF1" size={22} /> },
    { name: 'Clothes', icon: <Shirt color="#6C4CF1" size={22} /> },
    { name: 'Accessories', icon: <Watch color="#6C4CF1" size={22} /> },
  ];

  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '4rem', width: '100%' }}>
      {/* Hero Banner */}
      <div style={{ padding: '0 5%', marginTop: '2rem' }}>
        <div style={{ background: 'linear-gradient(135deg, #f3f0ff 0%, #e8e0ff 100%)', padding: '4rem 3.5rem', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ maxWidth: '65%' }}>
            <span style={{ color: '#6C4CF1', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1.5px' }}>SOMALI UNIVERSITY STUDENT PLATFORM</span>
            <h1 style={{ fontSize: '3.2rem', color: '#0f172a', margin: '0.8rem 0', lineHeight: '1.25', fontWeight: '800' }}>
              Buy, Sell & Discover <br />
              <span style={{ color: '#6C4CF1' }}>Student Essentials</span>
            </h1>
            <p style={{ color: '#475569', marginBottom: '2rem', fontSize: '1.15rem', lineHeight: '1.6' }}>
              The trusted campus marketplace. Find great deals on textbooks, laptops, hostel furniture, and everyday tools!
            </p>
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <Link to="/all-items" style={{ background: '#6C4CF1', color: '#fff', padding: '0.9rem 2rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem' }}>Browse Items</Link>
              <Link to="/add-item" style={{ background: '#fff', color: '#1e293b', border: '1px solid #cbd5e1', padding: '0.9rem 2rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem' }}>Post Free Ad</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '0 5%', marginTop: '3.5rem' }}>
        <h2 style={{ color: '#0f172a', fontSize: '1.6rem', marginBottom: '1.2rem' }}>Popular Categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
          {categories.map((cat, i) => (
            <Link to={`/all-items?category=${cat.name}`} key={i} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '14px', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'transform 0.2s' }}>
                {cat.icon}
                <span style={{ fontWeight: 'bold', color: '#334155', fontSize: '1.05rem' }}>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Items Grid */}
      <div style={{ padding: '0 5%', marginTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#0f172a', fontSize: '1.6rem' }}>Recent Listings</h2>
          <Link to="/all-items" style={{ color: '#6C4CF1', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1.05rem' }}>
            View All <ArrowRight size={18}/>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.8rem' }}>
          {products.map(item => {
            const isWished = wishlist.includes(item.id);
            return (
              <div key={item.id} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', position: 'relative' }}>
                <Heart 
                  size={22} 
                  fill={isWished ? "#ef4444" : "none"} 
                  color={isWished ? "#ef4444" : "#94a3b8"} 
                  onClick={() => toggleWishlist(item.id)}
                  style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2, cursor: 'pointer', background: 'rgba(255,255,255,0.9)', padding: '6px', borderRadius: '50%' }} 
                />
                <Link to={`/item/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ height: '220px', overflow: 'hidden', background: '#f1f5f9' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.2rem' }}>
                    <span style={{ fontSize: '0.8rem', background: '#f3f0ff', color: '#6C4CF1', padding: '0.3rem 0.6rem', borderRadius: '6px', fontWeight: 'bold' }}>{item.category}</span>
                    <h4 style={{ margin: '0.6rem 0 0.4rem 0', color: '#1e293b', fontSize: '1.1rem' }}>{item.title}</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem' }}>
                      <span style={{ color: '#6C4CF1', fontWeight: '800', fontSize: '1.3rem' }}>${item.price}</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', background: '#f1f5f9', padding: '3px 8px', borderRadius: '6px' }}>{item.condition}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ================= ALL ITEMS / BROWSE PAGE =================
function AllItems({ products, searchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '3rem 5%', background: '#fafafa', minHeight: '85vh', width: '100%', boxSizing: 'border-box' }}>
      <h2 style={{ fontSize: '1.8rem', color: '#0f172a' }}>Browse Marketplace</h2>
      
      {/* Category Filter */}
      <div style={{ display: 'flex', gap: '1rem', margin: '1.8rem 0 2.5rem 0' }}>
        {['All', 'Books', 'Electronics', 'Furniture', 'Clothes', 'Accessories'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '25px',
              border: '1px solid #cbd5e1',
              background: selectedCategory === cat ? '#6C4CF1' : '#fff',
              color: selectedCategory === cat ? '#fff' : '#475569',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p style={{ marginTop: '2rem', color: '#64748b', fontSize: '1.1rem' }}>Wax alaab ah oo laga helay ma jiraan...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.8rem' }}>
          {filteredProducts.map(item => (
            <Link to={`/item/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.2rem' }}>
                  <span style={{ fontSize: '0.8rem', background: '#f3f0ff', color: '#6C4CF1', padding: '0.3rem 0.6rem', borderRadius: '6px', fontWeight: 'bold' }}>{item.category}</span>
                  <h3 style={{ margin: '0.6rem 0', fontSize: '1.15rem' }}>{item.title}</h3>
                  <p style={{ color: '#6C4CF1', fontWeight: '800', fontSize: '1.3rem', margin: 0 }}>${item.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ================= ITEM DETAILS PAGE =================
function ItemDetails({ products }) {
  const { id } = useParams();
  const item = products.find(p => p.id === id);

  if (!item) {
    return <div style={{ padding: '4rem', textAlign: 'center', fontSize: '1.2rem' }}>Alaabtan ma jirto ama waa la tirtiray.</div>;
  }

  const whatsappMessage = encodeURIComponent(`Asc ${item.sellerName}, waxaan ka arkay mashruuca S-marketplace alaabtaada (${item.title}) oo qiimaheedu yahay $${item.price}. Waxaan rabay inaan iibsado.`);

  return (
    <div style={{ padding: '4rem 5%', background: '#fafafa', minHeight: '85vh', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1000px', margin: 'auto', background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          <img src={item.image} alt={item.title} style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px' }} />
        </div>

        <div>
          <span style={{ background: '#f3f0ff', color: '#6C4CF1', padding: '0.4rem 1rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>{item.category}</span>
          <h1 style={{ fontSize: '2.2rem', margin: '1rem 0 0.5rem 0', color: '#0f172a' }}>{item.title}</h1>
          <h2 style={{ color: '#6C4CF1', fontSize: '2.2rem', margin: '0 0 1.5rem 0', fontWeight: '800' }}>${item.price}</h2>

          <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '12px', marginBottom: '1.8rem', border: '1px solid #f1f5f9' }}>
            <p style={{ margin: '0 0 0.6rem 0', color: '#475569', fontSize: '0.95rem' }}><strong>Condition:</strong> {item.condition}</p>
            <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>Posted on:</strong> {item.createdAt}</p>
          </div>

          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Description</h4>
          <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '2rem', fontSize: '1rem' }}>{item.description}</p>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem' }}>
              <User size={24} color="#6C4CF1" />
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.05rem' }}>Seller: {item.sellerName}</p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>University Student</p>
              </div>
            </div>

            <a 
              href={`https://wa.me/${item.sellerPhone}?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', background: '#25D366', color: 'white', padding: '1rem 1.8rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}
            >
              <MessageCircle size={24} /> Chat with Seller on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= ADD ITEM PAGE (POST AD) =================
function AddItem({ onAddProduct }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: 'Books',
    condition: 'Like New',
    description: '',
    sellerName: '',
    sellerPhone: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.sellerPhone) {
      alert("Fadlan buuxi meelaha lagama maarmaanka ah!");
      return;
    }

    const newProduct = {
      ...formData,
      id: Date.now().toString(),
      price: parseFloat(formData.price),
      image: formData.image || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800',
      createdAt: new Date().toISOString().split('T')[0]
    };

    onAddProduct(newProduct);
    alert("Alaabtaada waa la soo dhigay!");
    navigate('/all-items');
  };

  return (
    <div style={{ padding: '4rem 5%', background: '#fafafa', minHeight: '85vh', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '700px', margin: 'auto', background: '#fff', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ margin: '0 0 1.8rem 0', color: '#0f172a', fontSize: '1.8rem' }}>Sell an Item</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Item Title *</label>
            <input 
              type="text" 
              placeholder="e.g. HP Laptop Core i5 10th Gen" 
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})}
              style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
              required 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Price ($) *</label>
              <input 
                type="number" 
                placeholder="25" 
                value={formData.price} 
                onChange={e => setFormData({...formData, price: e.target.value})}
                style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
                required 
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Category</label>
              <select 
                value={formData.category} 
                onChange={e => setFormData({...formData, category: e.target.value})}
                style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
              >
                <option value="Books">Books</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Clothes">Clothes</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Seller Name</label>
              <input 
                type="text" 
                placeholder="Magacaaga" 
                value={formData.sellerName} 
                onChange={e => setFormData({...formData, sellerName: e.target.value})}
                style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>WhatsApp Phone *</label>
              <input 
                type="text" 
                placeholder="25261XXXXXXX" 
                value={formData.sellerPhone} 
                onChange={e => setFormData({...formData, sellerPhone: e.target.value})}
                style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
                required 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Image URL</label>
            <input 
              type="text" 
              placeholder="https://images.unsplash.com/..." 
              value={formData.image} 
              onChange={e => setFormData({...formData, image: e.target.value})}
              style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Description</label>
            <textarea 
              rows="4" 
              placeholder="Warbixin gaaban oo ku saabsan alaabta..." 
              value={formData.description} 
              onChange={e => setFormData({...formData, description: e.target.value})}
              style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
            ></textarea>
          </div>

          <button type="submit" style={{ background: '#6C4CF1', color: '#fff', padding: '1rem', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', marginTop: '1rem' }}>
            Post Product
          </button>
        </form>
      </div>
    </div>
  );
}

// ================= DASHBOARD PAGE =================
function Dashboard({ products, onDeleteProduct }) {
  return (
    <div style={{ padding: '3rem 5%', background: '#fafafa', minHeight: '85vh', width: '100%', boxSizing: 'border-box' }}>
      <h2 style={{ fontSize: '1.8rem', color: '#0f172a' }}>My Listings & Dashboard</h2>
      <p style={{ color: '#64748b' }}>Halkan ka maamul alaabta aad soo gelisay platform-ka.</p>

      <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', marginTop: '2rem', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '1.2rem' }}>Product</th>
              <th style={{ padding: '1.2rem' }}>Category</th>
              <th style={{ padding: '1.2rem' }}>Price</th>
              <th style={{ padding: '1.2rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={item.image} alt="" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                  <span style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '1.05rem' }}>{item.title}</span>
                </td>
                <td style={{ padding: '1.2rem', color: '#64748b' }}>{item.category}</td>
                <td style={{ padding: '1.2rem', fontWeight: '800', color: '#6C4CF1', fontSize: '1.1rem' }}>${item.price}</td>
                <td style={{ padding: '1.2rem' }}>
                  <button 
                    onClick={() => onDeleteProduct(item.id)}
                    style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}
                  >
                    <Trash2 size={18} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ================= MAIN APP ROUTER =================
export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Ma xaqiijinaysaa in aad tirtirto alaabtan?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(wId => wId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} wishlistCount={wishlist.length} />
        <Routes>
          <Route path="/" element={<Home products={products} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
          <Route path="/all-items" element={<AllItems products={products} searchTerm={searchTerm} />} />
          <Route path="/item/:id" element={<ItemDetails products={products} />} />
          <Route path="/add-item" element={<AddItem onAddProduct={handleAddProduct} />} />
          <Route path="/dashboard" element={<Dashboard products={products} onDeleteProduct={handleDeleteProduct} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}