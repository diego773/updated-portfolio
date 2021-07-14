import React from "react";
import "./style.css";


function Projects() {

  return (
    <div className="section">
      <h1
        className="projects">
        Projects
      </h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Pinder
              </h5>
              <p className="card-text">
                My last school project. This let's users become friends by signing up with their pets information, so the pets can have a playdate or a nice walk in the city or town.
              </p>
              <a
                style={{display: "table-cell"}}
                href="https://github.com/JXIong15/Pinder"
                target="_blank"
                className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                nanny now
              </h5>
              <p className="card-text">
                My second project. This let's parents and nanny's/manny's sign up. Parent's can choose their nanny's/manny's thru this app. It's the uber for nanny's/manny's.
              </p>
              <a
                style={{display: "table-cell"}}
                href="https://github.com/cdfishe1/nanny-now"
                target="_blank"
                className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      (" ")
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                moodue
              </h5>
              <p className="card-text">
                Let's users see events based on their mood.
              </p>
              <a
                style={{display: "table-cell"}}
                href="https://github.com/tmallz/moodue"
                target="_blank"
                className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Google book search
              </h5>
              <p className="card-text">
                With google book search you can search and save books on your book list and go back and see your list.
              </p>
              <a
                style={{display: "table-cell"}}
                href="https://github.com/diego773/google-book-search"
                target="_blank"
                className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      (" ")
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Employee directory
              </h5>
              <p className="card-text">
                Let's users who have access to the directory to search by name or last name of their employees.
              </p>
              <a
                style={{display: "table-cell"}}
                href="https://github.com/diego773/employee-directory"
                target="_blank"
                className="btn btn-primary">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Progressive budget
              </h5>
              <p className="card-text">
                Allows users to track their spending when or when they are not online.
              </p>
              <a
                style={{display: "table-cell"}}
                href="https://github.com/diego773/budget-tracker"
                target="_blank"
                className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Projects;






