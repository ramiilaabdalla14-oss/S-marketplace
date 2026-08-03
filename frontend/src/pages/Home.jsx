import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Laptop, Armchair, Shirt, Watch, Heart } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: 'Books', icon: <BookOpen color="#6C4CF1" /> },
    { name: 'Electronics', icon: <Laptop color="#6C4CF1" /> },
    { name: 'Furniture', icon: <Armchair color="#6C4CF1" /> },
    { name: 'Clothes', icon: <Shirt color="#6C4CF1" /> },
    { name: 'Accessories', icon: <Watch color="#6C4CF1" /> },
  ];

  const featured = [
    { id: 1, title: 'MacBook Air M1', price: '$650', condition: 'Like New', img: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Java Programming Book', price: '$30', condition: 'Good', img: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Study Chair', price: '$25', condition: 'Like New', img: 'https://via.placeholder.com/150' },
    { id: 4, title: 'iPhone 12', price: '$380', condition: 'Used - Good', img: 'https://via.placeholder.com/150' }
  ];

  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '3rem' }}>
      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #f3f0ff 0%, #e8e0ff 100%)', margin: '1.5rem 2rem', padding: '3rem', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ maxWidth: '50%' }}>
          <span style={{ color: '#6C4CF1', fontWeight: 'bold', fontSize: '0.9rem' }}>BUY • SELL • CONNECT</span>
          <h1 style={{ fontSize: '2.8rem', color: '#0f172a', margin: '0.5rem 0' }}>Buy, Sell & Discover <br/><span style={{ color: '#6C4CF1' }}>Amazing Things</span></h1>
          <p style={{ color: '#475569', marginBottom: '1.5rem' }}>The trusted marketplace for students. Find great deals on books, electronics, furniture and more!</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/all-items" style={{ background: '#6C4CF1', color: '#fff', padding: '0.8rem 1.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>Browse Items</Link>
            <Link to="/my-listings" style={{ background: '#fff', color: '#1e293b', border: '1px solid #cbd5e1', padding: '0.8rem 1.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>Sell an Item</Link>
          </div>
          {/* Stats */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem' }}>
            <div><h3 style={{ margin: 0, color: '#6C4CF1' }}>10K+</h3><span style={{ fontSize: '0.85rem', color: '#64748b' }}>Happy Students</span></div>
            <div><h3 style={{ margin: 0, color: '#6C4CF1' }}>5K+</h3><span style={{ fontSize: '0.85rem', color: '#64748b' }}>Items Sold</span></div>
            <div><h3 style={{ margin: 0, color: '#6C4CF1' }}>98%</h3><span style={{ fontSize: '0.85rem', color: '#64748b' }}>Positive Reviews</span></div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '0 2rem', marginTop: '2rem' }}>
        <h2>Popular Categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginTop: '1rem' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ background: '#fff', padding: '1.2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
              {cat.icon}
              <span style={{ fontWeight: 'bold', color: '#334155' }}>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Items */}
      <div style={{ padding: '0 2rem', marginTop: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Featured Items</h2>
          <Link to="/all-items" style={{ color: '#6C4CF1', textDecoration: 'none', fontWeight: 'bold' }}>View All <ArrowRight size={16}/></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '1rem' }}>
          {featured.map(item => (
            <div key={item.id} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <div style={{ height: '160px', background: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Heart size={20} color="#94a3b8" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
                <span>{item.title} Image</span>
              </div>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#6C4CF1', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.price}</span>
                  <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#64748b' }}>{item.condition}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}