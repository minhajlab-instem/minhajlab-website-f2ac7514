
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// ThemeToggle import removed

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'Team', path: '/team' },
  { name: 'Publications', path: '/publications' },
  { name: 'Resources', path: '/resources' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-foreground shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold text-primary hover:opacity-80 transition-opacity">
              Minhaj Lab
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium font-sans transition-colors 
                  ${isActive ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-foreground hover:bg-accent'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            {/* ThemeToggle removed from here */}
          </div>
          <div className="md:hidden flex items-center">
            {/* ThemeToggle removed from mobile view */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
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
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium font-sans transition-colors 
                  ${isActive ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-foreground hover:bg-accent'}`
                }
              >
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

