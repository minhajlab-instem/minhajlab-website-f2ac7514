
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Eleanor Vance",
    role: "Principal Investigator",
    bio: "Dr. Vance leads the lab with over 20 years of experience in cytoskeleton research. Her work focuses on actin dynamics and cell migration.",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ec527868148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NpZW50aXN0JTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "eleanor.vance@example.com",
    linkedin: "#"
  },
  {
    name: "Dr. Ben Carter",
    role: "Postdoctoral Fellow",
    bio: "Ben's research investigates the role of microtubules in neuronal development and disease. He is passionate about advanced microscopy techniques.",
    imageUrl: "https://images.unsplash.com/photo-1618085222100-93f0c1f790cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaWVudGlzdCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80",
    email: "ben.carter@example.com",
    linkedin: "#"
  },
  {
    name: "Aisha Khan",
    role: "PhD Student",
    bio: "Aisha is studying the mechanics of intermediate filaments and their contribution to cellular integrity, using a combination of experimental and computational approaches.",
    imageUrl: "https://images.unsplash.com/photo-1571175220097-0689e1ab3538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVudGlzdCUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=80",
    email: "aisha.khan@example.com",
    linkedin: "#"
  },
  {
    name: "Samuel Green",
    role: "Lab Technician",
    bio: "Sam ensures the smooth operation of the lab, managing resources and providing technical support for various research projects.",
    imageUrl: "https://images.unsplash.com/photo-1622109060009-075a1547c438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhYiUyMHRlY2huaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "samuel.green@example.com",
    linkedin: "#"
  }
];

const TeamPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
        Meet Our Team
      </h1>
      <p className="text-lg font-sans text-slate-700 mb-12 text-center max-w-3xl mx-auto">
        Our lab thrives on collaboration and diverse expertise. Get to know the dedicated individuals driving our research forward.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <img 
              src={member.imageUrl} 
              alt={member.name} 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-heading font-semibold mb-1 text-sky-700">{member.name}</h2>
            <p className="text-sm font-sans text-slate-500 mb-3">{member.role}</p>
            <p className="font-sans text-slate-600 text-sm mb-4">{member.bio}</p>
            <div className="flex justify-center space-x-3">
              <a href={`mailto:${member.email}`} className="text-slate-500 hover:text-sky-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
