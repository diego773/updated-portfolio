import React from "react";
import "./style.css";
import diego from "../../images/diego.jpg";

function About() {
  return (
    <div className="section">
      <div className="grid-container">
        <h1 className="about">About Me!</h1>
        <p className="about-me">
          My name is Diego Villarreal. I'm a Full Stack Web Developer graduate
          from Northwestern University Coding Bootcamp in Evanston, IL. I have
          front-end experience with HTML, CSS, JavaScript and React.js. I also
          have back-end experience in Node.js, MoongoDB.
        </p>
        <div className="section">
          <img
            src={diego}
            className="diego"
            alt="men with glasses and full beard wearing blue sweater"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
