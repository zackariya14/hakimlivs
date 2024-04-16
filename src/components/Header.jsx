import React from "react";
import "./Home.css";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header-container">
      <div className="leftHeader">
        <div className="search">
          <input type="text" placeholder="Sök..." />
          <Search />
        </div>
      </div>

      <div className="centerHeader">
        <h1> Hakims Livs. </h1>
      </div>

      <div className="rightHeader">
        <div className="logBtn">
          <Link to="/login" >
            <button>Logga in</button>
          </Link>
        </div>

        <div className="cart">
          <ShoppingCartOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
