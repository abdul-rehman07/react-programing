import { useState } from 'react'


function App() {
  const [name, setName] = useState('')

  return (
    <>
      <input value={name} onClick={e => e.target.value} />
      <h3>my name is {name} </h3>
      <button>press</button>
    </>
  )
}

export default App
