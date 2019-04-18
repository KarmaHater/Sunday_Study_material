import React, { Component } from "react";
import "./App.css";
import { Cards } from "./components/cards/index";
import { LETTERS } from "./constants/cards";
import Levels from "./components/level/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Levels levels={6} />
          <Cards letters={LETTERS} />
        </header>
      </div>
    );
  }
}

export default App;
