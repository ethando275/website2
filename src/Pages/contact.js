import React from "react";
import "./contact.css";

function Contact() {
  const contactInfo = {
    email: "ed8205@alumni.princeton.edu",
    linkedin: "https://www.linkedin.com/in/ethando275",
    github: "https://github.com/ethando275",
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Contact Me</h1>

          <div className="contact-card">
            <div className="contact-section">
              <h2>Let's Connect!</h2>
              <p>
                Feel free to reach out for opportunities, collaborations, or
                just to say hello.
              </p>
            </div>

            <div className="contact-section">
              <div className="contact-item">
                <span className="icon">✉️</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="contact-link"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="contact-item">
                <span className="icon">💼</span>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn
                </a>
              </div>

              <div className="contact-item">
                <span className="icon">🐙</span>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="pixel-decoration">
              <div className="pixel-line"></div>
              <div className="pixel-dot"></div>
              <div className="pixel-line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
