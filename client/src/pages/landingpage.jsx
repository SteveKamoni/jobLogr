import React from 'react'
import Navbar from '../components/nav'
import Hero from '../components/hero'
import './landingpage.css' 
import About from '../components/about'
import WhySection from '../components/why-section'
import Features from '../components/features'
import Footer from '../components/footer'
import Contact from '../components/contact'
const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    <WhySection/>
    <Features/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default LandingPage