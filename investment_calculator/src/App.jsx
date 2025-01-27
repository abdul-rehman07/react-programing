
import { useState } from "react";
import Header from "./assets/Components/Header"
import UserInput from "./assets/Components/UserInput"
import Result from "./assets/Components/Result";
function App() {
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    }
  );

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    })
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please Enter a Duration Grator Then ZERO </p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App;
