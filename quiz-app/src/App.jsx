import { useState } from "react";
import questions from "./Question.js";
import "./app.css";

function App() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const activeQuestion = questions[activeQuestionIndex];

  const handleClick = (key) => {
    if (userAnswer) {
      return;
    }
    setUserAnswer(key);
    setIsNextButtonActive(true);
  };

  const getOptionClass = (key) => {
    if (userAnswer === key) {
      return userAnswer === activeQuestion.correctAnswer ? "correct" : "wrong";
    }
  };

  const handleNextQuestion = () => {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1);
      setUserAnswer("");
      setIsNextButtonActive(false);
    }
  };

  const getButtonIsDisabled = (key) => {
    if (userAnswer === "" || userAnswer === key) {
      return false;
    }

    return true;
  };

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
        <p>{activeQuestion.question}</p>
        <div className="options">
          {Object.entries(activeQuestion.options).map(([key, value]) => (
            <button
              disabled={getButtonIsDisabled(key)}
              className={"option " + getOptionClass(key)}
              onClick={() => handleClick(key)}
            >
              {key}: {value}
            </button>
          ))}
        </div>
      </main>
      <footer>
        <span>1/4</span>
        <button
          className={isNextButtonActive ? "active" : ""}
          onClick={() => handleNextQuestion()}
        >
          Next Question
        </button>
      </footer>
    </div>
  );
}

export default App;
