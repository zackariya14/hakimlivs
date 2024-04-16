import React, { useState } from 'react';
import AdminSidebar from '../components/adminSidebar';

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

  // Function to handle adding a new product (You'll implement this later)
  const addProduct = () => {
    // Implement functionality to add a new product
    console.log('Adding new product');
  };

  // Function to handle updating a product (You'll implement this later)
  const updateProduct = (productId) => {
    // Implement functionality to update a product
    console.log('Updating product:', productId);
  };

  // Function to handle deleting a product (You'll implement this later)
  const deleteProduct = (productId) => {
    // Implement functionality to delete a product
    console.log('Deleting product:', productId);
  };

  // Render product cards
  const renderProductCards = () => {
    return products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        {/* Add buttons for update and delete */}
        <button onClick={() => updateProduct(product.id)}>Update</button>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
    ));
  };

  return (
    <div className="admin-panel-container">
      <AdminSidebar/>
      <h1>Admin Panel!</h1>
      {/* Button to fetch products */}
      <button onClick={fetchProducts}>Get All Products</button>
      {/* Display product cards */}
      <div className="product-container">
        {renderProductCards()}
      </div>
      {/* Button to add a new product */}
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AdminPanel;
