import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';

function ProductList() {
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

  const openModal = (product) => {
    setSelectedProduct(product);
  };
  
  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleBuy = () => {
    console.log("Produkten köpt:", selectedProduct);
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
            <button onClick={handleBuy}>Köp {product.name}</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
