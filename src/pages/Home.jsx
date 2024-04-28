import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/products.css";
import ProductList from '../components/productlist.jsx';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className='luckiest-guy-regular'>
      <Header />
      <Sidebar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList 
        selectedCategory={selectedCategory} 
      />
      <Footer />
    </div>
  )
}

export default Home;
