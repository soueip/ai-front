import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  
  return (
    <header className="custom-navbar">
      <div className="logo">
        <a href="/" className="logo-link">
          {/* Your logo SVG or image goes here */}
        </a>
      </div>
      <nav className="menu">
        <ul className="menu-list" style={{ display: 'flex', flexDirection: 'row' }}>
          <li className="menu-item">
            <a href="/solutions" className="menu-link">Solutions</a>
            {/* Dropdown menu for Solutions */}
            <div className="dropdown-menu">
              {/* Insert your dropdown menu content here */}
              <a href="/solutions/visitor-insights" className="dropdown-menu-item">Visitor Insights</a>
              <a href="/solutions/content-analytics" className="dropdown-menu-item">Impression Analytics for Digital Signage</a>
              {/* Add more dropdown menu items as needed */}
            </div>
            <span className="dropdown-arrow">&#9662;</span>
          </li>
          <li className="menu-item">
            <a href="/industries" className="menu-link">Industries</a>
            {/* Dropdown menu for Industries */}
            <div className="dropdown-menu">
              {/* Insert your dropdown menu content here */}
              <a href="/industries/media-owners" className="dropdown-menu-item">Media Owners</a>
              <a href="/industries/consumer-electronics-retail" className="dropdown-menu-item">Consumer Electronics</a>
              {/* Add more dropdown menu items as needed */}
            </div>
            <span className="dropdown-arrow">&#9662;</span>
          </li>
          <li className="menu-item">
            <a href="/pricing" className="menu-link">Pricing</a>
          </li>
          <li className="menu-item">
            <a href="/resources" className="menu-link">Resources</a>
            {/* Dropdown menu for Resources */}
            <div className="dropdown-menu">
              {/* Insert your dropdown menu content here */}
              <a href="/resources/case-studies" className="dropdown-menu-item">Case Studies</a>
              <a href="/resources/release-notes" className="dropdown-menu-item">Release Notes</a>
              {/* Add more dropdown menu items as needed */}
            </div>
            <span className="dropdown-arrow">&#9662;</span>
          </li>
          <li className="menu-item">
            <a href="/marketplace" className="menu-link">Use Cases</a>
          </li>
          <li className="menu-item">
            <a href="/company" className="menu-link">Company</a>
            {/* Dropdown menu for Company */}
            <div className="dropdown-menu">
              {/* Insert your dropdown menu content here */}
              <a href="/about" className="dropdown-menu-item">About us</a>
              {/* Add more dropdown menu items as needed */}
            </div>
            <span className="dropdown-arrow">&#9662;</span>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <Link to="/login" className="login-btn">Log in</Link>
        <a href="https://signup.displayforce.ai/" className="get-started-btn">Book a demo</a>
      </div>
    </header>
  );
};

export default Navbar;
