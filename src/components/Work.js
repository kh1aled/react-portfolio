import React from 'react';
import './workCardStyles.scss'
import  WorkCard from './workCard';
import projectCardData from './WorkCardData'
const Work = () => {
  return (
    <div className='work-container'>
    <h1 className='project-heading'>projects</h1>
    <div className='project-container'>
        {projectCardData.map((val,ind) => {
            return(
                <WorkCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            />
            )
        })}
    </div>
    </div>
  )
}

export default  Work


