
```tsx
import React from 'react';
import { Linkedin, Mail, Download, FlaskConical, Briefcase, Smile } from 'lucide-react'; // Added FlaskConical, Briefcase, Smile
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Added Tabs components

interface TeamMember {
  name: string;
  role: string;
  researchArea?: string; // Replaces bio
  focus?: string;        // Replaces bio
  interests?: string;    // New field
  imageUrl: string;
  email: string;
  linkedin: string;
  status: 'pi' | 'current' | 'alumni';
  cvUrl?: string;
  alumniDetails?: {
    graduationYear?: string;
    currentPosition?: string;
    durationInLab?: string; // New field for alumni
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Eleanor Vance",
    role: "Principal Investigator",
    researchArea: "Actin dynamics and cell migration.",
    focus: "Cytoskeleton research with over 20 years of experience, particularly in how cellular structures drive cell behavior.",
    interests: "Mentoring young scientists, exploring new microscopy techniques.",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ec527868148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NpZW50aXN0JTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "eleanor.vance@example.com",
    linkedin: "https://linkedin.com/in/eleanorvance",
    status: 'pi',
    cvUrl: "/cv/eleanor_vance_cv.pdf"
  },
  {
    name: "Dr. Ben Carter",
    role: "Postdoctoral Fellow",
    researchArea: "Microtubules in neuronal development and disease.",
    focus: "Investigating the role of microtubules using advanced microscopy techniques.",
    interests: "Photography, Cycling, Sci-fi literature.",
    imageUrl: "https://images.unsplash.com/photo-1618085222100-93f0c1f790cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaWVudGlzdCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80",
    email: "ben.carter@example.com",
    linkedin: "https://linkedin.com/in/bencarter",
    status: 'current',
  },
  {
    name: "Aisha Khan",
    role: "PhD Student",
    researchArea: "Mechanics of intermediate filaments and cellular integrity.",
    focus: "Utilizing a combination of experimental and computational approaches to study filament contribution to cell structure.",
    interests: "Reading, Baking, Coding.",
    imageUrl: "https://images.unsplash.com/photo-1571175220097-0689e1ab3538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVudGlzdCUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=80",
    email: "aisha.khan@example.com",
    linkedin: "https://linkedin.com/in/aishakhan",
    status: 'current',
  },
  {
    name: "Samuel Green",
    role: "Former Lab Technician",
    researchArea: "Lab management and technical support (during tenure).", // Role-specific past focus
    focus: "Ensured smooth lab operations and resource management (during tenure).",
    imageUrl: "https://images.unsplash.com/photo-1622109060009-075a1547c438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhYiUyMHRlY2huaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "samuel.green.alumni@example.com", // Email might not be relevant for alumni display
    linkedin: "https://linkedin.com/in/samuelgreen", // Not displayed in table but kept in data
    status: 'alumni',
    alumniDetails: {
      graduationYear: "2023",
      currentPosition: "Research Scientist at BioSynth Inc.",
      durationInLab: "2021-2023" // Added duration
    }
  },
  {
    name: "Dr. Olivia Chen",
    role: "Former Postdoctoral Fellow",
    researchArea: "Mechanotransduction (during tenure).",
    focus: "Studied how cells sense and respond to mechanical stimuli (during tenure).",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
    email: "olivia.chen.alumni@example.com",
    linkedin: "https://linkedin.com/in/oliviachen",
    status: 'alumni',
    alumniDetails: {
      graduationYear: "2022",
      currentPosition: "Assistant Professor, Northwood University",
      durationInLab: "2019-2022" // Added duration
    }
  }
];

const TeamPage: React.FC = () => {
  const principalInvestigator = teamMembers.find(member => member.status === 'pi');
  const currentMembers = teamMembers.filter(member => member.status === 'current');
  const alumniMembers = teamMembers.filter(member => member.status === 'alumni');

  const MemberDetailItem: React.FC<{ icon: React.ElementType; label: string; value?: string }> = ({ icon: Icon, label, value }) => {
    if (!value) return null;
    return (
      <div className="flex items-start space-x-2 mb-2">
        <Icon className="w-5 h-5 text-sky-600 mt-1 shrink-0" />
        <div>
          <span className="font-semibold text-slate-700">{label}:</span>
          <p className="text-sm text-slate-600">{value}</p>
        </div>
      </div>
    );
  };

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
            <div className="text-center md:text-left flex-grow">
              <h3 className="text-2xl font-heading font-bold text-sky-700 mb-1">{principalInvestigator.name}</h3>
              <p className="text-md font-sans text-slate-500 mb-4">{principalInvestigator.role}</p>
              
              <div className="flex items-center space-x-2 mb-2 text-sm text-slate-600">
                <Mail className="w-5 h-5 text-sky-600" />
                <a href={`mailto:${principalInvestigator.email}`} className="hover:text-sky-700 hover:underline">{principalInvestigator.email}</a>
              </div>
              
              <MemberDetailItem icon={FlaskConical} label="Research Area" value={principalInvestigator.researchArea} />
              <MemberDetailItem icon={Briefcase} label="Focus" value={principalInvestigator.focus} />
              <MemberDetailItem icon={Smile} label="Interests" value={principalInvestigator.interests} />

              <div className="flex justify-center md:justify-start space-x-4 mt-4 mb-4">
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

      {/* Tabs for Current Members and Alumni */}
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 lg:w-1/3 mx-auto mb-8">
          <TabsTrigger value="current">Current Members</TabsTrigger>
          <TabsTrigger value="alumni">Lab Alumni</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          {currentMembers.length > 0 ? (
            <section>
              {/* Current Members Section - Title removed as it's part of Tab */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentMembers.map((member) => (
                  <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="text-center">
                        <h3 className="text-xl font-heading font-semibold mb-1 text-sky-700">{member.name}</h3>
                        <p className="text-sm font-sans text-slate-500 mb-3">{member.role}</p>
                    </div>
                    
                    <div className="text-left mt-2 space-y-3 flex-grow">
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                            <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                            <a href={`mailto:${member.email}`} className="truncate hover:text-sky-700 hover:underline" title={member.email}>{member.email}</a>
                        </div>
                        <MemberDetailItem icon={FlaskConical} label="Research Area" value={member.researchArea} />
                        <MemberDetailItem icon={Briefcase} label="Focus" value={member.focus} />
                        <MemberDetailItem icon={Smile} label="Interests" value={member.interests} />
                    </div>

                    <div className="flex justify-center space-x-3 mt-auto pt-4">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors" aria-label="LinkedIn">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <p className="text-center text-slate-500">No current members to display.</p>
          )}
        </TabsContent>

        <TabsContent value="alumni">
          {alumniMembers.length > 0 ? (
            <section>
              {/* Alumni Section - Title removed as it's part of Tab */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px] sm:w-[200px]">Name</TableHead>
                      <TableHead>Duration in Lab</TableHead>
                      <TableHead>Last Role in Lab</TableHead>
                      <TableHead>Current Position</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {alumniMembers.map((alumnus) => (
                      <TableRow key={alumnus.name}>
                        <TableCell className="font-medium text-slate-800">{alumnus.name}</TableCell>
                        <TableCell className="text-slate-600">{alumnus.alumniDetails?.durationInLab || 'N/A'}</TableCell>
                        <TableCell className="text-slate-600">{alumnus.role}</TableCell>
                        <TableCell className="text-slate-600">{alumnus.alumniDetails?.currentPosition || 'N/A'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>
          ) : (
             <p className="text-center text-slate-500">No alumni to display.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamPage;
```

