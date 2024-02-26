import React from 'react'
import './Scroll.css'
import arrow from '../../asset/ui/arrow.png'

const Scroll = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className='scroll' onClick={handleScroll}>
      <img src={arrow} alt="" />
    </div>
  )
}

export default Scroll