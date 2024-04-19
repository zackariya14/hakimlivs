// // Sidebar.jsx
// import React, { useState } from 'react';
import './Sidebar.css';




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategories from './ProductCategories'; // Importera ProductCategories

const Sidebar = ({
  categories = [], 
  selectedCategory,
  setSelectedCategory
 }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/products">Produkter</Link></li>
          <li><Link to="/campaigns">Kampanjer</Link></li>
          <li><Link to="/customer-service">Kundtjänst</Link></li>
        </ul>
        {/* Lägg till ProductCategories-komponenten här */}
        <ProductCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
  );
};

export default Sidebar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProductCategories from './ProductCategories';

// const Sidebar = ({ products }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button className="openbtn" onClick={toggleMenu}>
//         ☰ Meny
//       </button>
//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li><Link to="/">Hem</Link></li>
//           <li><Link to="/products">Produkter</Link></li>
//           <li><Link to="/campaigns">Kampanjer</Link></li>
//           <li><Link to="/customer-service">Kundtjänst</Link></li>
//         </ul>
//         <ProductCategories products={products} />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
