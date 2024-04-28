import './Sidebar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategories from './ProductCategories';

const Sidebar = ({ categories = [], selectedCategory, setSelectedCategory }) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const toggleMenu = () => {
    setsidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <button className="openbtn" onClick={toggleMenu} style={{ fontFamily: "Luckiest Guy" }}>
        ☰ Meny
      </button>
      <div className={`sidebar ${sidebarOpen ? 'closed' : ''}`}>
        <ul>
          <h2>Meny</h2>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/products">Produkter</Link></li>
          <li><Link to="/campaigns">Kampanjer</Link></li>
          <li><Link to="/customer-service">Kundtjänst</Link></li>
          <p>________________________________________________</p>
        </ul>
        <ProductCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
  );
};

export default Sidebar;
