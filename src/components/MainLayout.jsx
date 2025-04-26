'use client';

import React, { useState } from 'react';
import Navbar from '@/app/mainpages/Navbar';
import Footer from '@/app/mainpages/Footer';
import MainDashboard from '@/app/mainpages/MainDashboard';
import About from '@/app/company/about/page';
import Teams from '@/app/company/team/page';
import Contact from '@/app/company/contact/page';
import Partnership from '@/app/company/partnership/page';
import LatestNews from '@/app/blog/latestNews/page';
import Articles from '@/app/blog/articles/page';
import Announcements from '@/app/blog/announcements/page';

const MainLayout = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'teams':
        return <Teams />;
      case 'contact':
        return <Contact />;
      case 'partnership':
        return <Partnership />;
      case 'latestnews':
        return <LatestNews />;
      case 'articles':
        return <Articles />;
      case 'announcements':
        return <Announcements />;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="pt-[80px]">
      <Navbar onNavigate={setActivePage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
