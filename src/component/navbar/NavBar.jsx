import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import './NavBar.css'
import logo from '../../asset/brand/logo.png'
import menu from '../../asset/ui/hamburger.png'
import close from '../../asset/ui/close.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className='navbar'>
      <Link to='/'><img id='logo' src={logo} alt="" /></Link>
      <div>
        <img id='menu-icon' src={menuOpen ? close : menu} onClick={handleToggle} alt="" />
        <ul className={menuOpen ? '' : 'close'}>
        <li><Link to='./about'>About</Link></li>
        <li><Link to='./programs'>Programs</Link></li>
        <li><Link to='./get-involved'>Get Involved</Link></li>
        <li><Link to='./contact'>Contact</Link></li>
        <button className='round-button'><Link to='./promise-path'>Promise Path</Link></button>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar