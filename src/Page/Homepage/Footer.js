import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
// import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyles = {
    backgroundColor: '#2D241E', // Deep Earthy Brown
    color: '#F4F1EA', // Off-white/Cream
    paddingTop: '60px',
    paddingBottom: '20px',
    borderTop: '5px solid #d4a017' // Golden accent line
  };

  const linkStyles = {
    color: 'rgba(244, 241, 234, 0.7)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  return (
    <footer style={footerStyles}>
      <Container>
        <Row className="gy-4">
          {/* Brand and Mission */}
          <Col lg={4} md={6}>
            <h3 className="serif-font fw-bold mb-4" style={{ color: '#d4a017' }}>V-GRAM CART</h3>
            <p className="small opacity-75 pe-lg-5">
              Nourishing generations with the world's finest heirloom rice. 
              Sustainably sourced, naturally aged, and purity guaranteed.
            </p>
            <div className="d-flex gap-3 mt-4">
              {/* <a href="#" style={linkStyles}><FiInstagram size={20} /></a>
              <a href="#" style={linkStyles}><FiFacebook size={20} /></a>
              <a href="#" style={linkStyles}><FiTwitter size={20} /></a> */}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" style={linkStyles}>Home</a></li>
              <li className="mb-2"><a href="#about" style={linkStyles}>About Our Story</a></li>
              <li className="mb-2"><a href="#products" style={linkStyles}>Product Catalog</a></li>
              <li className="mb-2"><a href="#services" style={linkStyles}>Our Quality</a></li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4">Contact Us</h5>
            <div className="d-flex mb-3 align-items-start">
              {/* <FiMapPin className="me-3 mt-1 text-warning" /> */}
              <span className="small opacity-75">
                123 Harvest Lane, <br />
                Himalayan Foothills, <br />
                Uttarakhand, India
              </span>
            </div>
            <div className="d-flex mb-3 align-items-center">
              {/* <FiPhone className="me-3 text-warning" /> */}
              <span className="small opacity-75">+1 (555) 987-6543</span>
            </div>
            <div className="d-flex align-items-center">
              {/* <FiMail className="me-3 text-warning" /> */}
              <span className="small opacity-75">hello@goldengrain.com</span>
            </div>
          </Col>

          {/* Newsletter / Trust */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4">The Golden Club</h5>
            <p className="small opacity-75 mb-3">Join our newsletter for exclusive recipes and harvest updates.</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control border-0 bg-dark text-white small" 
                placeholder="Your email" 
                style={{ backgroundColor: 'rgba(255,255,255,0.1) !important' }}
              />
              <button className="btn btn-warning fw-bold" type="button">Join</button>
            </div>
          </Col>
        </Row>

        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small opacity-50">
          <p className="mb-0">&copy; {currentYear} GoldenGrain Co. All rights reserved.</p>
          <div className="d-flex gap-4 mt-3 mt-md-0">
            <a href="#" style={linkStyles}>Privacy Policy</a>
            <a href="#" style={linkStyles}>Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;