import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Header from './components/Header.jsx'
import Rag from './pages/Rag.jsx'
import LangConverter from './pages/LangConv.jsx'
import PageNotFound_404 from './pages/PageNotFound404.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Header />,
    children: [
      {
        path:"chatbot",
        element: <App />,
      },
      {
        path:"rag",
        element: <Rag />,
      },
      {
        path:"langConverter",
        element: <LangConverter />,
      },
    ]
  },
  {
    path:"*",
    element:<PageNotFound_404 />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
  <StrictMode>
    <App />
  </StrictMode>,
)
