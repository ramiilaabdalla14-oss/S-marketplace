import React, { useEffect, useState } from 'react';
import API from '../api/axios';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Waa la soo rarayaa...</div>;

  return (
    <div className="container">
      <h1>S-Marketplace Categories</h1>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat._id} className="category-card">
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;