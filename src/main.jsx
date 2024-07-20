import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Achievements from './Pages/Achievements.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/achievements" element={<Achievements />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
