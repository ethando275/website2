import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Platformer Game",
    description:
      "Unity-based platformer video game with custom character designs, animation frames, and environment artwork created from scratch in Adobe Photoshop.",
    tech: ["Unity", "C#", "Adobe Photoshop"],
    position: 400,
    date: "Sep 2021 - Jan 2022",
  },
  {
    id: 2,
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
    position: 800,
    date: "Jan 2024 - May 2024",
  },
  {
    id: 3,
    title: "Personal Website",
    description:
      "Interactive portfolio website featuring retro game aesthetics, pixel art character, and dynamic project timeline. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "CSS", "React Router", "HTML5"],
    position: 1200,
    date: "Jan 2024 - Current",
  },
  {
    id: 4,
    title: "NashTech SWE Intern",
    description:
      "Built a .NET framework in C# to automate parsing and migration of XML-based applicant data from legacy systems into Azure SQL for King's College London. Eliminated 15+ hours/week of manual data entry and reduced input errors by 80%, streamlining the school's transition to a modern tech stack. Developed a lightweight internal UI with Bootstrap and Entity Framework 6 to ensure secure, reliable data migration.",
    tech: [
      "C#",
      ".NET",
      "Entity Framework 6",
      "Azure SQL",
      "JavaScript",
      "Bootstrap",
    ],
    position: 1600,
    date: "Jun 2024 - Aug 2024",
  },
  {
    id: 5,
    title: "Campus Hunt",
    description:
      "Startup version of TigerSpot for all universities. A React-based web application using Node.js, PostgreSQL, Cloudinary, and Google Cloud Services/APIs. Features include campus landmark identification, interactive maps, and user authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "Cloudinary", "Google Cloud"],
    position: 2000,
    date: "Sep 2024 - Jan 2025",
  },
  {
    id: 6,
    title: "WIT Sports SWE Intern",
    description:
      "Built a fraud detection pipeline to uncover unauthorized posts of prize activations (e.g., car giveaways), preventing inflated contest entries and bot abuse. Used Google Search API and Playwright/BeautifulSoup to scan for unapproved domains sharing activation links, filtering out known safe sites. Deployed a headless crawler with Slack alerts and GitHub Actions scheduling for 30-minute scans, expanding fraud monitoring from 1 known site to 50+.",
    tech: [
      "Python",
      "Google Search API",
      "Playwright",
      "BeautifulSoup",
      "GitHub Actions",
      "Slack API",
    ],
    position: 2400,
    date: "May 2025 - Aug 2025",
  },
  {
    id: 7,
    title: "Software Engineer - EVAL",
    description:
      "Implemented a real-time tournament leaderboard in Next.js using Convex, enabling seamless insertion and removal of player rankings with automatic client synchronization. Designed and deployed a Convex-backed datastore to manage leaderboard state, leveraging schema-less configuration, reactive queries, and simplified data fetching compared to traditional PostgreSQL + Prisma workflows. Integrated Convex with Clerk authentication and explored data reconciliation strategies for external player data, establishing a foundation for future RAG-based search and AI-driven features.",
    tech: ["Next.js", "Convex", "Clerk Authentication", "TypeScript"],
    position: 2800,
    date: "Aug 2025 - Nov 2025",
  },
  {
    id: 8,
    title: "recipefy",
    description:
      "Built an AR-ready food detection and cooking assistant that identifies ingredients from live camera feeds and maps them to cuisines, personalized recipe recommendations, and step-by-step guided cooking instructions. Engineered a real-time computer vision + LLM pipeline using YOLO for ingredient detection and Google Gemini for structured recipe/cuisine generation, with an OpenCV overlay UI that displays bounding boxes, ingredient lists, and suggested next steps. Optimized for an engaging, app-based learning experience by adding motion-based scanning, stability locking to reduce redundant API calls, and asynchronous processing to keep the interface responsive while enabling progress tracking and gamified cooking challenges.",
    tech: ["YOLO", "Google Gemini", "OpenCV", "Computer Vision", "LLM"],
    position: 3200,
    date: "Jan 2026 - Jun 2026",
  },
  {
    id: 9,
    title: "Throughline",
    description:
      "Developed Throughline, a full-stack AI-powered journaling platform using Next.js, FastAPI, and PostgreSQL, delivering real-time text analysis and secure OAuth-based authentication in a production-ready, containerized environment. Built an end-to-end NLP analytics pipeline leveraging Sentence Transformers for embeddings, agglomerative clustering with cosine similarity for pattern detection, and LLM-based labeling to generate interpretable weekly insights from unstructured text data. Applied data-driven optimization techniques (similarity thresholds, cohesion scoring, entry sampling limits) to improve analytical accuracy and system performance, demonstrating strengths in data modeling, machine learning application, and scalable system design relevant to technical, data, and analyst roles.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Sentence Transformers", "NLP"],
    position: 3600,
    date: "Jan 2026 - Present",
  },
  {
    id: 10,
    title: "Fourth Age - Forward Deployed Engineer",
    description:
      "Designed a take-home technical assessment (a coffee-shop review app) with a 1-week build window, used monthly to evaluate 5+ candidates' Palantir Foundry skills across ontology design and data pipelines. Performed ontology design and data cleaning/transforms linking 16 datasets, and built custom dashboards on the Palantir Foundry platform. Supported asset management workflows for energy-sector clients, building Foundry-based data and reporting tooling.",
    tech: ["Palantir Foundry", "Ontology Design", "Data Pipelines", "Dashboards"],
    position: 4000,
    date: "Jun 2026 - Present",
  },
  {
    id: 11,
    title: "World Cup 2026 Bayesian Prediction Pipeline",
    description:
      "Built a hierarchical Bayesian Poisson goal-scoring model (NumPyro/NUTS) over 964 historical World Cup matches to simulate the live 2026 knockout bracket with posterior uncertainty across 40,000 tournament simulations. Engineered a reproducible data pipeline (SQL-ready Parquet schemas) integrating historical results, live Elo ratings, and Kalshi prediction-market prices, validated against an Elo baseline on held-out 2018/2022 tournaments. Built a market-pricing and trading strategy layer that blends model probabilities with de-vigged market prices (Kelly sizing, fee-adjusted edge thresholds) with a React dashboard for live scanning and position tracking.",
    tech: ["Python", "NumPyro", "Bayesian Statistics", "SQL", "Parquet", "React"],
    position: 4400,
    date: "Jul 2026 - Aug 2026",
  },
];

const MOVE_SPEED = 200; // pixels per second
const GROUND_LEVEL = window.innerHeight - 210;
// The player sprite stays pinned at this fixed screen x; the world scrolls
// underneath it instead of the player visually racing across the screen.
const PLAYER_SCREEN_X = Math.min(220, window.innerWidth * 0.18);
const LAST_PROJECT_POSITION = Math.max(...projects.map((p) => p.position));
const WORLD_BOUNDS = {
  left: 50,
  // Let the camera scroll far enough that the last platform reaches the
  // player's fixed screen position, plus a little room to walk past it.
  right: LAST_PROJECT_POSITION - PLAYER_SCREEN_X + 50 + 200,
};
// Background/world-content need to span at least one full viewport beyond
// the furthest the camera will ever scroll, or scenery runs out early.
const WORLD_PADDING = window.innerWidth + 300;
const WORLD_WIDTH = LAST_PROJECT_POSITION + WORLD_PADDING;

function Projects() {
  const navigate = useNavigate();
  const [playerX, setPlayerX] = useState(50);
  const [activeProject, setActiveProject] = useState(null);
  const [facingRight, setFacingRight] = useState(true);
  const gameRef = useRef(null);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const keysPressed = useRef({});
  const playerXRef = useRef(50);

  // Distance traveled from the start of the world. The ground/platforms the
  // player stands on scroll at this exact rate (1:1) so they never drift out
  // of sync with the player; background/skyline scroll slower for parallax.
  const cameraOffset = playerX - WORLD_BOUNDS.left;
  const backgroundPosition = -cameraOffset * 0.3;
  const skylinePosition = -cameraOffset * 0.55;
  const middlegroundPosition = -cameraOffset;

  const updateGameState = useCallback((timestamp) => {
    if (previousTimeRef.current !== undefined) {
      // Clamp delta so a tab coming back from the background doesn't
      // teleport the player forward in one giant catch-up step.
      const deltaSeconds = Math.min(
        (timestamp - previousTimeRef.current) / 1000,
        0.05
      );
      const distance = MOVE_SPEED * deltaSeconds;

      let nextX = playerXRef.current;
      if (keysPressed.current["a"]) {
        nextX = Math.max(WORLD_BOUNDS.left, nextX - distance);
        setFacingRight(false);
      }
      if (keysPressed.current["d"]) {
        nextX = Math.min(WORLD_BOUNDS.right, nextX + distance);
        setFacingRight(true);
      }

      if (nextX !== playerXRef.current) {
        playerXRef.current = nextX;
        setPlayerX(nextX);
      }

      const screenCameraOffset = playerXRef.current - WORLD_BOUNDS.left;
      const nearbyProject = projects.find((project) => {
        const projectScreenX = project.position - screenCameraOffset;
        return Math.abs(projectScreenX - PLAYER_SCREEN_X) < 40;
      });
      setActiveProject((prev) =>
        prev === nearbyProject ? prev : nearbyProject || null
      );
    }
    previousTimeRef.current = timestamp;
    requestRef.current = requestAnimationFrame(updateGameState);
  }, []);

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
          style={{
            width: `${WORLD_WIDTH}px`,
            transform: `translateX(${backgroundPosition}px)`,
          }}
        />
        <div
          className="skyline-layer"
          style={{
            width: `${WORLD_WIDTH}px`,
            transform: `translateX(${skylinePosition}px)`,
          }}
        />
        <div
          className="world-content"
          style={{
            width: `${WORLD_WIDTH}px`,
            transform: `translateX(${middlegroundPosition}px)`,
          }}
        >
          <div className="timeline"></div>
          {projects.map((project) => (
            <div
              key={project.id}
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
            left: `${PLAYER_SCREEN_X}px`,
            top: `${GROUND_LEVEL}px`,
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
