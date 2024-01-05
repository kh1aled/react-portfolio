import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/aboutContent';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="about" text="im a frindly front-end develper."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
