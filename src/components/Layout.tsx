
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* This is where the page content will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
