import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Post } from './Post'
import Home from './Home'


const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post",
        element: <Post />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
