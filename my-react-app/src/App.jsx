import React, { useState } from "react"; // Import useState
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// Make sure Login is imported with correct casing
import Login from "./pages/login/login"; 
import './App.css';

// Component to handle layout and logic
function AppContent() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  // Function to handle logout
  const handleLogout = () => {
    // Perform any necessary cleanup (e.g., clear tokens)
    setIsLoggedIn(false);
    // You might want to navigate back to the login page here
    // navigate('/'); 
  };

  return (
    <>
      {/* Conditional Header Rendering: Render the header only if it's NOT the Login page */}
      {!isLoginPage && (
        <header className="App-header">
          <div className="header-content">
            <div className="logo">
              <img src='./src/assets/react.svg' alt="Logo" />
              <text style={{ color: "skyblue", marginTop: 1, fontSize: "20px", fontWeight: "bold" }}>My React Page</text> 
            </div>
            <div id="nav">
              <Link to="/Home">Home</Link>
              <Link to="/About">/ About</Link>
              <Link to="/Contact">/ Contact</Link>
              
              {/* CONDITIONAL LINK LOGIC: Login vs. Logout */}
              {isLoggedIn ? (
                // If logged in, show Logout link
                <a href="#" onClick={handleLogout}>/ Logout</a>
              ) : (
                // If not logged in, show Login link
                <Link to="/">/ Login</Link> 
              )}
            </div>
          </div>
        </header>
      )}

      {/* Define Routes */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Pass the function to update login status to the Login component */}
        <Route 
          path="/" 
          element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />
      </Routes>
    </>
  );
}

// The main App component only contains the Router
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}