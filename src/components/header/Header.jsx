import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="header-item">Home</Link>
      <Link to="/login" className="header-item">Login</Link>
      <Link to="/register" className="header-item">Register</Link>
      <Link to="/profile" className="header-item">Profile</Link>
      <Link to="/certifications" className="header-item">Certifications</Link>
      <Link to="/works" className="header-item">Works</Link>
      <Link to="/validation" className="header-item">Validation</Link>
    </div>
  );
}

export default Header;
