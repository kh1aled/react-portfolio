/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import './navbarStyles.scss';
import React, { useState } from 'react';
import { FaBars , FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const [click , setClick] = useState(false);
    const [color,setColor] = useState(false)
    const changeColor = ()=>{
        if(window.scrollY >= 100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor)
    const handleClick = () => {
        setClick(!click)
    }
return(
    <div className={color?"Header Header-bg":"Header"}>
        <Link className='logo' to="/">
        <h1>portfolio</h1>
        </Link>
        <ul className={click? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">
                Home
                </Link>
            </li>
            <li>
                <Link to="/Projects">
                Project
                </Link>
            </li>
            <li>
                <Link to="/About">
                About
                </Link>
            </li>
            <li>
                <Link to="/Contact">
                Contact
                </Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click?(<FaTimes size={25} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  )
}
export default Navbar
