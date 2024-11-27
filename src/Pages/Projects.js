import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../components/navbar";
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
    title: "Personal Website",
    description:
      "Interactive portfolio website featuring retro game aesthetics, pixel art character, and dynamic project timeline. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "CSS", "React Router", "HTML5"],
    position: 800,
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
    position: 1200,
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
];

const MOVE_SPEED = 3;
const GROUND_LEVEL = window.innerHeight - 230;
const WORLD_BOUNDS = {
  left: 0,
  right: Math.max(...projects.map((p) => p.position)) + 200,
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
