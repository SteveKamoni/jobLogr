import React from 'react'
import Navbar from '../components/nav'
import Hero from '../components/hero'
import './landingpage.css' 
import About from '../components/about'
const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    </>
    
  )
}

export default LandingPage