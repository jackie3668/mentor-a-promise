import React from 'react'
import './HomeOurStory.css'
import { Link } from 'react-router-dom'
import image from '../../asset/home/ourstory.png'

const HomeOurStory = () => {
  return (
    <div className='home-our-story'>
      <img src={image} alt="" />
      <div>
        <h4 className='h4-bold'>Our Story</h4>
        <p>
          At Mentor A Promise, our story is one of purpose and determination. We were founded with a clear mission: to support youths and families living in NYC shelters and break the cycle of homelessness.
          <br />
          <br />
          From the very beginning, we recognized the immense potential within each individual and sought to provide them with the educational resources and opportunities needed to succeed. Through partnerships with family shelters, educational institutions, and community organizations, we have built a strong network that supports youths experiencing homelessness and helps them to overcome adversity and forge their own path towards a brighter future.
        </p>
        <button className='round-button' onClick={() => window.scrollTo(0, 0)}><Link to='./about'>Learn More</Link></button>
      </div>
    </div>
  )
}

export default HomeOurStory