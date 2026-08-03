import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, PlusCircle, Bell, Heart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{ background: '#fff', padding: '0.8rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', sticky: 'top' }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ShoppingBag color="#6C4CF1" size={28} />
        <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#1e293b' }}>Student <span style={{ color: '#6C4CF1' }}>Marketplace</span></span>
      </Link>

      <div style={{ display: 'flex', background: '#f1f5f9', padding: '0.5rem 1rem', borderRadius: '20px', width: '35%', alignItems: 'center', gap: '8px' }}>
        <Search size={18} color="#94a3b8" />
        <input type="text" placeholder="Search for items, books, electronics..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }} />
      </div>

      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <Link to="/all-items" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>All Items</Link>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>Dashboard</Link>
        <Bell size={20} color="#64748b" style={{ cursor: 'pointer' }} />
        <Heart size={20} color="#64748b" style={{ cursor: 'pointer' }} />
        <Link to="/my-listings" style={{ background: '#6C4CF1', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
          <PlusCircle size={18} /> Sell an Item
        </Link>
      </div>
    </nav>
  );
}