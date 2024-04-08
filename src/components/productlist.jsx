// ProductList.js
import React, { useState, useEffect } from 'react';
// import ProductCategories from './ProductCategories';
import './products.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className='product-container'> 
      {/* Use products state variable instead of data */}
      {products.map((product) => (
        <div className='product-card' key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
      {/* <ProductCategories products={products} /> */}
    </div>
  );
};

export default ProductList;
