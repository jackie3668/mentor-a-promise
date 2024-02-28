import React from 'react'
import './ProgramsHero.css'
import { Link } from 'react-router-dom'

const ProgramsHero = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className='about-hero'>
    <div>
      <h2 className='h2-extra-bold'>Mentor A Promise Programs</h2>
      <h2>In Person & Online</h2>
      <p>Learn more about how we use a hybrid tutoring mode to help bring more accessible educational resources to NYC youths.</p>
    </div>
    <button className='yellow-square-button' onClick={handleClick}>Learn More</button>
  </div>
  )
}

export default ProgramsHero