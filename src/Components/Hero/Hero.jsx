import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom';

function Hero() {
  return (
    <div>
      
       {/* <!-- HERO SECTION --> */}
       <div className="hero-section">
        <div className="overlay">
          <div className="text">
            <h1>Welcome to my Web page</h1>
            <p>
              learn fullstack development, UI/UX, Graphics Design and so on
              <div>
               <Link to="/login"> <button>Get Started</button></Link>
              </div>
            </p>
          </div>
        </div> 
    </div>
    </div>
  )
}

export default Hero
