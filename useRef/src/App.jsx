import React, { useState, useContext } from 'react'
import display from './display'

function App() {
  const [name, setName] = useState('')

  const displayValue = createContext()

  return (
    <displayValue.Provider value={name} >
      <input value={name} onChange={e => setName(e.target.value)} />
      <display />
    </displayValue.Provider>
  )
}

export default App
