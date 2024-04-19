import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Cart from './pages/cart';
import Home from "./pages/Home";


const App = () =>{
  // return <Home/>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
