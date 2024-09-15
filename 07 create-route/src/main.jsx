import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/About/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:
      [
        {
          path:"",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"user/:id",
          element:<User/>
        },
        {
          path:"github",
          element:<Github/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
