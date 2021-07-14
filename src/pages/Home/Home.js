import React from "react";
import "./style.css";
import diego from "../../images/diego.jpg"

function Home() {
  return (
      <div className="header">
        <div className="grid-container">
         <h1 className="name">Hi, my name is Diego</h1>
          <p className="description">
            I'm a Full Stack Web Developer from Chicago, IL.
          </p>
            <div className="section">
              <img
                src={diego}
                className="diego"
              />
        </div>
        
        </div>
      </div>
  );
}


export default Home;


