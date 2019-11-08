import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import AboutMe from "./Components/AboutMe/AboutMe";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <AboutMe />
      </div>
    );
  }
}
export default App;
