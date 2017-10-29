import React, { Component } from "react";
import "./App.css";

import DashboardComponent from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DashboardComponent />
      </div>
    );
  }
}

export default App;
