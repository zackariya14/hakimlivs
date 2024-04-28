import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Pagination from './Pagination';

function ProductList({ categories, selectedCategory, setSelectedCategory }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); 

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.includes(selectedCategory._id))
    : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div >
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length} 
        paginate={paginate}
      />
      <div className={`product-container`}>
        
        {currentProducts.map(product => (
          <div className="product-container" key={product._id}>
            <div className="product-card">
              <div className="image-container">
                <img src={product.Image} alt={product.name} onClick={() => openModal(product)} style={{ cursor: 'pointer' }} />
              </div>
              <div className="image-details">
                <h4>{product.price} kr</h4>
                <p>{product.name}</p>
                <button onClick={() => handleBuy(product)} style={{ cursor: 'pointer' }}> <AddShoppingCartIcon /> </button>
              </div>
            </div>
            {selectedProduct === product && (
              <div className="modal" style={{ display: 'block' }}>
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p>Pris: {product.price} kr</p>
                  <img src={product.Image} alt={product.name} style={{ maxHeight: '200px', maxWidth: '200px' }} />
                  <button onClick={() => handleBuy(product)} style={{ cursor: 'pointer' }}><AddShoppingCartIcon /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ProductList;
