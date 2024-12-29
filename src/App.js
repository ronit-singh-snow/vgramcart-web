import "./App.css";
import Homepage from "./Homepage/Homepage";
import AdminLogin from "./AdminLogin/AdminLogin";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductList from "./ProductList/ProductList";
import Contact from "./Contact/Contact";
import OurProduct from "./OurProduct/OurProduct";
import KeyFeatures from "./KeyFeatures/Keyfeatures";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
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
          <Header scrollToContact={scrollToContact} />

            <Routes>
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<AdminLogin />} />
            </Routes>
            <OurProduct/>
            <KeyFeatures/>
            <Contact />

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
