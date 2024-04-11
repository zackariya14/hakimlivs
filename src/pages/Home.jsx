import React from 'react';
import Footer from '../components/Footer';
import "../components/products.css";
import ProductList from '../components/productlist';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div>
      <div className='main'>
        <ProductList />
      </div>    
      <Sidebar />
      <Footer/>
    </div>
  );
};

export default Home;
