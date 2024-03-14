import React from 'react'
import './AboutOffer.css'
import { Link } from 'react-router-dom'
import image1 from '../../asset/about/Image (3).png'
import image2 from '../../asset/about/Image (4).png'
import image3 from '../../asset/about/Image (5).png'
import image4 from '../../asset/about/Image (6).png'


const AboutOffer = () => {
  return (
    <div className='about-offer'>
      <h4 className='h4-bold'>What We Offer</h4>
      <div>
        <div>
          <img src={image1} alt="" />
          <h5>In-Person Services</h5>
          <p>Our organization collaborates with partner organizations to deliver on-site assistance. Through our initiatives, we have facilitated the provision of desktop computers and donated laptops. Additionally, our dedicated mentors engage with students to offer mentorship and academic guidance.</p>
          <button className="round-button" onClick={() => window.scrollTo(0, 0)}><Link to='/programs'>Learn More</Link></button>
        </div>
        <div>
          <img src={image2} alt="" />
          <h5>Online Services</h5>
          <p> We are delivering our services through our partnership with Learn to Be. Through this platform, families can access free online tutoring. We provide laptops and tablets to families participating in our online program, ensuring they have the necessary tools for academic support.</p>
          <button className="round-button" onClick={() => window.scrollTo(0, 0)}><Link to='/programs'>Learn More</Link></button>
        </div>
        <div>
          <img src={image3} alt="" />
          <h5>Technology Support</h5>
          <p> We enhance digital access by providing computers, laptops, and learning devices, alongside training, to bridge the digital divide and support educational advancement for students in our in-person and online programs.</p>
          <button className="round-button" onClick={() => window.scrollTo(0, 0)}><Link to='/programs'>Learn More</Link></button>
        </div>
        <div>
          <img src={image4} alt="" />
          <h5>Other Resources</h5>
          <p>We provide diverse resources fostering personal and educational development, designed to empower individuals and families in overcoming the challenges of homelessness towards achieving sustainable independence.</p>
          <button className="round-button"><Link to='/programs'>Learn More</Link></button>
        </div>
      </div>
    </div>
  )
}

export default AboutOffer