import React, { useState } from 'react';
import Register from './Register';
import { Link } from 'react-router-dom';

//import '../../styles/Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    console.log('Logging in with:', email, password);
  };

  return (
    <div>
      <div>
        <form className="form" onSubmit={handleLogin}>
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
          <div>
            <div>
              <input type= "checkbox" name = " " id = " " />
              <label htmlFor='Remeber Me'>Remember Me</label>
            </div>
            <span>Forgot password</span>
          </div>
          <button type="submit">Login</button>
          <div>
            <span>New Here?<Link to='Register'>Create an account</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
