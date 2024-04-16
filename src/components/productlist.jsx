import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='product-container'>
      
        {products.map(product => (
          <li className='product-card' key={product._id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <img src={product.Image} alt={product.name} />
          </li>
        ))}

    </div>
  );
}

export default ProductList;
