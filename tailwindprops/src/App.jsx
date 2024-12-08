import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Inputfeild from './components/inputfeild'
import { countercontext } from './components/createcontext'

function App() {
  const [number, setnumber] = useState(0)
  const [displaying, setdisplay] = useState()

  const display = (e) => {
    e.preventDefault()
    setdisplay({ number })
  }


  return (
    <>
      <countercontext.Provider value={{ number, displaying, setdisplay, setnumber }}>
        <input type="text" value={number} placeholder='text' onChange={e => setnumber(e.target.value)}></input>
        <button onClick={display}>press</button>
        {/* <div>{setnumber}</div> */}

        <Inputfeild />
        <h1 className='bg-green-400 rounded-xl text-black p-4 mb-4'>hello TailWind</h1>

        <Card username="hunnyaurcoding" btntext="click me" />
        <Card username="hunnywithprograming" />
      </countercontext.Provider>
    </>
  )
}

export default App
