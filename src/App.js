import "./App.css";
import Homepage from "./Homepage/Homepage";
import AdminLogin from "./AdminLogin/AdminLogin";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductList from "./ProductList/ProductList";
import Contact from "./Contact/Contact";
import OurProduct from "./OurProduct/OurProduct";
import KeyFeatures from "./KeyFeatures/Keyfeatures";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Footer from "./Footer/Footer";

  function AppContent() {
    const location = useLocation();
      if (location.pathname === "/productlist") {
      return <ProductList />;
    }

      if (location.pathname.startsWith("/product/")) {
        return <ProductDetails />;
      }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
        <div className="app-content">
          <LandingPage scrollToContact={scrollToContact} />
            <Routes>
              <Route path="/homepage" element={<Homepage />} />
              {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
              <Route path="/login" element={<AdminLogin />} />
            </Routes>
            <OurProduct/>
            <KeyFeatures/>
            <Contact />

          <Footer />
        </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
