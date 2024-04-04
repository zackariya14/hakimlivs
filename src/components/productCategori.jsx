// ProductCategories.js
import React, { useState } from 'react';

const ProductCategories = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const showCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="categories">
        <button onClick={() => showCategory('mejeri')}>Mejeri</button>
        <button onClick={() => showCategory('bröd')}>Bröd</button>
        <button onClick={() => showCategory('frukt')}>Frukt & Grönt</button>
        <button onClick={() => showCategory('dryck')}>Dryck</button>
      </div>

      <div id="products-container">
        {selectedCategory && (
          <div>
            {Object.entries(products[selectedCategory]).map(([productName, price]) => (
              <div key={productName}>
                <strong>{productName}</strong>: ${price}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategories;
