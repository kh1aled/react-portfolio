import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import HeroImg2 from '../components/HeroImg2';
import ContactContent from '../components/ContactContent'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="contact." text="lets have a chat"/>
      <ContactContent />
      <Footer />
    </div>
  )
}

export default Contact
