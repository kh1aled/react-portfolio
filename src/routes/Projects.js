import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/pricingCard';
import Work from '../components/Work';
const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="projects." text="some of my most recent works"/>
      < Work/>
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Projects
