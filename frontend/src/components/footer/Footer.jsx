import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      // Handle email subscription logic here
      console.log(`Subscribed with email: ${email}`);
      alert("Thank you for subscribing!");
      setEmail(""); // Clear input field
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Subscription Form */}
        <div className="subscription-form">
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscription}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Contact Email */}
        <div className="contact-email">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:admin@gomedia.com">admin@gomedia.com</a></p>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} GoMedia.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
