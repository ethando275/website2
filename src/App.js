import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ExperienceList from "./Pages/experienceList";
import Contact from "./Pages/contact";
import "./App.css";
import Navbar from "./components/navbar";

function NavbarWrapper() {
  return <Navbar />;
}

function App() {
  return (
    <Router basename="/website2">
      <div className="App">
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experienceGame" element={<Projects />} />
          <Route path="/experiences" element={<ExperienceList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
