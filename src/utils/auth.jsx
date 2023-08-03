import { useState } from 'react';

// Helper function to set the token on state and/or in sessionStorage
const setToken = (token) => {
  // Set the token in state (you may use a state management library)
  // For simplicity, let's use useState hook to store the token
  useState(token);
  // Optionally, save the token in sessionStorage to persist across page reloads
  sessionStorage.setItem('token', token);
};

// Helper function to remove the token from state and sessionStorage
const removeToken = () => {
  // Remove the token from state (you may use a state management library)
  // For simplicity, let's just set it to null using useState hook
  useState(null);
  // Remove the token from sessionStorage
  sessionStorage.removeItem('token');
};

// Helper function to check if the user is logged in based on the token
const isLoggedIn = () => {
  // Check if the token exists in state or sessionStorage
  const token = sessionStorage.getItem('token');
  return !!token;
};

// Helper function to create headers with the bearer token
const makeHeaders = () => {
  const token = sessionStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};
