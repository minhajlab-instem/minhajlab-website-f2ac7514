import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Download, FlaskConical, Briefcase, Smile, Users, UserCheck, Camera } from 'lucide-react';
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
      {/* Title with Background Illustration */}
      <div className="relative mb-12">
        {/* Background Line Art - Team/People Network */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Ccircle cx='200' cy='60' r='20' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='400' cy='80' r='20' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='600' cy='50' r='20' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='800' cy='90' r='20' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='1000' cy='70' r='20' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M220 60 L380 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M420 80 L580 50' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M620 50 L780 90' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M820 90 L980 70' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M200 80 L400 100' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M600 70 L800 110' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M195 55 L195 65 M205 55 L205 65' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M395 75 L395 85 M405 75 L405 85' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M595 45 L595 55 M605 45 L605 55' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-6 text-slate-800">
          Meet Our Team
        </h1>
        <p className="relative text-lg font-sans text-slate-700 text-center max-w-3xl mx-auto">
          Our lab thrives on collaboration and diverse expertise. Get to know the dedicated individuals driving our research forward.
        </p>
      </div>

      {/* Principal Investigator Section */}
      {principalInvestigator && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-sky-700 mb-8 text-center">
            Principal Investigator
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <img 
                src={principalInvestigator.imageUrl} 
                alt={principalInvestigator.name} 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md mb-4"
              />
              
              <div className="flex justify-center space-x-4 mb-4">
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

      {/* Lab Life Section Link */}
      <section className="mt-16 py-12 bg-slate-100 rounded-lg shadow-inner">
        <div className="text-center max-w-2xl mx-auto">
          <Camera className="h-12 w-12 text-sky-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-slate-800 mb-4">
            Discover Our Lab Life
          </h2>
          <p className="text-lg font-sans text-slate-600 mb-6">
            Explore photos from our events, retreats, and everyday life in the lab. See what makes our team unique!
          </p>
          <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
            <Link to="/lab-life">
              View Lab Life Gallery
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
