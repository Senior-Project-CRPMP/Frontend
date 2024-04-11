import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { fullname, email, password } = formData;
    const errors = {};

    if (!fullname.trim()) {
      errors.fullname = 'Full name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulating form submission delay
      setTimeout(() => {
        // Handle form submission here, e.g., send data to server
        console.log(formData);
        setSuccessMessage('Registered successfully!');
      }, 1000);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="con">
      <div className="cardd">
      <img src="../src/assets/logo.png" alt="logo" className='im' width = "50px" height = "50px"/>
        <h2>Register</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            {errors.fullname && <p className="error-message">{errors.fullname}</p>}
          </div>
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
            {errors.email && <p className="error-message">{errors.email}</p>}
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
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit" className="button1">
            Sign Up
          </button>
          <div>
            <span>
              Already have an account{' '}
              <Link to="/login" className="login-link">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;