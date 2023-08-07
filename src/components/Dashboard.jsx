import React, { useState, useEffect } from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Dashboard = ({ token }) => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`${BASE_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        console.log(result);

        setMessage(result.message);
        setUser(result.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <div>
      <h1>{message}</h1>
      <h3>User</h3>
      <ul>
        <li>Username: {user.username}</li>
        {/* Display other user information as needed */}
      </ul>
    </div>
  );
};

export default Dashboard;
