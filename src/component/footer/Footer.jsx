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
              <li><p><Link to='./about' onClick={() => window.scrollTo(0, 0)}>Our story</Link></p></li>
              <li><p><Link to='./about' onClick={() => window.scrollTo(0, 0)}>Our values</Link></p></li>
              <li><p><Link to='./about' onClick={() => window.scrollTo(0, 0)}>What we offer</Link></p></li>
              <li><p><Link to='./about' onClick={() => window.scrollTo(0, 0)}>Our team</Link></p></li>
            </ul>
          </div>
          <div className="group">
            <p className='p-bold'>Get Involved</p>
            <ul>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Volunteer</Link></p></li>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Donate</Link></p></li>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Wishlist</Link></p></li>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Partnership</Link></p></li>
            </ul>
          </div>
          <div className="group">
            <p className='p-bold'>Our Partners</p>
            <ul>
              <li>
                <p>
                  <a href="https://www.childrensrescuefund.org/" target="_blank" onClick={() => window.scrollTo(0, 0)}>Children's Rescue Fund</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.hfhnyc.org/" target="_blank" onClick={() => window.scrollTo(0, 0)}>Home for the Homeless</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.learntobe.org/" target="_blank" onClick={() => window.scrollTo(0, 0)}>Learn To Be</a>
                </p>
              </li>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Become a partner</Link></p></li>
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
            <a href="https://www.facebook.com/profile.php?id=100083192297704&paipv=0&eav=Afb54VaD2sbyxhFRo-ySHHo6BNmmm-sewfvQMlTLc_KSm-8bPAFJb5S0zkwGDTl-vOQ&_rdr" target="_blank">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/mentor-a-promise-inc/about/" target="_blank">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/mentorapromise/" target="_blank">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/mentorapromise" target="_blank">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
        <p className='small'><span><Link to='./disclaimer' onClick={() => window.scrollTo(0, 0)}>DISCLAIMER</Link></span>|<span><Link to='./privacy-policy' onClick={() => window.scrollTo(0, 0)}>PRIVACY POLICY</Link></span></p>
        <p className='small'>Mentor A Promise, Inc. - EIN 84-2118930</p>
        <p className='small'><img id='footer-logo' src={logo} alt="" />The Official Site of Mentor a Promise, Inc. All Rights Reserved. MAP is a 501(c)3 (nonprofit) organization and donations are tax deductible.</p>
        
      </div>
    </footer>
  )
}

export default Footer