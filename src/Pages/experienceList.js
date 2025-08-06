import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "./experienceList.css";

const projects = [
  {
    id: 1,
    title: "Platformer Game",
    description:
      "Unity-based platformer video game with custom character designs, animation frames, and environment artwork created from scratch in Adobe Photoshop.",
    tech: ["Unity", "C#", "Adobe Photoshop"],
    date: "Sep 2021 - Jan 2022",
  },
  {
    id: 2,
    title: "Personal Website",
    description:
      "Interactive portfolio website featuring retro game aesthetics, pixel art character, and dynamic project timeline. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "CSS", "React Router", "HTML5"],
    date: "Jan 2024 - Current",
  },
  {
    id: 3,
    title: "TigerSpot",
    description:
      "Web application for Princeton University enabling users to identify and pin campus landmarks on an interactive map. Includes a player vs player mode where students can compete againt each other. Features include CAS authentication, dynamic scoring system, and leaderboard functionality.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PostgreSQL",
      "Cloudinary",
      "Leaflet JS",
    ],
    date: "Jan 2024 - May 2024",
  },
  {
    id: 4,
    title: "NashTech SWE Intern",
    description:
      "Developed an automated solution for King's College London that streamlined applicant data transfer, saving 15 hours weekly in manual inputs.",
    tech: [
      "C#",
      ".NET",
      "Entity Framework",
      "Azure SQL",
      "JavaScript",
      "Bootstrap",
    ],
    date: "Jun 2024 - Aug 2024",
  },
  {
    id: 5,
    title: "Campus Hunt",
    description:
      "Startup version of TigerSpot for all universities. A React-based web application using Node.js, PostgreSQL, Cloudinary, and Google Cloud Services/APIs. Features include campus landmark identification, interactive maps, and user authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "Cloudinary", "Google Cloud"],
    date: "Sep 2024 - Jan 2025",
  },
  {
    id: 6,
    title: "Software Engineer Intern - WIT Sports",
    description:
      "Built a fraud detection pipeline to uncover unauthorized posts of prize activations, preventing inflated contest entries and bot abuse.",
    tech: [
      "Python",
      "Google Search API",
      "Playwright",
      "BeautifulSoup",
      "GitHub Actions",
      "Slack API",
    ],
    date: "May 2025 - Aug 2025",
  },
];

function ExperienceList() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="experience-container">
        <button
          className="view-toggle"
          onClick={() => navigate("/experienceGame")}
        >
          Switch to Game View
        </button>
        <div className="experience-list">
          {projects.map((project) => (
            <div key={project.id} className="experience-item">
              <div className="experience-header">
                <h2>{project.title}</h2>
                <span className="date">{project.date}</span>
              </div>
              <p className="description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExperienceList;
