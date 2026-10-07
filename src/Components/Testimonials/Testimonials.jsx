import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div>
       {/* <!-- TESTIMONY --> */}
      <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2>What our students Says</h2>
        <div className="testimonials-container">
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Modester Onyema</h3>
            <p>
              This academy Completely Changed my career. i leant web development
              from the scratch to finish and got my first job
            </p>
          </div>
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Faith Adigun</h3>
            <p>
              After i learnt web design here i got a good paying foreign Job
            </p>{" "}
          </div>
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Micheal Chieki</h3>
            <p>
              After learning my programme here i had the oppotunity to meet with
              the president of the united state
            </p>{" "}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Testimonials
