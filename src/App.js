import "./App.css";
import Homepage from "./Homepage/Homepage";
import AdminLogin from "./AdminLogin/AdminLogin";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductList from "./ProductList/ProductList";
import Contact from "./Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Footer from "./Footer/Footer";

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
        <div className="app-content">
          <LandingPage scrollToContact={scrollToContact} />

            <Routes>
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<AdminLogin />} />
            </Routes>

            <Contact />

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
