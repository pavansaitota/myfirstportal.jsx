// Inside ./pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // This is essential!
import gif1 from "../../assets/idea.gif"; // Adjust the path as necessary
import login from "../../assets/login.png"; // Adjust the path as necessary

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "admin123") {
      e.preventDefault();
      // 1. --- Replace with your actual authentication logic ---
      const loginSuccessful = true; // Simulating a successful login
      if (loginSuccessful) {
        setIsLoggedIn(true);
        navigate('/Home');
      }
      // 2. If login is successful:
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    // The login-container centers the box on the whole page
    <div className="login-container">
      <div className="header-section">
        <h1 className="app-title">Welcome to My Idea</h1>
        <p className="app-subtitle">Please log in to continue</p>
        <img src={gif1} alt="App Logo" className="app-logo" />
      </div>
      <div className="login-form-box">
        <h2 className="login-title">User Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className="input-label">Username:</label>
            <input type="text" name="username" required />
          </div>
          <div className="input-group">
            <label className="input-label">Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;