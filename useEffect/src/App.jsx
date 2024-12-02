import { useState, useEffect } from 'react'



function App() {
  // const [resourseType, setresourseType] = useState('posts')
  // const [items, setItems] = useState([])
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))

  // }, [resourseType])
  const [windowResize, setWindowResize] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowResize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* <div>
        <button onClick={() => setresourseType('posts')}>Posts</button>
        <button onClick={() => setresourseType('users')}>Users</button>
        <button onClick={() => setresourseType('comments')}>Comments</button>
      </div>
      <h1>{resourseType}</h1>
      {items.map(item => {
        return <pre>
          {JSON.stringify(item)}
        </pre>
      }
      )} */}
      <div>{windowResize}</div>
    </>
  )
}

export default App
