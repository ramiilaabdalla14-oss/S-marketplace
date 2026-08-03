import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axios';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/listings')
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Waa la soo rarayaa...</div>;

  return (
    <div className="container">
      <h2>Dhammaan Alaabta Marketplace-ka</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item._id} className="item-card">
            <img src={item.imageUrl || 'https://via.placeholder.com/150'} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <Link to={`/items/${item._id}`} className="details-btn">Eeg Faahfaahinta</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;