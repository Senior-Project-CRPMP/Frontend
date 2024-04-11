import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
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
>>>>>>> main
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
<<<<<<< HEAD
              value={email}
              onChange={(e) => setEmail(e.target.value)}
=======
              name="email"
              value={formData.email}
              onChange={handleChange}
>>>>>>> main
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
<<<<<<< HEAD
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
=======
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
>>>>>>> main
          </div>
        </form>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> main
