import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/products.css";
import ProductList from '../components/productlist';
import Sidebar from '../components/Sidebar';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <Header/>
    
    
    <ProductList />
      
    {/* <Sidebar /> */}

    <Footer/>
   </div>
  )
}

export default Home