import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="./logo.png" alt="Logo" />
        </Link>
        <input 
          className="menu-btn" 
          type="checkbox" 
          id="menu-btn" 
          checked={menuOpen} 
          onChange={toggleMenu} 
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li><Link to="/Dragon" onClick={toggleMenu}>Dragon</Link></li>
          <li><Link to="/Falcon9" onClick={toggleMenu}>Falcon9</Link></li>
          <li><Link to="/Falconheavy" onClick={toggleMenu}>Falconheavy</Link></li>
          <li><Link to="/Starship" onClick={toggleMenu}>Starship</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
