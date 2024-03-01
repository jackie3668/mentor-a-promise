import React from 'react'
import './PromiseContent.css'
import image from '../../asset/promise-path/image 4.png'

const PromiseContent = () => {
  return (
    <div className='promise-content'>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className="h3-bold">Promise Path Coming Soon</h3>
        <p>We are excited to announce that our app Promise Path will be launching soon, offering families a convenient platform to browse and explore our wide range of programs. With just a few clicks, you'll be able to discover programs tailored to your needs, bookmark and enroll in the programs of your choice, connect with tutors, and more.</p>
      </div>
    </div>
  )
}

export default PromiseContent