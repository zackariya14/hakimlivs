
import React, { useState, useEffect } from 'react';
import "./products.css"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      let products = [
        { id: 1, name: 'Apple', price: 1.99 },
        { id: 2, name: 'Banana', price: 0.99 },
      ];
      setProducts(products)
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className='product-container'>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
