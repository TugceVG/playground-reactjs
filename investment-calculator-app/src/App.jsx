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
  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} setUserInputs={setUserInputs} />
      <ResultTable userInputs={userInputs} />
    </>
  );
}

export default App;
