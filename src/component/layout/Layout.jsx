import React, { Children } from 'react'
import Footer from '../footer/Footer'
import Scroll from '../scroll/Scroll'
import NavBar from '../navbar/NavBar'

const Layout = ({ Children }) => {
  return (
    <div className='layout'>
      <Scroll />
      <NavBar />
      <main className='content'>{Children}</main>
      <div>123</div>
      <Footer />
    </div>
  )
}

export default Layout