import React from "react";
import { useNavigate } from "react-router-dom";
import "./experienceList.css";

const workExperience = [
  {
    id: 1,
    title: "Fourth Age - Forward Deployed Engineer",
    description:
      "Designed a take-home technical assessment (a coffee-shop review app) with a 1-week build window, used monthly to evaluate 5+ candidates' Palantir Foundry skills across ontology design and data pipelines. Performed ontology design and data cleaning/transforms linking 16 datasets, and built custom dashboards on the Palantir Foundry platform. Supported asset management workflows for energy-sector clients, building Foundry-based data and reporting tooling.",
    tech: ["Palantir Foundry", "Ontology Design", "Data Pipelines", "Dashboards"],
    date: "Jun 2026 - Present",
  },
  {
    id: 2,
    title: "Software Engineer - EVAL",
    description:
      "Implemented a real-time tournament leaderboard in Next.js using Convex, enabling seamless insertion and removal of player rankings with automatic client synchronization. Designed and deployed a Convex-backed datastore to manage leaderboard state, leveraging schema-less configuration, reactive queries, and simplified data fetching compared to traditional PostgreSQL + Prisma workflows. Integrated Convex with Clerk authentication and explored data reconciliation strategies for external player data, establishing a foundation for future RAG-based search and AI-driven features.",
    tech: ["Next.js", "Convex", "Clerk Authentication", "TypeScript"],
    date: "Aug 2025 - Nov 2025",
  },
  {
    id: 3,
    title: "WIT Sports - SWE Intern",
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
    date: "May 2025 - Aug 2025",
  },
  {
    id: 4,
    title: "NashTech - SWE Intern",
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
    date: "Jun 2024 - Aug 2024",
  },
];

const projects = [
  {
    id: 5,
    title: "World Cup 2026 Bayesian Prediction Pipeline",
    description:
      "Built a hierarchical Bayesian Poisson goal-scoring model (NumPyro/NUTS) over 964 historical World Cup matches to simulate the live 2026 knockout bracket with posterior uncertainty across 40,000 tournament simulations. Engineered a reproducible data pipeline (SQL-ready Parquet schemas) integrating historical results, live Elo ratings, and Kalshi prediction-market prices, validated against an Elo baseline on held-out 2018/2022 tournaments. Built a market-pricing and trading strategy layer that blends model probabilities with de-vigged market prices (Kelly sizing, fee-adjusted edge thresholds) with a React dashboard for live scanning and position tracking.",
    tech: ["Python", "NumPyro", "Bayesian Statistics", "SQL", "Parquet", "React"],
    date: "Jul 2026 - Aug 2026",
  },
  {
    id: 11,
    title: "Throughline",
    description:
      "Developed Throughline, a full-stack AI-powered journaling platform using Next.js, FastAPI, and PostgreSQL, delivering real-time text analysis and secure OAuth-based authentication in a production-ready, containerized environment. Built an end-to-end NLP analytics pipeline leveraging Sentence Transformers for embeddings, agglomerative clustering with cosine similarity for pattern detection, and LLM-based labeling to generate interpretable weekly insights from unstructured text data.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Sentence Transformers", "NLP"],
    date: "Jan 2026 - Present",
  },
  {
    id: 6,
    title: "recipefy",
    description:
      "Built an AR-ready food detection and cooking assistant that identifies ingredients from live camera feeds and maps them to cuisines, personalized recipe recommendations, and step-by-step guided cooking instructions. Engineered a real-time computer vision + LLM pipeline using YOLO for ingredient detection and Google Gemini for structured recipe/cuisine generation.",
    tech: ["YOLO", "Google Gemini", "OpenCV", "Computer Vision", "LLM"],
    date: "Jan 2026 - Jun 2026",
  },
  {
    id: 7,
    title: "Campus Hunt",
    description:
      "Startup version of TigerSpot for all universities. A React-based web application using Node.js, PostgreSQL, Cloudinary, and Google Cloud Services/APIs. Features include campus landmark identification, interactive maps, and user authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "Cloudinary", "Google Cloud"],
    date: "Sep 2024 - Jan 2025",
  },
  {
    id: 8,
    title: "TigerSpot",
    description:
      "Web application for Princeton University enabling users to identify and pin campus landmarks on an interactive map. Includes a player vs player mode where students can compete against each other. Features include CAS authentication, dynamic scoring system, and leaderboard functionality.",
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
    id: 9,
    title: "Personal Website",
    description:
      "Interactive portfolio website featuring retro game aesthetics, pixel art character, and dynamic project timeline. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "CSS", "React Router", "HTML5"],
    date: "Jan 2024 - Current",
  },
  {
    id: 10,
    title: "Platformer Game",
    description:
      "Unity-based platformer video game with custom character designs, animation frames, and environment artwork created from scratch in Adobe Photoshop.",
    tech: ["Unity", "C#", "Adobe Photoshop"],
    date: "Sep 2021 - Jan 2022",
  },
];

function ExperienceCard({ item }) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h2>{item.title}</h2>
        <span className="date">{item.date}</span>
      </div>
      <p className="description">{item.description}</p>
      <div className="tech-stack">
        {item.tech.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceList() {
  const navigate = useNavigate();

  return (
    <>
      <div className="experience-container">
        <button
          className="view-toggle"
          onClick={() => navigate("/experienceGame")}
        >
          Switch to Game View
        </button>

        <div className="experience-section">
          <h2 className="section-title">work experience</h2>
          <div className="experience-list">
            {workExperience.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-title">projects</h2>
          <div className="experience-list">
            {projects.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceList;
