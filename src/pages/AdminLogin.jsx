import React, { useEffect, useState } from "react";

function AdminLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token && token === process.env.REACT_APP_ACCESS_TOKEN) {
      console.log("Authenticated");
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>You are not authorized to view this page. Please login.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Library administration tools</h1>
    </div>
  );
}

export default AdminLogin;
