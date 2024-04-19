// import React from "react";
import "./Home.css";
// import { Search, ShoppingCartOutlined } from "@mui/icons-material";

// const Header = () => {
//   return (
//     <div className="header-container">
//       <div className="leftHeader">
//         <div className="search">
//           <div className="language"> SV </div>
//           <input type="text" placeholder="Sök..." /> <Search />
//         </div>
//       </div>

//       <div className="centerHeader">
//         <h1> Hakims Livs. </h1>
//       </div>

//       <div className="rightHeader">
        
        
//        <div className="cart"> <ShoppingCartOutlined /></div>
      
      
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { LayoutGrid} from "lucide-react"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"


const Header = () => {
  return (
    
    <div className="header-container">
      <div className="leftHeader">
        <div className="search">
          <div className="language"> SV </div>
          {/* <input type="text" placeholder="Sök..." /> <Search /> */}
          < Sidebar />
          <div>
{/*             
               <DropdownMenu>
                <DropdownMenuTrigger>
                    <h2 className="hidden md:flex gap-2 items-center
                    border rounded-full p-2 px-10 bg-slate-200">
               <LayoutGrid className="h-5 w-5"/> Category</h2>

                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}



          </div>

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
