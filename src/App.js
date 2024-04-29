import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>This project was coded by {""}
          <a href="https://github.com/lorenaparreno" target="_blank" className="custom-link">Lorena Parreno</a>{""} and is open-sourced on {""}
          <a href="https://github.com/lorenaparreno/react-weather-app" target="_blank" className="custom-link">GitHub</a>
        </footer>
      </div>
    </div>
  );
}


