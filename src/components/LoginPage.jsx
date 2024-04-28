import React from "react";

import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./login.css";

const LoginPage = () => {



   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [role, setRole] = useState("user");
   const navigate = useNavigate();
   axios.defaults.withCredentials = true;
   const hendleSubmit = () => {
    axios.post('http://localhost:5000/users/login', { username, password ,role})
       
        .then(res => {
             if(res.data.LoginPage && res.data.role==="admin"){
              navigate("/adminpanel")
             }
        }
       
      )
        .catch(err => console.log(err));
    }
   
  
   return (<>
<Link to="/" className="home-link">Hem</Link>
      <div className="login-page">
        
       <div className="login-container">
           <h2>Login</h2> <br />
          <div className="form-group">
           <label htmlFor="username">Username:</label>
           <input type="text"  placeholder="Username" 
           onChange={(e) => setUsername(e.target.value)}/>
           
          </div>

          <div className="form-group">
           <label htmlFor="password">Lösenord:</label>
           <input type="password" placeholder="Lösenord"
            onChange={(e) => setPassword(e.target.value)} />
           
          </div>


          <div className="form-group">
           <label htmlFor="role">Role:</label>
          <select name="role" id="role"
           onChange={(e) => setRole(e.target.value)}>
               <option value="admin">Admin</option>
             
          </select>
           
          </div>

<button className="btn-login" onClick={hendleSubmit} >Login</button>
       </div>
      </div>
      </>
   );
   }   

   export default LoginPage;
