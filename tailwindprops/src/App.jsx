import { useState } from 'react'
import './App.css'
import Inputfeild from './components/inputfeild'
import { countercontext } from './components/createcontext'
import Inputtext from './components/inputtext'

function App() {
  const [displaying, setdisplay] = useState()


  return (
    <>
      <countercontext.Provider value={{ displaying, setdisplay, }}>
        <Inputtext />
        <Inputfeild />
      </countercontext.Provider>
    </>
  )
}

export default App
