import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
  // Check if the user is logged in as an admin (check localStorage or state)
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated"); // Replace with your auth logic

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedAdminRoute;
