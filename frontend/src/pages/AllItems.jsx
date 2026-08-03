import React from 'react';
import { Link } from 'react-router-dom';

export default function AllItems() {
  const items = [
    { id: 1, title: 'MacBook Air M1 (2020)', price: '$650', condition: 'Like New' },
    { id: 2, title: 'iPhone 12', price: '$380', condition: 'Used - Good' },
    { id: 3, title: 'Sony Headphones', price: '$25', condition: 'Good' },
    { id: 4, title: 'Study Desk', price: '$45', condition: 'Good' },
  ];

  return (
    <div style={{ display: 'flex', padding: '2rem', gap: '2rem', background: '#fafafa' }}>
      {/* Sidebar Filters */}
      <div style={{ width: '250px', background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
        <h3>Categories</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#475569', lineHeight: '2.2' }}>
          <li style={{ color: '#6C4CF1', fontWeight: 'bold' }}>All Categories</li>
          <li>Books</li>
          <li>Electronics</li>
          <li>Furniture</li>
          <li>Clothes</li>
        </ul>
        <hr style={{ margin: '1.5rem 0', borderColor: '#f1f5f9' }} />
        <h3>Price Range</h3>
        <input type="range" style={{ width: '100%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b' }}>
          <span>$0</span><span>$1000+</span>
        </div>
        <hr style={{ margin: '1.5rem 0', borderColor: '#f1f5f9' }} />
        <h3>Condition</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#475569' }}>
          <label><input type="checkbox" /> All</label>
          <label><input type="checkbox" /> New</label>
          <label><input type="checkbox" /> Like New</label>
          <label><input type="checkbox" /> Used - Good</label>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>All Items</h2>
          <select style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            <option>Sort by: Newest</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {items.map(item => (
            <Link to={`/item/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <div style={{ height: '180px', background: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span>{item.title}</span>
                </div>
                <div style={{ padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
                  <span style={{ color: '#6C4CF1', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
