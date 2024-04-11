import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating login verification
    const { email, password } = formData;
    if (email === 'example@example.com' && password === 'password123') {
      // Successful login
      console.log('Login successful');
      setIncorrectPassword(false);
    } else {
      // Incorrect password
      setIncorrectPassword(true);
    }
  };

  return (
    <div className="con">
      <div className="cardd">
        <h2>Login</h2>
        {incorrectPassword && <p className="error-message">Incorrect password or email. Please try again.</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button1">
            Log In
          </button>
          <div>
            <span>
              Don't have an account?{' '}
              <Link to="/Register" className="register-link">
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;