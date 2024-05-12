import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="mt-2"> This project was coded by {""}
          <a href="https://github.com/lorenaparreno" target="_blank" className="custom-link" rel="noreferrer">Lorena Parreno</a>{""} and is open-sourced on {""}
          <a href="https://github.com/lorenaparreno/react-weather-app" target="_blank" className="custom-link" rel="noreferrer">GitHub</a>{""} and is hosted on {""}
          <a href="https://react-weather-app-homework-wk5.netlify.app/" target="_blank" className="custom-link" rel="noreferrer">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}


