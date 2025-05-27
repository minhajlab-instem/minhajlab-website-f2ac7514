
import React from 'react';
import { Calendar, Award, Users, Newspaper, Twitter, ExternalLink, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface NewsItem {
  title: string;
  date: string;
  timestamp: Date; // For sorting
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: string; // Optional badge text (e.g., "Research Highlight")
  summary: string;
  image?: string; // Optional image
  link?: {
    url: string;
    text: string;
    isExternal: boolean;
  };
}

// News items data with timestamps for sorting
const newsItems: NewsItem[] = [
  {
    title: "Dr. Vance Receives Prestigious Research Grant",
    date: "May 15, 2025",
    timestamp: new Date(2025, 4, 15), // May is month 4 (zero-indexed)
    category: "Award",
    icon: Award,
    badge: "Research Grant",
    summary: "Our Principal Investigator, Dr. Eleanor Vance, has been awarded a significant grant to further investigate cytoskeletal dynamics in neurodegenerative diseases.",
    image: "https://images.unsplash.com/photo-1560415004-913579095038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: {
      url: "#", 
      text: "Read More",
      isExternal: false
    }
  },
  {
    title: "Guest Lecture on Super-Resolution Microscopy",
    date: "May 10, 2025",
    timestamp: new Date(2025, 4, 10),
    category: "Social",
    icon: Twitter,
    badge: "Twitter",
    summary: "We are excited to host a guest lecture by Dr. Alex Chen on super-resolution microscopy. Mark your calendars!",
    link: {
      url: "https://twitter.com", 
      text: "View Tweet",
      isExternal: true
    }
  },
  {
    title: "Lab Welcomes New Postdoctoral Fellow Dr. Ben Carter",
    date: "April 28, 2025",
    timestamp: new Date(2025, 3, 28),
    category: "Team",
    icon: Users,
    badge: "New Member",
    summary: "We are thrilled to welcome Dr. Ben Carter to our team. Dr. Carter brings expertise in advanced microscopy and will be focusing on microtubule research.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: {
      url: "/lab-life", 
      text: "View Lab Photos",
      isExternal: false
    }
  },
  {
    title: "Major Breakthrough in Cytoskeletal Dynamics",
    date: "April 5, 2025",
    timestamp: new Date(2025, 3, 5),
    category: "Publication",
    icon: Newspaper,
    badge: "Research Highlight",
    summary: "Our lab has published a groundbreaking study revealing new insights into the assembly and function of the cytoskeleton. This research opens up new avenues for understanding cellular mechanics and disease.",
    link: {
      url: "/publications", 
      text: "Read Publication",
      isExternal: false
    }
  },
  {
    title: "Breakthrough Publication in Journal of Cell Biology",
    date: "March 10, 2025",
    timestamp: new Date(2025, 2, 10),
    category: "Publication",
    icon: Newspaper,
    badge: "Publication",
    summary: "Our latest research on actin polymerization dynamics has been published in the Journal of Cell Biology, offering new insights into cell migration.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVibGljYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: {
      url: "https://doi.org/10.1083/jcb.202301001", 
      text: "View Publication",
      isExternal: true
    }
  },
  {
    title: "Annual Lab Retreat",
    date: "February 15, 2025",
    timestamp: new Date(2025, 1, 15),
    category: "Event",
    icon: Users,
    summary: "Our team participated in our annual lab retreat to discuss research progress, brainstorm new ideas, and strengthen team bonding.",
    link: {
      url: "/lab-life", 
      text: "View Photos",
      isExternal: false
    }
  }
];

// Sort news items by date (newest to oldest)
const sortedNewsItems = [...newsItems].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-slate-800">
        Laboratory News & Updates
      </h1>
      <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
      <p className="text-lg font-sans text-slate-700 mb-12 text-center max-w-3xl mx-auto">
        Stay updated with the latest developments, achievements, and announcements from our lab.
      </p>
      
      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-sky-200"></div>
        
        {/* News items */}
        {sortedNewsItems.map((item, index) => (
          <div key={index} className={`relative mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Date circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
              <div className="bg-sky-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                <Calendar size={20} />
              </div>
            </div>
            
            {/* Content - alternating sides */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Date */}
                <div className="text-sm text-slate-500 mb-1 font-medium">
                  {item.date}
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-heading font-semibold mb-2 text-sky-700">{item.title}</h2>
                
                {/* Category badge */}
                {item.badge && (
                  <div className="mb-3">
                    <span className="inline-block bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-1 rounded">
                      {item.badge}
                    </span>
                  </div>
                )}
                
                {/* Image if available */}
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-3"/>
                )}
                
                {/* Summary */}
                <p className="font-sans text-slate-600 text-sm mb-4">{item.summary}</p>
                
                {/* Link */}
                {item.link && (
                  <div className="mt-auto">
                    {item.link.isExternal ? (
                      <a 
                        href={item.link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 font-medium"
                      >
                        {item.link.text} <ExternalLink size={14} className="ml-1" />
                      </a>
                    ) : (
                      <Link 
                        to={item.link.url} 
                        className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 font-medium"
                      >
                        {item.link.text} <ExternalLink size={14} className="ml-1" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Empty space for the other side */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
