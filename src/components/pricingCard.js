import { Link } from 'react-router-dom';
import './pricingCardStyles.css';
import React from 'react'

function PricingCard() {
  return (
    <div className='pricing'>
        <div className='card-container'>
        <div className='card'>
        <h3>-basic-</h3>
        <span className='bar'></span>
        <p className='btc'> $ 100</p>
        <p>- 3days -</p>
        <p>- 3pages -</p>
        <p>- featured -</p>
        <p>- responsive design -</p>
        <Link to="/contact" className='btn'>
            purchase now 
        </Link>
    </div>
    <div className='card'>
        <h3>-premium-</h3>
        <span className='bar'></span>
        <p className='btc'> $ 200</p>
        <p>- 2days -</p>
        <p>- 5pages -</p>
        <p>- featured -</p>
        <p>- responsive design -</p>
        <Link to="/contact" className='btn'>
            purchase now 
        </Link>
    </div>
    <div className='card'>
        <h3>- business -</h3>
        <span className='bar'></span>
        <p className='btc'> $ 300</p>
        <p>- 5days -</p>
        <p>- 8pages -</p>
        <p>- featured -</p>
        <p>- responsive design -</p>
        <Link to="/contact" className='btn'>
            purchase now 
        </Link>
    </div>
        </div>
   
    </div>
  )
}

export default PricingCard
