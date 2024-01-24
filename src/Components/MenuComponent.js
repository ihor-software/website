import React, { useState, useEffect } from 'react';
import '../style/css/style.css';
import '../style/css/bootstrap.css';
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <button
                className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                aria-label="Toggle navigation"
                onClick={toggleMenu}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className={`collapse navbar-collapse offset ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav justify-content-end">
              <li className="nav-item" >
                <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/applications" className='nav-link'>Applications</Link>
                  </li>
                <li className="nav-item">
                <Link to="/portfolio" className='nav-link'>Portfolio</Link>
                </li>
                <li className="nav-item">
                <Link to="/cv" className='nav-link'>CV</Link>
                </li>
                <li className="nav-item">
                <Link to="/qualifications" className='nav-link'>Qualifications</Link>
                </li>
                <li className="nav-item">
                <Link to="/privacy" className='nav-link'>Privacy</Link>
                </li>
                <li className="nav-item">
                <Link to="/contacts" className='nav-link'>Contacts</Link>
                </li>
                <li className="nav-item">
                <Link to="/concepts" className='nav-link'>Concepts</Link>
                </li>
                <li className="nav-item">
                <Link to="/researches" className='nav-link'>Researches</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
  );
};

export default Menu;
