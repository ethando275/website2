import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({ animate = false }) {
  return (
    <div className={`nav-links ${animate ? "animate-nav" : ""}`}>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/experiences" className="nav-link">
        Experiences
      </Link>
      <a
        href="https://github.com/ethando275"
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href={process.env.PUBLIC_URL + "/resume.pdf"}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
