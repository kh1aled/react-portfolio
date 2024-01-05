import './aboutContentStyles.css';
import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/react1.jpg';
import img2 from '../assets/react2.webp';
const AboutContent = () => {
  return (
    <div className='about-container'>
        <div className='left'>
        <h1>who am i?</h1>
    <p>im a react front-end develper. i create responsive secure website for my clients</p>
    <Link to="/Contact" className='btn'>
        contact
    </Link>
        </div>
    <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={img1} alt='img' />
            </div>
            <div className='img-stack bottom'>
                <img src={img2} alt='true' className='img'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent
