import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="logo" className="logo" />
      <input type="text" placeholder="search" className="search-bar" />

      <button className="cta-btn">Give Feedback</button>
    </nav>
  );
};

export default Navbar;
