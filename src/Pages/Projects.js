import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Software Engineer - EVAL",
    description:
      "Implemented a real-time tournament leaderboard in Next.js using Convex, enabling seamless insertion and removal of player rankings with automatic client synchronization. Designed and deployed a Convex-backed datastore to manage leaderboard state, leveraging schema-less configuration, reactive queries, and simplified data fetching compared to traditional PostgreSQL + Prisma workflows. Integrated Convex with Clerk authentication and explored data reconciliation strategies for external player data, establishing a foundation for future RAG-based search and AI-driven features.",
    tech: ["Next.js", "Convex", "Clerk Authentication", "TypeScript"],
    position: 400,
    date: "Aug 2025 - Nov 2025",
  },
  {
    id: 2,
    title: "recipefy",
    description:
      "Built an AR-ready food detection and cooking assistant that identifies ingredients from live camera feeds and maps them to cuisines, personalized recipe recommendations, and step-by-step guided cooking instructions. Engineered a real-time computer vision + LLM pipeline using YOLO for ingredient detection and Google Gemini for structured recipe/cuisine generation, with an OpenCV overlay UI that displays bounding boxes, ingredient lists, and suggested next steps. Optimized for an engaging, app-based learning experience by adding motion-based scanning, stability locking to reduce redundant API calls, and asynchronous processing to keep the interface responsive while enabling progress tracking and gamified cooking challenges.",
    tech: ["YOLO", "Google Gemini", "OpenCV", "Computer Vision", "LLM"],
    position: 800,
    date: "Jan 2026 - Present",
  },
  {
    id: 3,
    title: "Throughline",
    description:
      "Developed Throughline, a full-stack AI-powered journaling platform using Next.js, FastAPI, and PostgreSQL, delivering real-time text analysis and secure OAuth-based authentication in a production-ready, containerized environment. Built an end-to-end NLP analytics pipeline leveraging Sentence Transformers for embeddings, agglomerative clustering with cosine similarity for pattern detection, and LLM-based labeling to generate interpretable weekly insights from unstructured text data. Applied data-driven optimization techniques (similarity thresholds, cohesion scoring, entry sampling limits) to improve analytical accuracy and system performance, demonstrating strengths in data modeling, machine learning application, and scalable system design relevant to technical, data, and analyst roles.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Sentence Transformers", "NLP"],
    position: 1200,
    date: "Jan 2026 - Present",
  },
  {
    id: 4,
    title: "Platformer Game",
    description:
      "Unity-based platformer video game with custom character designs, animation frames, and environment artwork created from scratch in Adobe Photoshop.",
    tech: ["Unity", "C#", "Adobe Photoshop"],
    position: 1600,
    date: "Sep 2021 - Jan 2022",
  },
  {
    id: 5,
    title: "Personal Website",
    description:
      "Interactive portfolio website featuring retro game aesthetics, pixel art character, and dynamic project timeline. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "CSS", "React Router", "HTML5"],
    position: 2000,
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
    position: 2400,
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
    position: 2800,
    date: "Jun 2024 - Aug 2024",
  },
  {
    id: 8,
    title: "Campus Hunt",
    description:
      "Startup version of TigerSpot for all universities. A React-based web application using Node.js, PostgreSQL, Cloudinary, and Google Cloud Services/APIs. Features include campus landmark identification, interactive maps, and user authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "Cloudinary", "Google Cloud"],
    position: 3200,
    date: "Sep 2024 - Jan 2025",
  },
  {
    id: 9,
    title: "WIT Sports SWE Intern",
    description:
      "Built a fraud detection pipeline to uncover unauthorized posts of prize activations (e.g., car giveaways), preventing inflated contest entries and bot abuse. The system uses Google Search API and Playwright/BeautifulSoup to scan for unapproved domains sharing activation links, with automated Slack alerts and GitHub Actions scheduling.",
    tech: [
      "Python",
      "Google Search API",
      "Playwright",
      "BeautifulSoup",
      "GitHub Actions",
      "Slack API",
    ],
    position: 3600,
    date: "May 2025 - Aug 2025",
  },
];

const MOVE_SPEED = 3;
const GROUND_LEVEL = window.innerHeight - 210;
const WORLD_BOUNDS = {
  left: 0,
  right: Math.max(...projects.map((p) => p.position)) - 800,
};

function Projects() {
  const navigate = useNavigate();
  const [playerPos, setPlayerPos] = useState({
    x: 50,
    y: GROUND_LEVEL,
  });
  const [activeProject, setActiveProject] = useState(null);
  const [facingRight, setFacingRight] = useState(true);
  const gameRef = useRef(null);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const keysPressed = useRef({});

  const backgroundPosition = -playerPos.x * 0.3;
  const middlegroundPosition = -playerPos.x * 0.8;

  const updatePlayerPosition = useCallback(() => {
    if (keysPressed.current["a"]) {
      setPlayerPos((prev) => ({
        ...prev,
        x: Math.max(50, prev.x - MOVE_SPEED),
      }));
      setFacingRight(false);
    }
    if (keysPressed.current["d"]) {
      setPlayerPos((prev) => ({
        ...prev,
        x: Math.min(WORLD_BOUNDS.right, prev.x + MOVE_SPEED),
      }));
      setFacingRight(true);
    }
  }, []);

  const updateGameState = useCallback(
    (timestamp) => {
      if (previousTimeRef.current !== undefined) {
        updatePlayerPosition();

        const nearbyProject = projects.find((project) => {
          const projectScreenX = project.position + middlegroundPosition;
          const playerScreenX = playerPos.x;
          return Math.abs(projectScreenX - playerScreenX) < 30;
        });
        setActiveProject(nearbyProject || null);
      }
      previousTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(updateGameState);
    },
    [updatePlayerPosition, playerPos.x, middlegroundPosition]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      keysPressed.current[e.key.toLowerCase()] = true;
    };

    const handleKeyUp = (e) => {
      keysPressed.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateGameState);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateGameState]);

  return (
    <div className="game-container">
      <Navbar animate={false} />
      <div className="instructions">Press 'A' or 'D' to move</div>
      <div className="game-world" ref={gameRef}>
        <button
          className="view-toggle"
          onClick={() => navigate("/experiences")}
        >
          Switch to List View
        </button>
        <div
          className="background-layer"
          style={{ transform: `translateX(${backgroundPosition}px)` }}
        />
        <div
          className="world-content"
          style={{ transform: `translateX(${middlegroundPosition}px)` }}
        >
          <div className="timeline"></div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-platform"
              style={{ left: `${project.position}px` }}
            >
              <div className="project-sign">{project.title}</div>
              {activeProject === project && (
                <div
                  className={`project-popup ${activeProject ? "visible" : ""}`}
                >
                  <h3>{project.title}</h3>
                  <p className="duration">{project.date}</p>
                  <p className="description">{project.description}</p>
                  <p className="technologies">{project.tech.join(", ")}</p>
                  {/* <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-btn"
                  >
                    View Project
                  </a> */}
                </div>
              )}
            </div>
          ))}
          <div className="ground"></div>
        </div>

        <div
          className={`player ${facingRight ? "facing-right" : "facing-left"}`}
          style={{
            left: `${playerPos.x}px`,
            top: `${playerPos.y}px`,
            transform: facingRight
              ? "translateX(-50%)"
              : "scaleX(-1) translateX(50%)",
          }}
        />
      </div>
      <div className="d-pad">
        <button
          className="d-pad-button left"
          onMouseDown={() => (keysPressed.current["a"] = true)}
          onMouseUp={() => (keysPressed.current["a"] = false)}
          onTouchStart={() => (keysPressed.current["a"] = true)}
          onTouchEnd={() => (keysPressed.current["a"] = false)}
        >
          A
        </button>
        <button
          className="d-pad-button right"
          onMouseDown={() => (keysPressed.current["d"] = true)}
          onMouseUp={() => (keysPressed.current["d"] = false)}
          onTouchStart={() => (keysPressed.current["d"] = true)}
          onTouchEnd={() => (keysPressed.current["d"] = false)}
        >
          D
        </button>
      </div>
    </div>
  );
}

export default Projects;
