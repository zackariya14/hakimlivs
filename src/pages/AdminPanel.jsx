import React, { useState } from 'react';
import AdminSidebar from '../components/adminSidebar';
// import AddProduct from './AddProduct';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const renderProductCards = () => {
    return products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    ));
  };

  return (
    <div className="admin-panel-container">
      <AdminSidebar/>
      <h1>Admin Panel!</h1>
      <button onClick={fetchProducts}>Get All Products</button>
      <div className="product-container">
        {renderProductCards()}
      </div>
      {/* <AddProduct fetchProducts={fetchProducts} /> */}
    </div>
  );
};

export default AdminPanel;
