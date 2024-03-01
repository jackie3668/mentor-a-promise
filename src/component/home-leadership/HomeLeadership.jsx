import React from 'react'
import './HomeLeadership.css'
import image from '../../asset/home/pexels-fauxels-3183188.jpg'

const HomeLeadership = () => {
  return (
    <div className='home-leadership'>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4 className="h4-bold">Leadership</h4>
        <div>
          <h6>Beranobel Melo</h6>
          <p className='p-bold'>Founder and CEO</p>
        </div>
        <div>
          <h6>Yasmine Bezzaz, PhD</h6>
          <p className='p-bold'>Program Director</p>
          <p>Yasmine has a PhD in management with a focus on human resources management and organizational behavior. She has studied worker health as well as practices to promote well-being at work at the individual and organizational level. She has completed a one-year research stay at Harvard School of Public Health's Center for Work, Health and Wellbeing through a joint supervision Fulbright grant which allowed her to become acquainted with intervention research and to perfect her methodological tools. Today she is a passionate educator, university lecturer and corporate trainer. Her hobbies include watercolor, creative writing and manual crafts.</p>
        </div>
      </div>
    </div>
  )
}
 export default HomeLeadership