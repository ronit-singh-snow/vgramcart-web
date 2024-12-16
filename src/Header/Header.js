import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ scrollToContact }) {
  return (
    <header className="header">
      <div className="logo">VGRAM CART</div>
      <nav className="navbar">
      <Link to="/" > <button>Home</button> </Link>        
        <button onClick={scrollToContact}>
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Header;
