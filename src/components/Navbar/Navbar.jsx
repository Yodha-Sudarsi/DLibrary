import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.jpg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleNavbar = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`} id="navbar">
      <div className='container navbar-content nav-container'>
        <div className='brand-and-toggler'>
          <Link to="/" className='navbar-brand'>
            <div className="logo-wrapper">
              <img src={logoImg} alt="Site Logo" className="logo" />
              <span className='brand-name'>DLibrary</span>
            </div>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{ color: isMenuOpen ? "#fff" : "#010101" }} />
          </button>
        </div>

        <div className={`navbar-collapse ${isMenuOpen ? "show-navbar-collapse" : ""}`}>
          <ul className="navbar-nav">
          <li className='nav-item'>
              <Link to="book" className='nav-link'>Library</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
