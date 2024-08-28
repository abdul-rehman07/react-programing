import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubinfoloader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:'',
//         element: <Home/>
//       },
//       {
//         path:'About',
//         element: <About/>
//       }
//       ,
//       {
//         path:'Contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
createRoutesFromElements(

  <Route path='/' element={<Layout/>}>
<Route path=''element={<Home/>}/>
<Route path='about'element={<About/>}/>
<Route path='contact'element={<Contact/>}/>
<Route path='User/:userid'element={<User/>}/>
<Route 
loader={githubinfoloader}
path='github'
element={<Github/>}/>
  </Route>
)
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)