import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in both fields");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      // Make a POST request to your login endpoint
      const response = await axios.post(
        "https://gomedia-com.onrender.com/api/auth/login",
        { email, password }
      );

      if (response.data.success) {
        // Store the token or any other necessary info
        localStorage.setItem("token", response.data.token);

        // Redirect the user to the admin dashboard or homepage
        window.location.href = "/"; // Change this to your admin dashboard URL
      }
    } catch (error) {
      // Handle errors like incorrect credentials or server issues
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Login failed. Please try again."
        );
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login">
        <Navbar></Navbar>
        <div className="login-container">
          <h2>Admin Login</h2>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" disabled={loading} className="homeButton">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
