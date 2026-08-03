import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axios';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    API.get(`/listings/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!item) return <p>Waa la soo rarayaa...</p>;

  return (
    <div className="item-detail-container">
      <img src={item.imageUrl || 'https://via.placeholder.com/300'} alt={item.title} />
      <div className="details-info">
        <h2>{item.title}</h2>
        <h3>Qiimaha: ${item.price}</h3>
        <p><strong>Faahfaahin:</strong> {item.description}</p>
        <p><strong>Category:</strong> {item.category}</p>
        <button className="contact-seller-btn">La xiriir Shiilaha/Ilaaliyaha</button>
      </div>
    </div>
  );
};

export default ItemDetails;