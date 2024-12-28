// components/AdminDashboard.js
import React, { useEffect, useState, useContext } from 'react';
import AdminContactList from './AdminContactList';

export function AdminDashboard() {
//   const { user } = useContext(AuthContext);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     if (user && user.role === 'admin') {
//       fetch('/api/admin/users', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => setUsers(data))
//         .catch((error) => console.error('Error fetching users:', error));
//     }
//   }, [user]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminContactList />
    </div>
  );
}
