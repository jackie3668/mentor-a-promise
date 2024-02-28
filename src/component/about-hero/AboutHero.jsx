import React from 'react'
import './AboutHero.css'

const AboutHero = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }
  return (
    <div className='about-hero'>
      <div>
        <h2 className='h2-extra-bold'>BRIGHT FUTURE STARTS HERE</h2>
        <h2>Mentor A Promise</h2>
        <p>We are a nonprofit organization helping NYC youths and families break the cycle of homelessness by illuminating paths to education and success.</p>
      </div>
      <button className='yellow-square-button' onClick={handleClick}>Learn More</button>
    </div>
  )
}

export default AboutHero