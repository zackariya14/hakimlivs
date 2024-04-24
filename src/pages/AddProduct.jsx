import React, { useState, useEffect } from 'react';

const AddProduct = ({ fetchProducts }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const [products, setProducts] = useState([]); // State to store the list of products

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (response.ok) {
        // Product successfully added, fetch updated product list
        fetchProducts();
        console.log('Product added successfully');
        // Clear input fields after submission
        setProductData({
          name: '',
          description: '',
          price: '',
          category: '',
          image: ''
        });
      } else {
        // Handle error response
        console.error('Failed to add product:', response.status);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Product successfully deleted, fetch updated product list
        fetchProducts();
        console.log('Product deleted successfully');
      } else {
        // Handle error response
        console.error('Failed to delete product:', response.status);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={productData.name} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={productData.description} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Price:
          <input type="text" name="price" value={productData.price} onChange={handleInputChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={productData.category} onChange={handleInputChange} />
        </label>
        <label>
          Image URL:
          <input type="url" name="image" value={productData.image} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Product</button>
      </form>

      {/* Product list with delete buttons */}
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProduct;
