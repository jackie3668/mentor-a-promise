import React from 'react'
import './HomePrograms.css'
import { Link } from 'react-router-dom'
import image1 from '../../asset/home/program1.png'
import image2 from '../../asset/home/program2.png'

const HomePrograms = () => {
  return (
    <div className='home-programs'>
      <h4 className="h4-bold">Our Programs</h4>
      <div>
        <div>
          <img src={image1} alt="" />
          <h6>In-Person Services</h6>
          <p> Our organization collaborates with partner organizations to deliver on-site assistance. Through our initiatives, we have facilitated the provision of desktop computers and donated laptops. Additionally, our dedicated mentors engage with students to offer mentorship and academic guidance.</p>
          <button className='round-button' onClick={() => window.scrollTo(0, 0)}><Link to='./programs'>Learn More</Link></button>
        </div>
        <div>
          <img src={image2} alt="" />
          <h6>In-Person Services</h6>
          <p> Our organization collaborates with partner organizations to deliver on-site assistance. Through our initiatives, we have facilitated the provision of desktop computers and donated laptops. Additionally, our dedicated mentors engage with students to offer mentorship and academic guidance.</p>
          <button className='round-button'><Link to='./programs'>Learn More</Link></button>
        </div>
      </div>
    </div>
  )
}

export default HomePrograms