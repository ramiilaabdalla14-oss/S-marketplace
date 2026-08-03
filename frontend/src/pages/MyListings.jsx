import React from 'react';
import { PlusCircle, Edit, Trash2, CheckCircle } from 'lucide-react';

export default function MyListings() {
  const listings = [
    { id: 1, name: 'Study Table', price: '$45', status: 'Active', views: 42 },
    { id: 2, name: 'Java Book', price: '$30', status: 'Active', views: 18 },
    { id: 3, name: 'Lenovo Laptop', price: '$250', status: 'Sold', views: 79 },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>My Listings</h2>
        <button style={{ background: '#6C4CF1', color: 'white', border: 'none', padding: '0.7rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
          <PlusCircle size={18} /> Add New Listing
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        <thead>
          <tr style={{ background: '#f8fafc', textAlign: 'left', color: '#64748b', fontSize: '0.9rem' }}>
            <th style={{ padding: '1rem' }}>Item</th>
            <th style={{ padding: '1rem' }}>Price</th>
            <th style={{ padding: '1rem' }}>Status</th>
            <th style={{ padding: '1rem' }}>Views</th>
            <th style={{ padding: '1rem' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(item => (
            <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>{item.name}</td>
              <td style={{ padding: '1rem', color: '#6C4CF1', fontWeight: 'bold' }}>{item.price}</td>
              <td style={{ padding: '1rem' }}>
                <span style={{ background: item.status === 'Active' ? '#dcfce7' : '#f1f5f9', color: item.status === 'Active' ? '#15803d' : '#64748b', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {item.status}
                </span>
              </td>
              <td style={{ padding: '1rem', color: '#64748b' }}>{item.views}</td>
              <td style={{ padding: '1rem', display: 'flex', gap: '0.8rem' }}>
                <Edit size={18} color="#0284c7" style={{ cursor: 'pointer' }} />
                <Trash2 size={18} color="#ef4444" style={{ cursor: 'pointer' }} />
                <CheckCircle size={18} color="#10b981" style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}