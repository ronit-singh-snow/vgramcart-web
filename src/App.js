import "./App.css";
import Homepage from "./Homepage/Homepage";
import AdminLogin from "./AdminLogin/AdminLogin";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductList from "./ProductList/ProductList";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import DeleteAccount from "./DeleteAccount/DeleteAccount";


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
          {/* <LandingPage scrollToContact={scrollToContact} /> */}

          <Routes>
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/delete_account" element={<DeleteAccount />} />
          </Routes>
          

          
        </div>
      </Router>
    </>
  );
}

export default App;
