'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './company/Home/page.jsx';

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      <Navbar />
      {pathname === '/' ? <Home /> : children}
      <Footer />
    </div>
  );
};

export default Layout;
