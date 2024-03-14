import React from 'react'
import './AboutCTAVolunteer.css'
import { Link } from 'react-router-dom'

const AboutCTAVolunteer = () => {
  return (
    <div className='about-cta-volunteer'>
      <h3 className='h3-bold'>Volunteer With Us</h3>
      <h6>If you want to be a Mentor and share our passion about making a difference in the lives of our students, then please join us today. </h6>
      <button className="yellow-square-button" onClick={() => window.scrollTo(0, 0)}><Link to='/get-involved'>Join Us</Link></button>
    </div>
  )
}

export default AboutCTAVolunteer