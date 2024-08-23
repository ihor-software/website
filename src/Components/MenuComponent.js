import React, { useState, useEffect } from 'react';
import '../style/css/style.css';
import '../style/css/bootstrap.css';
import { Link, Outlet, useLocation } from "react-router-dom";


const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand">Ihor Vasyliev Software Development</span>
          <div className={`collapse navbar-collapse offset flex-row-reverse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav justify-content-end">
              <li className="nav-item" >
                <Link to="/website" className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className='nav-link'>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className='nav-link'>Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts" className='nav-link'>Contacts</Link>
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
