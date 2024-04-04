import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/products';
import "../components/products.css";
import ProductList from '../components/products';


const Home = () => {
  return (
    <div>
    <Header/>
    <div >
    <ProductList />
    </div>
    
    <Footer/>
   </div>
  )
}

export default Home