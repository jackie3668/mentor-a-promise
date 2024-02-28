import React from 'react'
import './AboutTeam.css'
import image1 from '../../asset/about/Frame 4.png'
import image2 from '../../asset/about/Frame 4 (1).png'
import image3 from '../../asset/about/Frame 4 (2).png'
import image4 from '../../asset/about/Frame 4 (3).png'

const AboutTeam = () => {
  return (
    <div className='about-team'>
      <h4 className='h4-bold'>About Team</h4>
      <div>
        <div>
          <img src={image1} alt="" />
          <h6 className='h6-bold'>Experienced Mentors</h6>
          <p>They possess many experience in providing mentorship to young students.</p>
        </div>
        <div>
          <img src={image2} alt="" />
          <h6 className='h6-bold'>Caring Professionals</h6>
          <p>They are leaders in their field and bring strong leadership and knowledge to share with our students.</p>
        </div>
        <div>
          <img src={image3} alt="" />
          <h6 className='h6-bold'>Retiree Volunteers</h6>
          <p>They are highly educated and posses a wide variety of specialized knowledge, professional expertise, and work experience.</p>
        </div>
        <div>
          <img src={image4} alt="" />
          <h6 className='h6-bold'>College Students</h6>
          <p>They bring passion and enthusiasm to share with our students. </p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam