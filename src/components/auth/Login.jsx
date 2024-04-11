import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="con">
      <div className="cardd">
      <img src="../src/assets/logo.png" alt="logo" className='i' width = "50px" height = "50px" />
        <h2>Login</h2>
        {incorrectPassword && <p className="error-message">Incorrect password or email. Please try again.</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <Link to="/forgot-password">Forgot password</Link>
          </div>
          <button type="submit" className="button1">
            Log In
          </button>
          <div className="new-account">
            <span>
              Don't have an account?{' '}
              <Link to="/register" className="register-link">
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