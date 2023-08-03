import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';

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
      // ... your login logic
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
          <p class="signup">
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
