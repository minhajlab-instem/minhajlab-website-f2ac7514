
import React from 'react';
import { Link as LinkIcon, Users, Heart, University, Building, Globe, Play, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useResearchScales, useCollaborators, useFundingAgencies } from '@/hooks/useTeamData';

const ResearchPage: React.FC = () => {
  const { data: researchScales, isLoading: isLoadingScales } = useResearchScales();
  const { data: collaborators, isLoading: isLoadingCollaborators } = useCollaborators();
  const { data: fundingAgencies, isLoading: isLoadingFunding } = useFundingAgencies();

  if (isLoadingScales || isLoadingCollaborators || isLoadingFunding) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
        <div className="text-center">Loading research content...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-16">
        {/* Background Line Art - Cytoskeletal Network */}
        <div className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M100 100 Q200 60 300 100 T500 100 T700 100 T900 100 T1100 100' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='150' cy='80' r='6' fill='%23334155'/%3E%3Ccircle cx='250' cy='120' r='6' fill='%23334155'/%3E%3Ccircle cx='350' cy='80' r='6' fill='%23334155'/%3E%3Ccircle cx='450' cy='120' r='6' fill='%23334155'/%3E%3Ccircle cx='550' cy='80' r='6' fill='%23334155'/%3E%3Ccircle cx='650' cy='120' r='6' fill='%23334155'/%3E%3Ccircle cx='750' cy='80' r='6' fill='%23334155'/%3E%3Ccircle cx='850' cy='120' r='6' fill='%23334155'/%3E%3Ccircle cx='950' cy='80' r='6' fill='%23334155'/%3E%3Cpath d='M150 74 L150 86 M144 80 L156 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M350 74 L350 86 M344 80 L356 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M550 74 L550 86 M544 80 L556 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M750 74 L750 86 M744 80 L756 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M950 74 L950 86 M944 80 L956 80' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`
      }} />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-6 text-slate-800">
          Cytoskeleton Research Across Scales
        </h1>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-lg font-sans text-slate-700 mb-4">Eukaryotic biological motions across orders of magnitude scale involve cytoskeleton elements. Mutations in them are frequently associated with human pathology, e.g., cardiomyopathies, neurological disorders and ciliopathies. Our lab studies the cytoskeleton systems using cryoEM, biochemistry, cell biology and microscopy, thereby bridging the knowledge gap between clinical findings and molecular mechanism. </p>
          <p className="text-base font-sans text-slate-600">
            By studying cytoskeletal organization and dynamics at different scales, we aim to uncover the fundamental principles 
            governing cellular structure, mechanics, and function in health and disease.
          </p>
        </div>
      </div>

      {/* Research Scales */}
      <div className="space-y-16 mb-20">
        {researchScales?.map((scale, index) => (
          <div key={scale.id} className={`bg-gradient-to-r ${scale.color} rounded-2xl p-8 shadow-lg`}>
            {/* Scale Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${scale.icon_color.replace('text-', 'bg-')}`}></div>
                <h2 className="text-3xl font-heading font-bold text-slate-800">{scale.title}</h2>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-4">{scale.subtitle}</h3>
              <p className="text-lg font-sans text-slate-700 leading-relaxed mb-4">{scale.description}</p>
              <p className="text-base font-sans text-slate-600 leading-relaxed">{scale.detailed_description}</p>
            </div>

            {/* Media Content */}
            {scale.research_media && scale.research_media.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {scale.research_media
                  .sort((a, b) => a.display_order - b.display_order)
                  .map((item, mediaIndex) => (
                    <div key={item.id} className="bg-white rounded-lg p-4 shadow-md">
                      {item.type === 'image' ? (
                        <div className="relative">
                          <img src={item.url} alt={item.caption} className="w-full h-48 object-cover rounded-lg mb-3" />
                          <div className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1">
                            <ImageIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="w-full h-48 bg-gray-900 rounded-lg mb-3 flex items-center justify-center">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                          <div className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                      <p className="text-sm font-medium text-slate-700 mb-1">{item.caption}</p>
                      <p className="text-xs text-slate-500">Credit: {item.credit}</p>
                    </div>
                  ))}
              </div>
            )}

            {/* Related Publications */}
            {scale.research_publications && scale.research_publications.length > 0 && (
              <div className="bg-white bg-opacity-70 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Related Publications
                </h4>
                <div className="space-y-2">
                  {scale.research_publications
                    .sort((a, b) => a.display_order - b.display_order)
                    .map((pub) => (
                      <div key={pub.id}>
                        <a href={pub.link} className="inline-flex items-center text-sky-700 hover:text-sky-900 hover:underline font-medium">
                          {pub.short_form} <LinkIcon size={14} className="ml-1" />
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Collaborators & Well-wishers */}
      <section className="mb-16">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Users className="h-6 w-6 text-sky-700" />
          <h2 className="text-3xl font-heading font-bold text-slate-800">Collaborators & Well-wishers</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {collaborators?.map((collaborator) => (
            <Card key={collaborator.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <img src={collaborator.image_url} alt={collaborator.name} className="w-16 h-16 rounded-full object-cover" />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{collaborator.name}</CardTitle>
                    <CardDescription className="text-sm">
                      <div className="flex items-center space-x-1 mb-1">
                        <University className="h-3 w-3" />
                        <span>{collaborator.institution}</span>
                      </div>
                      <div className="text-xs text-slate-500">{collaborator.department}</div>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Funding Acknowledgement */}
      <section>
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Heart className="h-6 w-6 text-sky-700" />
          <h2 className="text-3xl font-heading font-bold text-slate-800">Funding Acknowledgement</h2>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recognition of Support</CardTitle>
            <CardDescription>
              We gratefully acknowledge the generous support from our funding partners
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Our research is made possible through the generous support of federal agencies, international organizations, 
              philanthropic foundations, and private donors who share our vision of advancing cytoskeletal research. 
              We are deeply grateful to all our funding partners for their commitment to scientific discovery and 
              their investment in the future of biomedical research. Their support enables us to push the boundaries 
              of knowledge and contribute to the global scientific community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {fundingAgencies?.map((agency) => (
                <div key={agency.id} className={`${agency.color} rounded-lg p-3 text-center hover:shadow-md transition-shadow`}>
                  <img src={agency.image_url} alt={agency.name} className="w-12 h-12 mx-auto mb-2 rounded-full object-cover" />
                  <div className="text-xs font-semibold text-slate-700">{agency.abbreviation}</div>
                  <div className="text-xs text-slate-500 mt-1">{agency.type}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ResearchPage;
