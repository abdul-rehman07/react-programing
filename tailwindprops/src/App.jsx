import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let myobj = {
  user  :'hunny',
  age:20
}
let newarr=[1,2,3]
  return (
    <>
    <h1 className='bg-green-400 rounded-xl text-black p-4 mb-4'>hello TailWind</h1>

<Card username = "hunnyaurcoding"  btntext="click me" />
<Card username = "hunnywithprograming"   />
    </>
  )
}

export default App
