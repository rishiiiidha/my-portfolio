import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import GetInTouch from './components/GetInTouch'
const App = () => {
  return (
   <>
    <header>
    <Navbar/>
    </header>
   <Outlet/>
   <GetInTouch />
   </>
   
  )
}

export default App