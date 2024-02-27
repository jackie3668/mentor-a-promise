import React from 'react'
import './HomePartners.css'
import { Link } from 'react-router-dom'
import logo1 from '../../asset/brand/crf.png'
import logo2 from '../../asset/brand/hfh.png'
import logo3 from '../../asset/brand/learn-to-be.png'

const HomePartners = () => {
  return (
    <div className='home-partners'>
      <h4 className="h4-bold">Our Partners</h4>
      <div>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
      </div>
    </div>
  )
}

export default HomePartners