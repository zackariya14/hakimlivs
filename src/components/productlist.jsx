import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const productsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);
        setProducts(productsResponse.data);

        const categoriesResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProductsAndCategories();
  }, []);

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

  return (
    <div>
      <ul className='product-container'>
        {products.map(product => (
          <div className="product-container" key={product._id}>
            <div className="image-box">
              <div className="image-container">
                <img src={product.Image} alt={product.name} />
              </div>
              <div className="image-details">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <button onClick={() => openModal(product)}>Visa detaljer</button>
              </div>
            </div>
            <button onClick={() => handleBuy(product)}>Köp {product.name}</button>
            {selectedProduct === product && (
              <div className="modal" style={{ display: 'block' }}>
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p>Pris: {product.price} kr</p>
                  <img src={product.Image} alt={product.name} style={{maxHeight: '200px', maxWidth: '200px'}}/>
                </div>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
