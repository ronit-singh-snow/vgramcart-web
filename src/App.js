import './App.css';
import Homepage from './Homepage/Homepage';
import AdminLogin from './AdminLogin/AdminLogin';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductList from './ProductList/ProductList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import vegImage from "../src/ProductList/sonali.jpg";

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Router>
        <div className="app-container">
          <header className="header">
            <div className="logo">VGRAM CART</div>
            <nav className="nav">
              <Link to="/">Home</Link>
              <button onClick={scrollToContact} className="nav-button">
                Contact
              </button>
            </nav>
          </header>

          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="main-content">
                    <div className="text-content">
                      <h1>Welcome to VGram Cart</h1>
                      <p>
                      Freshness delivered to your doorstep                      </p>
                      <button className="shop-button">ORDER NOW</button>
                    </div>
                    <div className="image-content">
                      <img
                        src={vegImage}
                        alt="Grocery Bags"
                        className="grocery-image"
                      />
                    </div>
                  </div>
                }
              />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<AdminLogin />} />
            </Routes>

<section className='contact-page'>
            <div id="contact-section" className="contact-section">
              <h2>Contact Us</h2>
              <p>We’d love to hear from you! Fill out the form below.</p>
              <form className="contact-form">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </label>
                <label>
                  Message:
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                  ></textarea>
                </label>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
              </div>
            </section>
          </main>

          {/* Footer */}
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
        </div>
      </Router>
    </>
  );
}

export default App;
