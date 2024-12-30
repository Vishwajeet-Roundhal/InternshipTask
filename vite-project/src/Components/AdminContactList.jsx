import React, { useEffect, useState } from 'react';
import "../styles/AdminContactList.css"

const AdminContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendURL = import.meta.env.VITE_BACKEND;


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`${backendURL}/api/admin/contacts`);
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="admin-contact-list">
      <h2>Contact Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Qualification</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td data-label="Name">{contact.fullName}</td>
              <td data-label="Email">{contact.email}</td>
              <td data-label="Mobile Number">{contact.mobileNumber}</td>
              <td data-label="Qualification">{contact.qualification}</td>
              <td data-label="Message">{contact.message}</td>
              <td data-label="Submitted At">{contact.submittedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContactList;

