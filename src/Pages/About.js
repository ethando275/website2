import React, { useState } from "react";
import "./About.css";

const skills = [
  { category: "languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C#"] },
  { category: "frontend", items: ["React", "Next.js", "HTML/CSS"] },
  { category: "backend", items: ["Node.js", "FastAPI", ".NET", "PostgreSQL"] },
  { category: "ml / ai", items: ["Computer Vision", "NLP", "LLMs", "OpenCV", "YOLO"] },
  { category: "tools", items: ["Git", "Unity", "Palantir Foundry", "Google Cloud Platform"] },
];

function About() {
  const [skillsOpen, setSkillsOpen] = useState(false);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <p>
            hello! my name is ethan do, i recently graduated from princeton
            university with a degree in computer science and a minor in
            statistics and machine learning. i'm now working full time as a
            forward deployed engineer at fourth age, building on my interests
            in full stack development, machine learning, and data science.
          </p>
          <p>
            when i'm not working, you can find me at the gym, learning guitar,
            watching anime and kdramas, cafe hopping, thrifting, cooking,
            building pcs and mechanical keyboards, trying new restaurants, or
            taking a nap (haha).
          </p>
          <p>
            i'm always excited to work on new projects and collaborate with
            other developers. feel free to reach out!
          </p>
        </div>

        <div className="skills-section">
          <button
            type="button"
            className="skills-toggle"
            onClick={() => setSkillsOpen((open) => !open)}
            aria-expanded={skillsOpen}
          >
            <span className={`skills-toggle-arrow ${skillsOpen ? "open" : ""}`}>
              ▸
            </span>
            skills
          </button>
          {skillsOpen && (
            <div className="skills-body">
              {skills.map(({ category, items }) => (
                <div key={category} className="skill-row">
                  <span className="skill-category">{category}:</span>
                  <div className="skill-tags">
                    {items.map((item) => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
