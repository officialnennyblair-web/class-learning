import React from 'react'
import Hero from "../Components/Hero/Hero"
import Testimonials from "../Components/Testimonials/Testimonials"
import Cta from "../Components/Cta/Cta"
import Footer from "../Components/Footer/Footer"
import AboutSection from '../Components/AboutSection'
const LandingPages = () => {
  return (
    <div>
      <Hero/>
      <AboutSection />
     <Testimonials/>
     <Cta/>
     <Footer/>  
    </div>
  )
}

export default LandingPages
