import React, { useState } from 'react';

const Logout = () => {
    const handleLogout = () => {
      // Clear the token from state and sessionStorage
      removeToken();
      // Optionally, you can redirect the user to the login page after logout
      // window.location.replace('/login');
    };
  
    return (
      <div>
        <h2>Logout</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
export default Logout;
  