import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: " https://google.com",
//     target: "_blank",
//   },
//   children: "click to run the google ",
// };

const anotherElement = (
<a href="https://google.com">click to run</a>
)
const another = 'code with me'
const realreact = React.createElement(
  'a',
  {href: 'https://google.com',target :'_blank'},
'click to run first',
another
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/> 
  
)
