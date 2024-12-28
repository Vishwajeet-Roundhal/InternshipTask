// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Create a Context for Admin Authentication
// export const AuthContext = createContext();

// // AuthProvider component to manage login state
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [adminCredentials, setAdminCredentials] = useState({
//     username: '',
//     password: ''
//   });

// //   const navigate = useNavigate();

//   // Check if the user is logged in when the app is loaded
//   useEffect(() => {
//     const storedAuth = localStorage.getItem('isAdmin');
//     if (storedAuth) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = (username, password) => {
//     // You can check credentials here, for simplicity, we're using a static check.
//     if (username === 'admin' && password === 'admin123') {
//       localStorage.setItem('isAdmin', true); // Store login state in localStorage
//       setIsAuthenticated(true);
//       navigate('/admin/dashboard'); // Redirect to admin dashboard
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('isAdmin');
//     setIsAuthenticated(false);
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout, adminCredentials, setAdminCredentials }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use authentication context
// export function useAuth() {
//   return useContext(AuthContext);
// }
