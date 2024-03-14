import React from 'react'
import './HomeCTAVolunteer.css'
import { Link } from 'react-router-dom'

const HomeCTAVolunteer = () => {
  return (
    <div className='home-cta-volunteer'>
      <h3 className='h3-bold'>Your Skills and Passion Can Make a Difference</h3>
      <h6>Volunteer With Us Today and Help Us Create a Better Tomorrow.</h6>
      <button className="yellow-square-button" onClick={() => window.scrollTo(0, 0)}><Link to='/get-involved'>Join Us</Link></button>
    </div>
  )
}

export default HomeCTAVolunteer