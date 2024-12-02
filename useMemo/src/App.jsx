import { useState } from 'react'


function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = slowFunction(number)
  const themeMode = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
  return (
    <>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeMode}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('Caling slow function');
  for (let i = 0; i <= 100000000; i++) { }

  return num * 2
}

export default App
