import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/products.css";
import ProductList from '../components/productlist';
import Sidebar from '../components/Sidebar';



const Home = () => {
  return (
    <div>
    <Header/>
    <div className='main'>
      
    <ProductList />
    </div>    
    <Sidebar />

    <Footer/>
   </div>
  )
}

export default Home