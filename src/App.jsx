import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Cart from './pages/cart';
import Home from "./pages/Home";
import LoginPage from './components/LoginPage';

import AdminPanel from './components/AdminPanel';

const App = () =>{
  // return <Home/>;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
     <Route path="/LoginPage" element={<LoginPage/>}></Route>
      <Route path="/AdminPanel" element={<AdminPanel/>}></Route>
      
    </Routes>
  );
};
export default App;
