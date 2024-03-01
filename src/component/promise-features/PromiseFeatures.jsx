import React from 'react'
import './PromiseFeatures.css'
import image1 from '../../asset/promise-path/browsing (1).png'
import image2 from '../../asset/promise-path/online-education (1).png'
import image3 from '../../asset/promise-path/chat (1).png'
const PromiseFeatures = () => {
  return (
    <div className='promise-features'>
      <div>
        <img src={image1} alt="" />
        <h5>Browse programs and explore</h5>
      </div>
      <div>
        <img src={image2} alt="" />
        <h5>Online tutoring anytime, anywhere </h5>
      </div>
      <div>
        <img src={image3} alt="" />
        <h5>Real time support from tutors</h5>
      </div>
    </div>
  )
}

export default PromiseFeatures