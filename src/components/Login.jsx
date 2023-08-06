import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import { logIn } from './Auth'; // Import the logIn function

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: formData.username,
            password: formData.password,
          },
        }),
      });
      if (response.ok) {
        const data = await response.json();
        logIn(data.data.token); // Update login state
      } else {
        // Handle login error (invalid username, password, etc.)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleToggleRegister = () => {
    setIsRegisterMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <h2>{isRegisterMode ? '' : 'Login'}</h2>
      {isRegisterMode ? (
        <Register />
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p className="signup">
            Not registered?{' '}
            <Link to="#" onClick={handleToggleRegister}>
              Sign up?
            </Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
