import React from 'react'
import './GetInvoledCTA.css'
import { Link } from 'react-router-dom'

const GetInvoledCTA = () => {
  return (
    <div className='get-involved-cta'>
      <h3 className='h3-bold'>Partner With Us</h3>
      <h6>If your organization shares our commitment to educational equity, reach out to explore potential collaborations. .</h6>
      <button className="yellow-square-button" onClick={() => window.scrollTo(0, 0)}><Link to='/contact'>Contact Us</Link></button>
    </div>
  )
}

export default GetInvoledCTA