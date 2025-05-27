import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from 'lucide-react'; // Using available icons

const Footer: React.FC = () => {
  const quickLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Research',
    path: '/research'
  }, {
    name: 'Team',
    path: '/team'
  }, {
    name: 'Publications',
    path: '/publications'
  }, {
    name: 'News',
    path: '/news'
  }];
  const resourceLinks = [{
    name: 'For Students',
    path: '#'
  },
  // Placeholder
  {
    name: 'Laboratory Protocols',
    path: '#'
  },
  // Placeholder
  {
    name: 'Data & Code',
    path: '#'
  },
  // Placeholder
  {
    name: 'Funding Sources',
    path: '#'
  } // Placeholder
  ];
  const connectLinks = [{
    name: 'Contact Us',
    path: '/contact'
  },
  // Using available icons, will add placeholders for others if not available
  {
    name: 'Twitter',
    path: '#',
    icon: <Twitter size={20} />
  },
  // Placeholder URL
  {
    name: 'LinkedIn',
    path: '#',
    icon: <Linkedin size={20} />
  },
  // Placeholder URL
  {
    name: 'Google Scholar',
    path: '#'
  } // Placeholder, no direct icon
  ];
  return <footer className="bg-slate-800 text-slate-300 py-12 mt-auto font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Lab Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-2">Minhaj Lab</h2>
            <p className="text-sm text-slate-400">
              Advancing our understanding of cellular architecture and dynamics through innovative research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-teal-400 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-md font-semibold text-teal-400 mb-3">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map(link => <li key={link.name}>
                  <a href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-md font-semibold text-teal-400 mb-3">Connect</h3>
            <ul className="space-y-2">
              {connectLinks.map(link => <li key={link.name}>
                  <a href={link.path} target={link.path.startsWith('http') || link.path === '#' ? '_blank' : '_self'} rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors duration-200 text-sm">
                    {link.icon && <span className="mr-2">{link.icon}</span>}
                    {link.name === 'Contact Us' ? <Link to={link.path} className="hover:text-white transition-colors duration-200 text-sm">
                            {link.name}
                        </Link> : link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Cytoskeleton Research Lab. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a>
            <p className="text-slate-500">
              Powered by Lovable.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;