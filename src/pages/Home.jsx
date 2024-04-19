// import React, {useState, useEffect} from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import "../components/products.css";
// import ProductList from '../components/productlist';
// import Sidebar from '../components/Sidebar';
// import ProductCategories from '../components/ProductCategories';
// import axios from 'axios';

// import { Link } from 'react-router-dom';

// const Home = () => {


//   return (
//     <div>
//     <Header/>
    
//     <ProductCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
//     <ProductList products={storeProducts}/>
      
//     <Sidebar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

//     <Footer/>
//    </div>
//   )
// }

// export default Home



import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/productlist';
import Sidebar from '../components/Sidebar';
import ProductCategories from '../components/ProductCategories';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [storeProducts, setStoreProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    fetchCategories();
    fetchStoreProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory){
      setFilteredProducts(storeProducts.filter(p => {
        if(p.category.includes(selectedCategory._id)){
          return true
        }
        return false
      }))
    } 
  }, [selectedCategory]);
  console.log("filteredProducts", filteredProducts)
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchStoreProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);
      setStoreProducts(response.data);
    } catch (error) {
      console.error('Error fetching store products:', error);
    }
  };

  const shownProducts = filteredProducts.length > 0 ? filteredProducts : storeProducts

  return (
    <div>
      <Header/>
      <ProductCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <ProductList products={shownProducts}/>
      <Sidebar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Footer/>
    </div>
  );
}

export default Home;
