import React from 'react'
import DesignerProfile from './components/AboutMe'
import Navbar from './components/Navbar'
import RecentWork from './components/RecentWork'
import SocialLinks from './components/SocialLinks'
import AIProductCard from './components/AIProductCard'
import Developer from './components/Developer'

const App = () => {
  return (
    
<div className="grid grid-cols-10 grid-rows-23 gap-2 md:w-3/5 m-auto">
    <div className="col-span-10 "><Navbar/></div> 
    {/* // navbar */}
    <div className="col-span-10 row-span-5 row-start-2"><DesignerProfile/></div> 
    {/* // profile */}
    <div className="col-span-5 row-span-4 row-start-7"><RecentWork/></div>  
    {/* //recent work experience */}
    <div className="col-span-5 row-span-2 col-start-6 row-start-7"><Developer/></div>  
    {/* // social links */}
    <div className="col-span-3 row-span-2 col-start-6 row-start-9"><Developer/></div>  
    {/* //coding links */}
    <div className="col-span-10 row-span-2 row-start-11">Tech stack scroll</div>
     {/*Techstack scroll  */}
    <div className="col-span-6 row-span-7 row-start-13"><Developer/></div>
     {/* //project1 */}
    <div className="col-span-4 row-span-4 col-start-7 row-start-13"><Developer/></div>
     {/* //project2 */}
    <div className="col-span-4 row-span-3 col-start-7 row-start-17"><Developer/></div> 
    {/* //project3 */}
    <div className="col-span-6 row-span-3 row-start-20"><Developer/></div> 
    {/* // Achievements */}
    <div className="col-span-4 row-span-2 col-start-7 row-start-20"><Developer/></div> 
    {/* //colors-shift -change */}
    <div className="col-span-4 col-start-7 row-start-22"><Developer/></div>  
    {/* //blog */}
    <div className="col-span-10 row-start-23"><Navbar/></div> 
      {/* // Footer */}
</div>
    
  )
}

export default App