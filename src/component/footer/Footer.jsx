import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import candid from '../../asset/brand/candid.png'
import phone from '../../asset/ui/phone.png'
import mail from '../../asset/ui/mail.png'
import facebook from '../../asset/brand/facebook.png'
import instagram from '../../asset/brand/instagram.png'
import linkedin from '../../asset/brand/linkedin.png'
import tiktok from '../../asset/brand/tik-tok.png'
import twitter from '../../asset/brand/twitter.png'
import youtube from '../../asset/brand/youtube.png'
import logo from '../../asset/brand/logo.png'


const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="footer-groups">
          <div className="group">
            <p className='p-bold'>About Us</p>
            <ul>
              <li><p><Link>Our story</Link></p></li>
              <li><p><Link>Our values</Link></p></li>
              <li><p><Link>What we offer</Link></p></li>
              <li><p><Link>Our team</Link></p></li>
            </ul>
          </div>
          <div className="group">
            <p className='p-bold'>Get Involved</p>
            <ul>
              <li><p><Link>Our story</Link></p></li>
              <li><p><Link>Our values</Link></p></li>
              <li><p><Link>What we offer</Link></p></li>
              <li><p><Link>Our team</Link></p></li>
            </ul>
          </div>
          <div className="group">
            <p className='p-bold'>Our Partners</p>
            <ul>
              <li><p><Link>Children's Rescue Fund</Link></p></li>
              <li><p><Link>Home for the Homeless</Link></p></li>
              <li><p><Link>Learn To Be</Link></p></li>
              <li><p><Link>Become a partner</Link></p></li>
            </ul>
          </div>
          <div className="group contact-us">
            <p className='p-bold'>Contact Us</p>
              <ul>
                <li><img src={mail} alt="" /><a href="mailto:beranobel@mentorapromise.org"><p>beranobel@mentorapromise.org</p></a></li>
                <li><img src={phone} alt="" /><a href="tel:862-259-2842"><p>862-259-2842</p></a></li>
              </ul>
          </div>
          <img id='candid' src={candid} alt="" />
        </div>
        
      </div>
      <div className="bot">
        <div className="social-media">
          <p className='p-bold'>Connect With Us</p>
          <div>
            <Link><img src={facebook} alt="" /></Link>
            <Link><img src={linkedin} alt="" /></Link>
            <Link><img src={instagram} alt="" /></Link>
            <Link><img src={youtube} alt="" /></Link>
            <Link><img src={tiktok} alt="" /></Link>
            <Link><img src={twitter} alt="" /></Link>
          </div>
        </div>
        <p className='small'><span><Link>DISCLAIMER</Link></span>|<span><Link>PRIVACY POLICY</Link></span></p>
        <p className='small'>Mentor A Promise, Inc. - EIN 84-2118930</p>
        <p className='small'><img id='footer-logo' src={logo} alt="" />The Official Site of Mentor a Promise, Inc. All Rights Reserved. MAP is a 501(c)3 (nonprofit) organization and donations are tax deductible.</p>
        
      </div>
    </footer>
  )
}

export default Footer