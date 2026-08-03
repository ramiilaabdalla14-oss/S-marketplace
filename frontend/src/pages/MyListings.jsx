import React, { useEffect, useState } from 'react';
import API from '../api/axios';

const MyListings = () => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    API.get('/listings/my-listings')
      .then((res) => setMyItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Alaabtayda (My Listings)</h2>
      <div className="items-list">
        {myItems.length === 0 ? (
          <p>Wali ma soo dhigin wax alaab ah.</p>
        ) : (
          myItems.map((item) => (
            <div key={item._id} className="my-item-row">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button className="delete-btn">Tirtir</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyListings;