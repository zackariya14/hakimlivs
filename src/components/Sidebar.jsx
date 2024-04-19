
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="openbtn" onClick={toggleMenu}>
        ☰ Meny
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Hem</a></li>
          <li><a href="#">Produkter</a></li>
          <li><a href="#">Kampanjer</a></li>
          <li><a href="#">Kundtjänst</a></li>
          <li><a href="/login">Admin</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
