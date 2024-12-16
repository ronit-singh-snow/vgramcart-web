import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About VGram Cart</h3>
        <ul>
          <li><a href="/">Who We Are</a></li>
          <li><a href="/">Work With Us</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Offers</a></li>
          <li><a href="/">Delivery</a></li>
          <li><a href="/">Help Center</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Download App</h3>
        <a href="/" className="app-store-link">App Store</a>
        <a href="/" className="play-store-link">Play Store</a>
      </div>
    </footer>
  );
}

export default Footer;
