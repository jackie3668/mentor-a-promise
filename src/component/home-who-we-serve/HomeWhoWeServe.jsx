import React from 'react'
import './HomeWhoWeServe.css'
import img1 from '../../asset/home/Frame 51.png'
import img2 from '../../asset/home/Frame 52.png'
import img3 from '../../asset/home/Frame 53.png'

const HomeWhoWeServe = () => {
  return (
    <div className='home-who-we-serve'>
      <h4 className="h4-bold">Who We Serve</h4>
      <div>
        <div>
          <img src={img1} alt="" />
          <h6>School-aged children</h6>
          <p>Individuals between the ages of 5 and 18 who are enrolled in primary or secondary education.</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <h6>Youths</h6>
          <p>Individuals between the ages of 18 and 21 who may still be pursuing their education.</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <h6>Families</h6>
          <p>Families experiencing homelessness, including those in shelters, transitional housing, or unstable situations.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeWhoWeServe