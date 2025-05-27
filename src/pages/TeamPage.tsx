
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Download, FlaskConical, Briefcase, Smile, Users, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/teamData';
import MemberDetailItem from '@/components/team/MemberDetailItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CurrentMembersTabContent from '@/components/team/CurrentMembersTabContent';
import AlumniTabContent from '@/components/team/AlumniTabContent';

const TeamPage: React.FC = () => {
  const principalInvestigator = teamMembers.find(member => member.status === 'pi');

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
      <section className="mb-16">
        <Tabs defaultValue="current" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="current" className="text-base">
              <Users className="mr-2 h-5 w-5" /> Current Members
            </TabsTrigger>
            <TabsTrigger value="alumni" className="text-base">
              <UserCheck className="mr-2 h-5 w-5" /> Lab Alumni
            </TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <CurrentMembersTabContent />
          </TabsContent>
          <TabsContent value="alumni">
            <AlumniTabContent />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default TeamPage;

