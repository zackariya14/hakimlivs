import React, { useState } from 'react';
import { Home, Man, Menu, Phone, ProductionQuantityLimitsOutlined } from '@mui/icons-material';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="openbtn" onClick={toggleMenu}>
        <Menu/>
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="./"><Home/>Hem</a></li>
          <li><a href="/addProduct"><ProductionQuantityLimitsOutlined/>Produkter</a></li>
          <li><a href="#"><Man/>Kunder</a></li>
          <li><a href="#"><Phone/>Kundtjänst</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
