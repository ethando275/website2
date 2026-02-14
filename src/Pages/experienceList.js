import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "./experienceList.css";

const projects = [
  {
    id: 1,
    title: "Software Engineer - EVAL",
    description:
      "Implemented a real-time tournament leaderboard in Next.js using Convex, enabling seamless insertion and removal of player rankings with automatic client synchronization. Designed and deployed a Convex-backed datastore to manage leaderboard state, leveraging schema-less configuration, reactive queries, and simplified data fetching compared to traditional PostgreSQL + Prisma workflows. Integrated Convex with Clerk authentication and explored data reconciliation strategies for external player data, establishing a foundation for future RAG-based search and AI-driven features.",
    tech: ["Next.js", "Convex", "Clerk Authentication", "TypeScript"],
    date: "Aug 2025 - Nov 2025",
  },
  {
    id: 2,
    title: "recipefy",
    description:
      "Built an AR-ready food detection and cooking assistant that identifies ingredients from live camera feeds and maps them to cuisines, personalized recipe recommendations, and step-by-step guided cooking instructions. Engineered a real-time computer vision + LLM pipeline using YOLO for ingredient detection and Google Gemini for structured recipe/cuisine generation, with an OpenCV overlay UI that displays bounding boxes, ingredient lists, and suggested next steps. Optimized for an engaging, app-based learning experience by adding motion-based scanning, stability locking to reduce redundant API calls, and asynchronous processing to keep the interface responsive while enabling progress tracking and gamified cooking challenges.",
    tech: ["YOLO", "Google Gemini", "OpenCV", "Computer Vision", "LLM"],
    date: "Jan 2026 - Present",
  },
  {
    id: 3,
    title: "Throughline",
    description:
      "Developed Throughline, a full-stack AI-powered journaling platform using Next.js, FastAPI, and PostgreSQL, delivering real-time text analysis and secure OAuth-based authentication in a production-ready, containerized environment. Built an end-to-end NLP analytics pipeline leveraging Sentence Transformers for embeddings, agglomerative clustering with cosine similarity for pattern detection, and LLM-based labeling to generate interpretable weekly insights from unstructured text data. Applied data-driven optimization techniques (similarity thresholds, cohesion scoring, entry sampling limits) to improve analytical accuracy and system performance, demonstrating strengths in data modeling, machine learning application, and scalable system design relevant to technical, data, and analyst roles.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Sentence Transformers", "NLP"],
    date: "Jan 2026 - Present",
  },
  {
    id: 4,
    title: "Platformer Game",
    description:
      "Unity-based platformer video game with custom character designs, animation frames, and environment artwork created from scratch in Adobe Photoshop.",
    tech: ["Unity", "C#", "Adobe Photoshop"],
    date: "Sep 2021 - Jan 2022",
  },
  {
    id: 5,
    title: "Personal Website",
    description:
      "Interactive portfolio website featuring retro game aesthetics, pixel art character, and dynamic project timeline. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "CSS", "React Router", "HTML5"],
    date: "Jan 2024 - Current",
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
    title: "Campus Hunt",
    description:
      "Startup version of TigerSpot for all universities. A React-based web application using Node.js, PostgreSQL, Cloudinary, and Google Cloud Services/APIs. Features include campus landmark identification, interactive maps, and user authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "Cloudinary", "Google Cloud"],
    date: "Sep 2024 - Jan 2025",
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
