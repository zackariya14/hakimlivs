import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/products.css";
import ProductList from '../components/productlist';
import Sidebar from '../components/Sidebar';
import ProductCategories from '../components/ProductCategories';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div>
    <Header/>
    
    <ProductCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <ProductList products={storeProducts}/>
      
    <Sidebar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

    <Footer/>
   </div>
  )
}

export default Home