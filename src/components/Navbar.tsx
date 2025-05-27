
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, FlaskConical, Users, FileText, Newspaper, Mail, Menu, X } from 'lucide-react'; // Using FlaskConical as 'research' icon is not in the allowed list for direct import but general lucide is available. Let's stick to allowed names if possible. Oh, "research" is allowed!

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Research', path: '/research', icon: FlaskConical }, // Using FlaskConical as a stand-in for 'research' as per allowed list in context, but 'research' icon name is available from lucide-react.
  { name: 'Team', path: '/team', icon: Users },
  { name: 'Publications', path: '/publications', icon: FileText },
  { name: 'News', path: '/news', icon: Newspaper },
  { name: 'Contact', path: '/contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold text-sky-400 hover:text-sky-300 transition-colors">
              Cytoskeleton Lab
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium font-sans hover:bg-slate-700 transition-colors ${
                    isActive ? 'bg-sky-600 text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-base font-medium font-sans hover:bg-slate-700 transition-colors ${
                    isActive ? 'bg-sky-600 text-white' : 'text-slate-300 hover:text-white'
                  } block`
                }
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
