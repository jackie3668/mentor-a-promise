import React from 'react'
import './ProgramsDetails.css'
import { Link } from 'react-router-dom'
import image1 from '../../asset/programs/Group 6.png'
import image2 from '../../asset/programs/Group 7.png'
import image3 from '../../asset/programs/Group 5.png'
import image4 from '../../asset/programs/Group 5 (1).png'

const ProgramsDetails = () => {
  return (
    <div className='programs-details'>
      <div className='program-type'>
        <h4 className="h4-bold">In-Person Programs</h4>
        <p>We collaborate with Home for the Homeless and Children's Rescue Fund, offering in-person tutoring services. </p>
        <div>
          <div className='program'>
            <img src={image1} alt="" />
            <div>
              <h5>Children’s Rescue Fund</h5>
              <p>The Children's Rescue Fund, established in 1992, combats homelessness by providing critical services, aiming for independence and self-sufficiency. Their programs empower families and individuals, breaking the cycle of homelessness through education, healthcare, and housing support.
              <br/><br/>
              Mentor a Promise works hand in hand with the Children's Rescue Fund to deliver educational services. Together, they offer mentorship programs and academic support to the youths and children within CRF-supported families, enriching their educational experiences and fostering personal growth despite their challenging circumstances.</p>
              <button className='round-button'><a href="https://www.childrensrescuefund.org/" target="_blank" rel="noopener noreferrer">Learn More</a></button>
            </div>
          </div>
          <div className='program'>
            <img src={image2} alt="" />
            <div>
              <h5>Home for the Homeless</h5>
              <p>Home for the Homeless (HFH) offers comprehensive support to NYC families experiencing homelessness, providing safe shelters and services focusing on education, employment, and social welfare. Their aim is to achieve family and housing stability for all participants while empowering participants through a variety of resources.
              <br /><br />
              Similarly, Mentor a Promise also partners with Home for the Homeless to extend essential support. Through mentorship programs and academic assistance, they empower youths and children in HFH-supported families, nurturing their educational advancement and personal development despite challenging circumstances.</p>
              <button className='round-button'><a href="https://www.hfhnyc.org/" target="_blank" rel="noopener noreferrer">Learn More</a></button>
            </div>
          </div>
        </div>
      </div>
      <div className='program-type'>
        <h4 className="h4-bold">Online Programs</h4>
        <p>We collaborate with Learn To Be, offering online tutoring services.</p>
        <div>
          <div className='program'>
              <img src={image3} alt="" />
              <div>
                <h5>Learn To Be</h5>
                <p>Learn To Be is a nonprofit providing free, personalized online tutoring for underserved students nationwide since 2008. Dedicated volunteer tutors assist in various subjects, fostering academic excellence regardless of economic background.
                <br /><br />
                Currently, Mentor a Promise works with several families, delivering services through our partnership with Learn to Be. We leverage modern digital platforms to provide educational resources tailored to families' needs. Through innovative digital tools, we offer convenient and accessible learning resources, enriching the educational experience for both students and their families.</p>
                <button className='round-button'><a href="https://www.learntobe.org/" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
        </div>
      </div>
      <div className='program-type'>
        <h4 className="h4-bold">Technology Support</h4>
          <div>
            <div className='program'>
              <img src={image4} alt="" />
              <div>
                <h5>Desktop Computers, Laptops, and Tablets</h5>
                <p>Thanks to the general support from our donors, we've made in-person programs possible with desktops and donated laptops. Additionally, families in our online program receive laptops and tablets, ensuring access to mentorship and academic support.</p>
                <button className='round-button' onClick={() => window.scrollTo(0, 0)}><Link to='/get-involved'>Donate Now</Link></button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProgramsDetails