import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn} from 'react-icons/fa';
import '../../styles/header.css'
const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube/>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn/>
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Your CRMP. All Rights Reserved.
      </div>
    </footer>
    
  );
};

export default Footer;
