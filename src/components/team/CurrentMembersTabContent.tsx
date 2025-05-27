
import React from 'react';
import { Mail, Linkedin, FlaskConical, Briefcase, Smile } from 'lucide-react';
import { teamMembers } from '@/data/teamData';
import MemberDetailItem from '@/components/team/MemberDetailItem';

const CurrentMembersTabContent: React.FC = () => {
  const currentMembers = teamMembers.filter(member => member.status === 'current');

  return (
    <div className="animate-fade-in-up">
      {currentMembers.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
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
      ) : (
        <p className="text-center text-slate-500 py-8">No current members to display.</p>
      )}
    </div>
  );
};

export default CurrentMembersTabContent;

