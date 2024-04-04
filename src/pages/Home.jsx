import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/products';
import "../components/products.css";


const Home = () => {
  return (
    <div>
    <Header/>
    <div >
    <Products />
    </div>
    
    <Footer/>
   </div>
  )
}

export default Home