import { useState } from "react";
import questions from "./Question.js";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);
  console.log({ questions });
  return (
    <div className="question-card">
      <header>
        <h3 className="title">Quiz App</h3>
        <div className="remaining-time">
          <span>Remaining Time</span>
          <span>10</span>
        </div>
      </header>
      <div className="progress-bar"></div>
      <main>
        <p>Soru1</p>
        <div className="options">
          <button className="option">a: 1</button>
          <button className="option">b: 2</button>
          <button className="option">c: 3</button>
          <button className="option">d: 4</button>
        </div>
      </main>
      <footer>
        <span>1/4</span>
      </footer>
    </div>
  );
}

export default App;
