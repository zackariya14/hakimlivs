import React from "react";
import "./Home.css";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Sidebar from './Sidebar';


const Header = () => {
  return (
    <div className="header-container">
      <div className="leftHeader">
        <div className="search">
          <div className="language"> SV </div>
          {/* <input type="text" placeholder="Sök..." /> <Search /> */}
          < Sidebar />

        </div>
      </div>

      <div className="centerHeader">
        <h1> Hakims Livs. </h1>
      </div>

      <div className="rightHeader">
        
        
       <div className="cart"> <ShoppingCartOutlined /></div>
      
      
      </div>
    </div>
  );
};

export default Header;
