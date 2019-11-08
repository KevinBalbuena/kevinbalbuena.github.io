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
              <a className="link-tag" href="https://github.com/KevinBalbuena">
                <i className="white fab fa-github"></i>
              </a>
              <i className="white fab fa-linkedin"></i>
            </span>
          </h1>
        </div>
      </main>
    );
  }
}
export default Main;
