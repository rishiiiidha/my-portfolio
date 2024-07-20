import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
   <>
    <header>
    <Navbar/>
    </header>
   <Outlet/></>
  )
}

export default App