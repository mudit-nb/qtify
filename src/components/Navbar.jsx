import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MusicApp</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Library</li>
        <li>Search</li>
      </ul>
    </nav>
  );
};

export default Navbar;
