import './HeroImg2styles.scss';
import React from 'react';
import programing from '../assets/arpad-czapp-H424WdcQN4Y-unsplash.jpg'
function HeroImg2(props) {
  return (
    <div className='hero-img'>
        <div className='heading'>
       <img src={programing} alt='program' className='image-project'/>
        </div>
        <div className='content'>
        <h1>{props.heading}</h1>
       <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImg2
