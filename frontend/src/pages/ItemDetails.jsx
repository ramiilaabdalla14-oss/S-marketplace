import React from 'react';
import { MessageCircle, Heart, Star, MapPin } from 'lucide-react';

export default function ItemDetails() {
  const sellerPhone = "252610000000"; // Taleefanka seller-ka

  return (
    <div style={{ padding: '2rem 4rem', display: 'flex', gap: '3rem', background: '#fff', minHeight: '80vh' }}>
      {/* Left Images */}
      <div style={{ flex: 1 }}>
        <div style={{ height: '350px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', color: '#64748b' }}>
          Main Product Image
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ width: '80px', height: '80px', background: '#e2e8f0', borderRadius: '8px' }}></div>
          <div style={{ width: '80px', height: '80px', background: '#e2e8f0', borderRadius: '8px' }}></div>
          <div style={{ width: '80px', height: '80px', background: '#e2e8f0', borderRadius: '8px' }}></div>
        </div>
      </div>

      {/* Right Info */}
      <div style={{ flex: 1 }}>
        <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>Like New</span>
        <h1 style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#0f172a' }}>MacBook Air M1 (2020)</h1>
        <h2 style={{ color: '#6C4CF1', fontSize: '1.8rem', margin: '0.5rem 0' }}>$650</h2>

        <p style={{ color: '#64748b', marginTop: '1.5rem', lineHeight: '1.6' }}>
          MacBook Air M1 2020 in excellent condition. 8GB RAM, 256GB SSD. Battery health 95%. Comes with original charger.
        </p>

        {/* Seller Info Box */}
        <div style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '10px', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ margin: 0 }}>Fadumo Ali</h4>
            <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={14} color="#eab308" fill="#eab308" /> 4.9 (12 reviews) • <MapPin size={14}/> Mogadishu
            </span>
          </div>
          <span style={{ background: '#f1f5f9', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', color: '#475569' }}>Verified Seller</span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <a 
            href={`https://wa.me/${sellerPhone}?text=Asc%20waxaan%20rabay%20inaa%20iibsado%20MacBook%20Air%20M1`} 
            target="_blank" 
            rel="noreferrer"
            style={{ flex: 1, background: '#25D366', color: 'white', padding: '1rem', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
          <button style={{ border: '1px solid #cbd5e1', background: 'white', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
            <Heart size={20} color="#64748b" />
          </button>
        </div>
      </div>
    </div>
  );
}