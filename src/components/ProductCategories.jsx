import React from 'react';
import './products.css';

const ProductCategories = ({ categories = [], selectedCategory, setSelectedCategory }) => {
  const showCategory = (category) => {
    setSelectedCategory(category);
  };

  console.log("Categories PC", categories)

  return (
    <div>
      <div className="categories">
        <h3>Kategorier</h3>
        {categories.map(category => (
          <button 
            type="button" 
            onClick={() => showCategory(category)} 
            key={category._id}
            className={selectedCategory === category ? 'selected' : ''}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
