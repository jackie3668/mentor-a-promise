import React from 'react'
import './GetInvolvedVolunteer.css'
import { Link } from 'react-router-dom'
import image from '../../asset/get-involved/image 3.png'
const GetInvolvedVolunteer = () => {
  return (
    <div className='get-involved-volunteer'>
      <div className="top">
        <img src={image} alt="" />
        <div>
          <h4 className='h4-bold'>Interested in Becoming a Volunteer?</h4>
          <p>Contribute your skills and passion to make a lasting impact as an administrator or manager at Mentor a Promise. We're seeking dedicated individuals to join our permanent volunteer team and who will play a crucial role in shaping the future of our organization.
          <br/><br/>
          While our other existing volunteer opportunities focus on directly impacting the population we serve through mentorship, these openings emphasize integrating into your career roles that are focused on specific areas of growth.
          <br/><br/>
          <span>See open positions below</span>.</p>
        </div>
      </div>
      <div className="bottom">
        <h4 className='h4-bold'>Open Positions</h4>
        <ul>
          <li>Non-Profit Counselor</li>
          <li>Human Resources Manager</li>
          <li>Community Partnerships Specialist</li>
          <li>Grant Writer</li>
          <li>Administrative Assistant</li>
          <li>Non-profit Attorney</li>
          <li>Mentoring Program Coordinator</li>
          <li>Summer Youth Program Manager</li>
          <li>Social Media Manager</li>
        </ul>
        <button className="round-button"><Link to='/contact'>Contact Us</Link></button>
      </div>
    </div>
  )
}

export default GetInvolvedVolunteer