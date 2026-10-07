import React from "react";
import "./About.css";
import myself from "../assets/myself.jpg";


 
const Aboutus = () => {
  return (
    <div>
    
      {/* ABOUT SECTION */}
      
      <section className="about">
        <div className="about-text">
          <h3>Meet The Owner</h3>
          <p>
           We are an online learning platform committed to empowering individuals with practical and
            industry-relevant full-stack development skills. Through comprehensive lessons,
             hands-on projects, and expert guidance, we help students build a strong foundation in modern web technologies. 
             Our goal is to make quality tech education accessible to everyone, equipping learners with the confidence, 
             creativity, and technical expertise needed to build innovative digital solutions and pursue successful careers in technology.
          </p>
          <button>Know More</button>
        </div>
        <div className="img">
          <img src={myself} alt="Portrait of the owner" />
        </div>
      </section>
    </div>
  );
};

export default Aboutus;