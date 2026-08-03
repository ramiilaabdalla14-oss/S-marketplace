import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllItems from './pages/AllItems';
import ItemDetails from './pages/ItemDetails';
import MyListings from './pages/MyListings';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<AllItems />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/my-listings" element={<MyListings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
