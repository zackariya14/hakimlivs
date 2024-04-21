import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';

function ProductList({ categories, selectedCategory, setSelectedCategory }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  useEffect(() => {
    console.log('Selected Category:', selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    console.log('Products:', products);
  }, [products]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };
  
  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleBuy = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.includes(selectedCategory._id))
    : products;

  return (
    <div className='product-container'>
      <ul>
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
