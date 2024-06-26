import "./Home.css";
import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header-container">
      <div className="leftHeader">
        <div className="search">
          <div className="language"> SV </div>
          {/* <input type="text" placeholder="Sök..." /> <Search /> */}

        </div>
      </div>
      <div className="centerHeader">
        <h1>Hakims Livs.</h1>
      </div>
      <div className="rightHeader">
        
        
       <div className="cart">
         <Link to="/cart" className="cart__">
           <ShoppingCartOutlined />
     
       </Link></div>
      
      
      </div>
    </div>
  );
};

export default Header;
