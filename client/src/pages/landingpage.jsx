import React from 'react'
import Navbar from '../components/nav'
import Hero from '../components/hero'
import './landingpage.css' 
import About from '../components/about'
import WhySection from '../components/why-section'
const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    <WhySection/>
    </>
    
  )
}

export default LandingPage