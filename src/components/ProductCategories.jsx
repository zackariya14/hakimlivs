import React from 'react';

const ProductCategories = ({ categories = [], selectedCategory, setSelectedCategory }) => {
  const showCategory = (category) => {
    setSelectedCategory(category);
  };

  console.log("Categories PC", categories)

  return (
    <div>
      <div className="categories">
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
