import React from 'react';
// import { useNavigate } from 'react-router-dom'; // 👈 Add this if you want navigation from buttons or links
import Navbar from '../components/nav';
import Hero from '../components/hero';
import './landingpage.css';
import About from '../components/about';
import WhySection from '../components/why-section';
import Features from '../components/features';
import Footer from '../components/footer';
import Contact from '../components/contact';

const LandingPage = () => {
  // const navigate = useNavigate(); // 👈 Used if you need to redirect (e.g., to /dashboard)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhySection />
      <Features />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
