import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
function NavTabs() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item links">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          <div className="home">Home</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          <div className="about_me">About Me!</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" ? "nav-link active" : "nav-link"
          }
        >
          <div className="projects">Projects</div>
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
