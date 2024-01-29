export default function UserInput({ userInputs, setUserInputs }) {
  function handleInputChange(event) {
    setUserInputs((prev) => ({
      ...prev,
      [event.target.name]: Number(event.target.value),
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInputs.initialInvestment}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInputs.annualInvestment}
            onChange={handleInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInputs.expectedReturn}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={userInputs.duration}
            onChange={handleInputChange}
          />
        </p>
      </div>
    </section>
  );
}
