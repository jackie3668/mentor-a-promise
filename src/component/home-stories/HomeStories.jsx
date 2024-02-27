import React from 'react'
import './HomeStories.css'
import { Link } from 'react-router-dom'
import image1 from '../../asset/home/story1.png'
import image2 from '../../asset/home/story2.png'
import image3 from '../../asset/home/story3.png'
import image4 from '../../asset/home/story4.png'

const HomeStories = () => {
  return (
    <div className='home-stories'>
      <h4 className="h4-bold">Success Stories</h4>
      <div>
        <div>
          <img src={image1} alt="" />
          <div>
            <p>"Mentor A Promise's programs have been vital. They ensure my children receive education despite our homelessness. Free tutoring and personalized mentorship bridge gaps, empowering my kids to pursue academic goals."</p>
            <div>
              <p className="p-bold">Sarah Johnson</p>
              <span className="small">Single Mother</span>
            </div>
          </div>
        </div>
        <div>
          <img src={image2} alt="" />
          <div>
            <p>"Mentor A Promise's programs have been vital. They ensure my children receive education despite our homelessness. Free tutoring and personalized mentorship bridge gaps, empowering my kids to pursue academic goals."</p>
            <div>
              <p className="p-bold">Sarah Johnson</p>
              <span className="small">Single Mother</span>
            </div>
          </div>
        </div>
        <div>
          <img src={image3} alt="" />
          <div>
            <p>"Mentor A Promise's programs have been vital. They ensure my children receive education despite our homelessness. Free tutoring and personalized mentorship bridge gaps, empowering my kids to pursue academic goals."</p>
            <div>
              <p className="p-bold">Sarah Johnson</p>
              <span className="small">Single Mother</span>
            </div>
          </div>
        </div>
        <div>
          <img src={image4} alt="" />
          <div>
            <p>"Mentor A Promise's programs have been vital. They ensure my children receive education despite our homelessness. Free tutoring and personalized mentorship bridge gaps, empowering my kids to pursue academic goals."</p>
            <div>
              <p className="p-bold">Sarah Johnson</p>
              <span className="small">Single Mother</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeStories