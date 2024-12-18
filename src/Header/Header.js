import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ scrollToContact }) {
  return (
    <div className="app-container">

    <header className="header">
      <div className="logo">VGRAM CART</div>
      <nav className="navbar">
      <Link to="/" > <button>Home</button> </Link>        
        <button onClick={scrollToContact}>
          Contact
        </button>
      </nav>
    </header>
    <main>
    <div className="main-content">
      <div className="text-content">
        <h1>Welcome to VGram Cart</h1>
        <p>Freshness delivered to your doorstep</p>
        <button className="shop-button">ORDER NOW</button>
      </div>
      {/* <div className="image-content">
        <img
          src={vegImage}
          alt="Grocery Bags"
          className="grocery-image"
        />
      </div> */}
    </div>
    </main>
    </div>
  );
}

export default Header;
