
import React from 'react';
import { Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming path for shadcn Button
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"; // Assuming path for shadcn Table

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email: string;
  linkedin: string;
  status: 'pi' | 'current' | 'alumni';
  cvUrl?: string; // Optional CV URL for PI
  alumniDetails?: { // Optional details for alumni
    graduationYear?: string;
    currentPosition?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Eleanor Vance",
    role: "Principal Investigator",
    bio: "Dr. Vance leads the lab with over 20 years of experience in cytoskeleton research. Her work focuses on actin dynamics and cell migration.",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ec527868148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NpZW50aXN0JTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "eleanor.vance@example.com",
    linkedin: "https://linkedin.com/in/eleanorvance", // Example specific link
    status: 'pi',
    cvUrl: "/cv/eleanor_vance_cv.pdf" // Placeholder CV URL
  },
  {
    name: "Dr. Ben Carter",
    role: "Postdoctoral Fellow",
    bio: "Ben's research investigates the role of microtubules in neuronal development and disease. He is passionate about advanced microscopy techniques.",
    imageUrl: "https://images.unsplash.com/photo-1618085222100-93f0c1f790cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaWVudGlzdCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80",
    email: "ben.carter@example.com",
    linkedin: "https://linkedin.com/in/bencarter",
    status: 'current',
  },
  {
    name: "Aisha Khan",
    role: "PhD Student",
    bio: "Aisha is studying the mechanics of intermediate filaments and their contribution to cellular integrity, using a combination of experimental and computational approaches.",
    imageUrl: "https://images.unsplash.com/photo-1571175220097-0689e1ab3538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVudGlzdCUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=80",
    email: "aisha.khan@example.com",
    linkedin: "https://linkedin.com/in/aishakhan",
    status: 'current',
  },
  {
    name: "Samuel Green",
    role: "Former Lab Technician",
    bio: "Sam ensured the smooth operation of the lab, managing resources and providing technical support. He moved on to a research position at BioSynth Inc.",
    imageUrl: "https://images.unsplash.com/photo-1622109060009-075a1547c438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhYiUyMHRlY2huaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "samuel.green.alumni@example.com",
    linkedin: "https://linkedin.com/in/samuelgreen",
    status: 'alumni',
    alumniDetails: {
      graduationYear: "2023",
      currentPosition: "Research Scientist at BioSynth Inc."
    }
  },
  {
    name: "Dr. Olivia Chen",
    role: "Former Postdoctoral Fellow",
    bio: "Olivia's work focused on mechanotransduction. She is now an Assistant Professor at Northwood University.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60", // Placeholder image
    email: "olivia.chen.alumni@example.com",
    linkedin: "https://linkedin.com/in/oliviachen",
    status: 'alumni',
    alumniDetails: {
      graduationYear: "2022",
      currentPosition: "Assistant Professor, Northwood University"
    }
  }
];

const TeamPage: React.FC = () => {
  const principalInvestigator = teamMembers.find(member => member.status === 'pi');
  const currentMembers = teamMembers.filter(member => member.status === 'current');
  const alumniMembers = teamMembers.filter(member => member.status === 'alumni');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6 text-slate-800">
        Meet Our Team
      </h1>
      <p className="text-lg font-sans text-slate-700 mb-12 text-center max-w-3xl mx-auto">
        Our lab thrives on collaboration and diverse expertise. Get to know the dedicated individuals driving our research forward.
      </p>

      {/* Principal Investigator Section */}
      {principalInvestigator && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-sky-700 mb-8 text-center">
            Principal Investigator
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <img 
              src={principalInvestigator.imageUrl} 
              alt={principalInvestigator.name} 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold text-sky-700 mb-1">{principalInvestigator.name}</h3>
              <p className="text-md font-sans text-slate-500 mb-3">{principalInvestigator.role}</p>
              <p className="font-sans text-slate-600 text-sm mb-4">{principalInvestigator.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a href={`mailto:${principalInvestigator.email}`} className="text-slate-500 hover:text-sky-600 transition-colors" aria-label="Email">
                  <Mail size={24} />
                </a>
                <a href={principalInvestigator.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                {/* Add other social media links here if available */}
              </div>
              {principalInvestigator.cvUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={principalInvestigator.cvUrl} download>
                    <Download size={18} className="mr-2" />
                    Download CV
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Current Members Section */}
      {currentMembers.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-sky-700 mb-8 text-center">
            Current Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMembers.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-heading font-semibold mb-1 text-sky-700">{member.name}</h3>
                <p className="text-sm font-sans text-slate-500 mb-3">{member.role}</p>
                <p className="font-sans text-slate-600 text-sm mb-4 flex-grow">{member.bio}</p>
                <div className="flex justify-center space-x-3 mt-auto">
                  <a href={`mailto:${member.email}`} className="text-slate-500 hover:text-sky-600 transition-colors" aria-label="Email">
                    <Mail size={20} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Alumni Section */}
      {alumniMembers.length > 0 && (
        <section>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-sky-700 mb-8 text-center">
            Lab Alumni
          </h2>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px] sm:w-[200px]">Name</TableHead>
                  <TableHead>Last Role in Lab</TableHead>
                  <TableHead>Current Position</TableHead>
                  <TableHead className="text-right">Profile</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alumniMembers.map((alumnus) => (
                  <TableRow key={alumnus.name}>
                    <TableCell className="font-medium text-slate-800">{alumnus.name}</TableCell>
                    <TableCell className="text-slate-600">{alumnus.role}</TableCell>
                    <TableCell className="text-slate-600">{alumnus.alumniDetails?.currentPosition || 'N/A'}</TableCell>
                    <TableCell className="text-right">
                      <a href={alumnus.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 hover:underline transition-colors" aria-label={`${alumnus.name}'s LinkedIn profile`}>
                        View Profile
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      )}
    </div>
  );
};

export default TeamPage;
