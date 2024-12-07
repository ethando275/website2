import React from "react";
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
    </div>
  );
}

export default Home;
