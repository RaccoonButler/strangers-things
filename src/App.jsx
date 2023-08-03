// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Posts from './components/Posts';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setToken(newToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setToken(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <MainNavigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Posts token={token} />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/logout"
          element={<Logout onLogout={handleLogout} isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
