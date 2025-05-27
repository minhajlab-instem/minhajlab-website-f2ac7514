
import React from 'react';
import { Calendar, Award, Users, Newspaper as NewspaperIcon } from 'lucide-react'; // Changed FileText to NewspaperIcon

const newsItems = [
  {
    title: "Dr. Vance Receives Prestigious Research Grant",
    date: "May 15, 2025",
    category: "Award",
    icon: Award,
    summary: "Our Principal Investigator, Dr. Eleanor Vance, has been awarded a significant grant to further investigate cytoskeletal dynamics in neurodegenerative diseases.",
    image: "https://images.unsplash.com/photo-1560415004-913579095038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "Lab Welcomes New Postdoctoral Fellow Dr. Ben Carter",
    date: "April 28, 2025",
    category: "Team",
    icon: Users,
    summary: "We are thrilled to welcome Dr. Ben Carter to our team. Dr. Carter brings expertise in advanced microscopy and will be focusing on microtubule research.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "Breakthrough Publication in Journal of Cell Biology",
    date: "March 10, 2025",
    category: "Publication",
    icon: NewspaperIcon, // Changed from FileText
    summary: "Our latest research on actin polymerization dynamics has been published in the Journal of Cell Biology, offering new insights into cell migration.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVibGljYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  }
];


const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
        Lab News & Announcements
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-sm text-slate-500 mb-2">
                <item.icon size={16} className="mr-2 text-sky-600" />
                <span>{item.category}</span>
                <span className="mx-2">|</span>
                <Calendar size={16} className="mr-1 text-sky-600" />
                <span>{item.date}</span>
              </div>
              <h2 className="text-xl font-heading font-semibold mb-3 text-sky-700">{item.title}</h2>
              <p className="font-sans text-slate-600 text-sm flex-grow">{item.summary}</p>
              <a href="#" className="mt-4 text-sm text-sky-600 hover:text-sky-800 font-semibold self-start">Read More &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
