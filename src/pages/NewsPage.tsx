import React from 'react';
import { Calendar, Award, Users, Newspaper, Twitter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
// Button and Separator might not be needed with the new design, but keeping imports for now
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';

interface NewsItem {
  title: string;
  date: string;
  timestamp: Date; 
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: string; 
  summary: string;
  image?: string;
  link?: {
    url: string;
    text: string;
    isExternal: boolean;
  };
}

// News items data with timestamps for sorting - Keeping existing data structure
const newsItems: NewsItem[] = [
  {
    title: "Dr. Vance Receives Prestigious Research Grant",
    date: "May 15, 2025",
    timestamp: new Date(2025, 4, 15),
    category: "Award",
    icon: Award,
    badge: "Research Grant",
    summary: "Our Principal Investigator, Dr. Eleanor Vance, has been awarded a significant grant to further investigate cytoskeletal dynamics in neurodegenerative diseases.",
    image: "https://images.unsplash.com/photo-1560415004-913579095038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: { url: "#", text: "Read More", isExternal: false }
  },
  {
    title: "Guest Lecture on Super-Resolution Microscopy",
    date: "May 10, 2025",
    timestamp: new Date(2025, 4, 10),
    category: "Social",
    icon: Twitter,
    badge: "Twitter",
    summary: "We are excited to host a guest lecture by Dr. Alex Chen on super-resolution microscopy. Mark your calendars!",
    link: { url: "https://twitter.com", text: "View Tweet", isExternal: true }
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
    link: { url: "/lab-life", text: "View Lab Photos", isExternal: false }
  },
  {
    title: "Major Breakthrough in Cytoskeletal Dynamics",
    date: "April 5, 2025",
    timestamp: new Date(2025, 3, 5),
    category: "Publication",
    icon: Newspaper,
    badge: "Research Highlight",
    summary: "Our lab has published a groundbreaking study revealing new insights into the assembly and function of the cytoskeleton. This research opens up new avenues for understanding cellular mechanics and disease.",
    link: { url: "/publications", text: "Read Publication", isExternal: false }
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
    link: { url: "https://doi.org/10.1083/jcb.202301001", text: "View Publication", isExternal: true }
  },
  {
    title: "Annual Lab Retreat",
    date: "February 15, 2025",
    timestamp: new Date(2025, 1, 15),
    category: "Event",
    icon: Users,
    summary: "Our team participated in our annual lab retreat to discuss research progress, brainstorm new ideas, and strengthen team bonding.",
    link: { url: "/lab-life", text: "View Photos", isExternal: false }
  }
];

const sortedNewsItems = [...newsItems].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Laboratory News & Updates
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      <p className="text-lg font-sans text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
        Stay updated with the latest developments, achievements, and announcements from our lab.
      </p>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line down the left side */}
        <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-border -ml-px"></div>

        {sortedNewsItems.map((item, index) => (
          <div key={index} className="relative pl-12 mb-12 group">
            {/* Dot on the timeline */}
            <div className="absolute left-5 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background -ml-2 group-hover:scale-110 transition-transform duration-200"></div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              {/* Date and Badge */}
              <div className="flex justify-between items-center mb-3">
                <div className="text-sm text-muted-foreground font-medium">
                  <Calendar size={14} className="inline mr-1.5 -mt-px" />
                  {item.date}
                </div>
                {item.badge && (
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h2 className="text-xl font-heading font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">
                {item.title}
              </h2>
              
              {/* Image if available */}
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover rounded-md my-4 shadow-sm"
                />
              )}
              
              {/* Summary */}
              <p className="font-sans text-foreground/90 text-sm mb-4 leading-relaxed">{item.summary}</p>
              
              {/* Link */}
              {item.link && (
                <div className="mt-auto">
                  {item.link.isExternal ? (
                    <a 
                      href={item.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium hover:underline"
                    >
                      {item.link.text} <ExternalLink size={14} className="ml-1" />
                    </a>
                  ) : (
                    <Link 
                      to={item.link.url} 
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium hover:underline"
                    >
                      {item.link.text} <ExternalLink size={14} className="ml-1" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
