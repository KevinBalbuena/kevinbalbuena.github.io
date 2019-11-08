import React, { Component } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <article className="about-me">
        <h1 className="about-me-header">About Me</h1>
        <div className="center-paragraph">
          <p className="about-me-paragraph">
            Recently, I enrolled into a Full Stack Web Development course at
            DevMountain. While there, I spent time with a small virtual team
            working to build web applications. This involved learning back-end
            technologies like NodeJs, Express, and PostgreSQL, and front-end
            tech which included ReactJs, JavaScript, and Redux. After
            discovering my passion for web development, I couldn’t get enough. I
            am currently seeking a role in web development. Let's get in
            contact!
          </p>
        </div>
        <h1 className="about-me-header">Skills</h1>
        <div className="grid-logo">
          <div className="zone">
            <i className="red fab fa-git-alt"></i>
            <h2 className="skill-name">Git</h2>
          </div>
          <div className="zone">
            <i className="white fab fa-github-alt"></i>
            <h2 className="skill-name">Github</h2>
          </div>
          <div className="zone">
            <i className="blue fab fa-css3-alt"></i>
            <h2 className="skill-name">CSS3</h2>
          </div>
          <div className="zone">
            <i className="orange fab fa-html5"></i>
            <h2 className="skill-name">HTML5</h2>
          </div>
          <div className="zone">
            <i className="yellow fab fa-js-square"></i>
            <h2 className="skill-name">JavaScript</h2>
          </div>
          <div className="zone">
            <i className="green fab fa-node-js"></i>
            <h2 className="skill-name">NodeJs</h2>
          </div>
          <div className="zone">
            <i className="baby-blue fab fa-react"></i>
            <h2 className="skill-name">ReactJs</h2>
          </div>
          <div className="zone">
            <img
              className="img-skill"
              src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
              alt=""
            />
            <h2 className="skill-name">PostgreSQL</h2>
          </div>
          <div className="zone">
            <img
              className="img-skill"
              src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
              alt=""
            />
            <h2 className="skill-name">Redux</h2>
          </div>
        </div>
      </article>
    );
  }
}
export default AboutMe;
