import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <div className="typing-line">
          <span className="pixel-text typing-animation-1">hi, i'm ethan.</span>
        </div>
        <div className="typing-line">
          <span className="pixel-text typing-animation-2">
            welcome to my website!
          </span>
        </div>
      </div>
      <div className="home-nav">
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
          href="/resume.pdf"
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
    </div>
  );
}

export default Home;
