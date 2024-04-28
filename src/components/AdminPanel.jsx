
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post((`${process.env.REACT_APP_BACKEND_URL}/products`), { name,category,description , price,image});
      setName('');
      setCategory('');
        setDescription('');
      setPrice('');
    setImage('');
      fetchProducts();
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleAddProduct}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - {product.category}- {product.description}-{product.price} - {product.image}
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}>Logout</button>
    </div>
  );
}

export default AdminPanel;
