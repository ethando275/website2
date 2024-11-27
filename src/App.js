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
  const location = useLocation();
  const showNavbar = [
    "/about",
    "/projects",
    "/experiences",
    "/experienceGame",
    "/contact",
  ].includes(location.pathname);

  return showNavbar ? <Navbar /> : null;
}

function App() {
  return (
    <Router basename="/website2">
      <div className="App">
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experienceGame" element={<Projects />} />
          <Route path="/experiences" element={<ExperienceList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
