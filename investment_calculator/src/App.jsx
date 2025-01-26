
import { useState } from "react";
import Header from "./assets/Components/Header"
import UserInput from "./assets/Components/UserInput"
import Result from "./assets/Components/Result";
function App() {
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedRetrun: 6,
      duration: 10,
    }
  );

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
      <Result input={userInput} />
    </>
  )
}

export default App;
