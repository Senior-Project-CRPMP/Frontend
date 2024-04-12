import React from 'react';
import '../../styles/header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
   
 
    <div className="head">
    <ul className="navigation">
      <li> <img src="../src/assets/logo.png" alt="logo" className='image1' width = "50px" height = "50px"/>
      <span class="logo-text">CRMP</span>
      </li>
      <li className='register'><Link to="/register">
              <button className='btn1'>Sign Up</button>
            </Link></li>
      <li className='login1'><Link to="/login">
              <button className='btn2'>Login</button>
            </Link></li>
      <li> <input type="text" placeholder="Search..." className='search-text'/>
        </li>
     
    </ul>
  </div>
  
  );
 
};


export default Header;
