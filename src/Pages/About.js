import React from "react";
import Navbar from "../components/navbar";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Navbar animate={false} />
      <div className="about-content">
        <div className="about-text">
          <p>
            hello! my name is ethan do, i'm currently a student at princeton
            university majoring in computer science and minoring in statistics
            and machine learning. i'm interested in full stack development,
            machine learning, and data science.
          </p>
          <p>
            on campus, i'm a board member of the vietnamese student association,
            where we promote vietnamese culture and provide opportunities for
            students to learn about the culture and history of vietnam.
          </p>
          <p>
            when i'm not coding, you can find me playing in the gym, watching
            anime and kdramas, playing pickleball or ping pong, trying out new
            foods, or taking a nap (haha).
          </p>
          <p>
            i'm always excited to work on new projects and collaborate with
            other developers. feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
