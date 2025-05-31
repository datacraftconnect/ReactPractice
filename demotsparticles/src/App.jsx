import React from "react";
import ParticleBackground from "./ParticleBackground";
import "./App.css";

function App() {
  return (
    <>
      <ParticleBackground />

      <div className="app-content">
        <header className="header">Header</header>
        <nav className="tabs">
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </nav>
        <main className="main-content">
          <p>Main content goes here.</p>
        </main>
        <footer className="footer">Footer</footer>
      </div>
    </>
  );
}

export default App;
