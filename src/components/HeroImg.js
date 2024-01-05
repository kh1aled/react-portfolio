import './HeroImgStyles.scss';
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';
function HeroImg() {
  return (
    <div className='hero'>
        <div className='mask'>
        <img src={IntroImg} className='intro-img' alt='img'></img>
        </div>
        <div className='content'>
            <p>hi,i'm a freelancer</p>
            <h1>frontend developer.</h1>
            <div>
                <Link to="/projects" className="btn">
                projects
                </Link>
                <Link to="/Contact" className='btn btn-light'>
                Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
