import React from 'react'
import './PromiseEnroll.css'
import image from '../../asset/promise-path/pexels-pixabay-356079 1 (1).png'

const PromiseEnroll = () => {
  return (
    <div className='promise-enroll'>
      <img src={image} alt="" />
      <div>
        <h3 className="h3-bold">Want to Enroll Now?</h3>
        <p>
        If you’re want to register a student and participate in our programs, register today!
        </p>
        <button className="blue-square-button">Register</button>
      </div>
    </div>
  )
}

export default PromiseEnroll