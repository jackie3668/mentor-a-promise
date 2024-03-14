import React from 'react'
import './HomeCTAGeneral.css'
import { Link } from 'react-router-dom'

const HomeCTAGeneral = () => {
  return (
    <div className='home-cta-general'>
      <h3 className='h3-bold'>Be a Change-Maker</h3>
      <h6>Whether you're interested in volunteering, exploring partnership opportunities, or have general inquiries, we're here to help! Simply reach out to us using the contact form, and we will be in touch.</h6>
      <button className="yellow-square-button" onClick={() => window.scrollTo(0, 0)}><Link to='/get-involved'>Join Us</Link></button>
    </div>
  )
}

export default HomeCTAGeneral