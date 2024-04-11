import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import Home from "./pages/Home"; 
import Login from "./components/Login";

import Header from "./components/Header"; 

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
          {/* Protected route for admin panel */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
