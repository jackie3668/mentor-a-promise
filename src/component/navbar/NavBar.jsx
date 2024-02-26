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
      <img id='logo' src={logo} alt="" />
      <div>
        <img id='menu-icon' src={menuOpen ? close : menu} onClick={handleToggle} alt="" />
        <ul className={menuOpen ? '' : 'close'}>
        <li><Link>About</Link></li>
        <li><Link>Programs</Link></li>
        <li><Link>Get Involved</Link></li>
        <li><Link>Contact</Link></li>
        <button className='round-button'><Link>Promise Path</Link></button>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar