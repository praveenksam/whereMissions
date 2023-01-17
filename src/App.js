import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Here shall start a Missions App based on</p>
          <a
            className="App-link"
            href="https://api.joshuaproject.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Joshua Project API
          </a>
        </header>
      </div>
    );
  }
}

export default App;
