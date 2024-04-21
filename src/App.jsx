<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import Home from "./pages/Home"; 
import Login from "./components/Login";
import Header from "./components/Header"; 
import AdminLogin from "./pages/AdminLogin";
import AddProduct from "./pages/AddProduct";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />{" "}
        {/* Include the Header component for consistent navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />{" "}
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route path="/addProduct" element={<AddProduct/>}/>
          {/* Protected route for admin panel */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
=======
import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Cart from './pages/cart';
import Home from "./pages/Home";

>>>>>>> 3af740f0ea58df2129665ecc4428440df1dce94c

const App = () =>{
  // return <Home/>;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
export default App;
