import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <main className="main-pic">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Kevin Balbuena</span>
            <span className="heading-primary-sub">Full Stack Developer</span>
            <span className="icon">
              <a href="https://github.com/KevinBalbuena">
                <i className="icon-white fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/kevin-balbuena/">
                <i className="icon-white fab fa-linkedin"></i>
              </a>
            </span>
          </h1>
        </div>
      </main>
    );
  }
}
export default Main;
