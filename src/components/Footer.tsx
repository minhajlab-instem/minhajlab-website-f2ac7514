
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-sm">
          &copy; {new Date().getFullYear()} Cytoskeleton Research Lab. All rights reserved.
        </p>
        <p className="font-sans text-xs mt-1">
          Powered by Lovable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
