import "./index.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import ResultTable from "./components/ResultTable";

const INITIAL_INPUTS_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInputs, setUserInputs] = useState(INITIAL_INPUTS_VALUES);

  const inputIsValid = userInputs.duration >= 1;

  function handleInputChange(event) {
    setUserInputs((prev) => ({
      ...prev,
      [event.target.name]: Number(event.target.value),
    }));
  }

  return (
    <>
      <Header />
      <UserInput
        userInputs={userInputs}
        handleInputChange={handleInputChange}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultTable userInputs={userInputs} />}
    </>
  );
}

export default App;
