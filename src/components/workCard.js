import React from 'react';
import './workCardStyles.scss'
import {NavLink } from 'react-router-dom';
const WorkCard  = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt='img'></img>
            <h2 className='project-title'>{props.title}</h2>
            <div className='project-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to="URL.COM" className='btn'>
                    view
                    </NavLink>
                    <NavLink to="URL.COM" className='btn'>
                    source
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default  WorkCard


