import "./App.css";
import Homepage from "./Homepage/Homepage";
import AdminLogin from "./AdminLogin/AdminLogin";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductList from "./ProductList/ProductList";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import DeleteAccount from "./DeleteAccount/DeleteAccount";


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
