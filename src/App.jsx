import React from 'react'
import About from './components/About'
import Acards from './components/Acards'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900  text-white' >
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Acards/>
      <Footer/>
    </div>
    
  )
}

export default App