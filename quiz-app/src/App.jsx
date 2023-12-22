import { useState } from "react";
import questions from "./Question.js";
import SummaryCard from "./SummaryCard.jsx";
import "./app.css";

// let correctAnswerCount = 0;

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
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
      if (userAnswer === activeQuestion.correctAnswer) {
        return "correct";
      }
      return "wrong";
    }
  };

  const handleNextQuestion = () => {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1);
      setUserAnswer("");
      setIsNextButtonActive(false);
    } else {
      setIsQuizFinished(true);
    }
    if (userAnswer === activeQuestion.correctAnswer) {
      setCorrectAnswerCount((prev) => prev + 1);
    }
  };

  const getButtonIsDisabled = (key) => {
    if (userAnswer === "" || userAnswer === key) {
      return false;
    }

    return true;
  };

  if (!isQuizStarted) {
    return (
      <button className="start-btn" onClick={() => setIsQuizStarted(true)}>
        Start Quiz
      </button>
    );
  }

  if (isQuizFinished) {
    return (
      <SummaryCard
        questions={questions}
        correctAnswerCount={correctAnswerCount}
      />
    );
  }

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
