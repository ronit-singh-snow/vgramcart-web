import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import Homepage from "./Page/Homepage/Homepage";

function AppContent() {

  return (
    <>
      <div className="app-content">
          <Routes> 
            <Route path="/" element={<Homepage />} />
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
