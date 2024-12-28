import React, { useState } from "react";
import "../styles/AdminLogin.css"

export function AdminLogin() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
     // Mock credentials for admin login (replace this with real authentication logic)
  const mockAdminCredentials = {
    email: "admin@gmail.com",
    password: "admin123",
  };

  if (
    credentials.username === mockAdminCredentials.username &&
    credentials.password === mockAdminCredentials.password
  ) {
    alert("Login successful!");
    // Save authentication state (e.g., token or flag)
    localStorage.setItem("isAdminAuthenticated", true);
    // Redirect to admin dashboard
    window.location.href = "/admin";
  } else {
    alert("Invalid username or password. Please try again.");
  }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="email" 
            id="email"
            name="email"  
            value={credentials.email} 
            onChange={handleInputChange}
            placeholder="Enter admin email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter admin password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}
