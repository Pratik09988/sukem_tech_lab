import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" end className="navbar-logo" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Su-KEm Tech Lab" />
      </NavLink>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/service" className="nav-link" onClick={() => setMenuOpen(false)}>
          Service
        </NavLink>
        <NavLink to="/OurTeam" className="nav-link" onClick={() => setMenuOpen(false)}>
          Our Team
        </NavLink>
        <NavLink to="/project" className="nav-link" onClick={() => setMenuOpen(false)}>
          Project
        </NavLink>
        <NavLink to="/career" className="nav-link" onClick={() => setMenuOpen(false)}>
          Career
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;