import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let [counter, setcount] = useState(14)

//   // let counter = 15
// const counterValue = ()=> {
//   console.log("click",counter);
//   counter = counter + 1
//   setcount(counter)
// }
let [counter, setcount] = useState(0)
 const counterValue = () => {
  if (counter < 20){
    setcount(counter+1)

  }
  
  }
  
  const counterremove = () => {
    if (counter > 0){
    
      setcount(counter - 1)
    }
    
    
   
  }

  return (
    <>
    <h1>react and looks  {counter}</h1>
    <h2>counter Value  {counter} </h2>
    <button onClick={counterValue}>ADD count</button>
    <button onClick={counterremove}>Remove count </button>
  
    </>
  )
}

export default App
