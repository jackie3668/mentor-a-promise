import React from 'react'
import './HomeHero.css'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <div className='home-hero'>
      <div>
        <h1 className='h1-extra-bold'>MENTOR A PROMISE</h1>
        <h3>Bright future starts here</h3>
        <p>We are a nonprofit organization helping NYC youths and families break the cycle of homelessness by illuminating paths to education and success.</p>
      </div>
      <button className='yellow-square-button' onClick={() => window.scrollTo(0, 0)}><Link to='./about'>Learn More</Link></button>
    </div>
  )
}

export default HomeHero