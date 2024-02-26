import React from 'react';
import Footer from '../footer/Footer';
import Scroll from '../scroll/Scroll';
import NavBar from '../navbar/NavBar';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Scroll />
      <NavBar />
      <main className='content'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
