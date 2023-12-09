import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'; // Importing icons from react-icons
import './Header.css'; // You can create a separate CSS file for the Header component

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      {/* Logo image at the left end */}
      <div className="logo-container">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dbelvmspz/image/upload/v1660558582/imran_logo_zh0c8u.jpg"
          alt="Logo"
        />
      </div>

      {/* Navigation elements at the right end */}
      <ul className="nav-menu">
        <li>
          <a href="https://www.linkedin.com/in/imrankhanmohammad/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-network-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/mdimrankhan175/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-network-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCkONUJKvEVz45urLxXIJ9YQ" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-network-icon" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
