import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <ul class="nav justify-content-center fixed-bottom">
        <li class="nav-item">
          <a
            style={{ display: "table-cell" }}
            href="https://github.com/diego773"
            target="_blank github"
            class="nav-link"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            style={{ display: "table-cell" }}
            href="https://www.linkedin.com/in/diego-villarreal-6771a4129/"
            target="_blank linkedin"
            class="nav-link"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
