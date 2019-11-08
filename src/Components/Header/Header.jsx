import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="main-nav">
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    );
  }
}
export default Header;
