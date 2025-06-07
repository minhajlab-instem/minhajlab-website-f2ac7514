
import React from 'react';
import { Link as LinkIcon, Users, Heart, University, Building, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResearchPage: React.FC = () => {
  const researchAreas = [
    {
      title: "Actin Dynamics in Cell Motility",
      description: "Investigating the role of actin filaments and associated proteins in driving cell movement and shape changes. We use advanced live-cell imaging and biochemical reconstitution to dissect these complex processes.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VsbCUyMGJpb2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      publicationTitle: "Novel insights into actin polymerization dynamics during cell migration.",
      publicationLink: "#", // Placeholder, ideally link to the publication on PublicationsPage or external DOI
      publicationDoi: "10.1083/jcb.202301001" // Matching an example publication
    },
    {
      title: "Microtubule Organization and Function",
      description: "Exploring how microtubules are organized within cells to support intracellular transport, cell division, and ciliary function. Our focus includes motor proteins and microtubule-associated proteins (MAPs).",
      image: "https://images.unsplash.com/photo-1628508364752-5550053663cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pY3Jvc2NvcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      publicationTitle: "The role of microtubule-associated proteins in neurogenesis.",
      publicationLink: "#", // Placeholder
      publicationDoi: "10.1016/j.devcel.202203002"
    },
    {
      title: "Intermediate Filaments and Cellular Mechanics",
      description: "Studying the structural roles of intermediate filaments in providing mechanical stability to cells and tissues, and their involvement in disease pathogenesis.",
      image: "https://images.unsplash.com/photo-1606037474310-e089fd5845a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpb21lY2hhbmljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
      // No publication linked for this example
    },
    {
      title: "Cytoskeleton in Disease",
      description: "Investigating how dysregulation of cytoskeletal components contributes to various human diseases, including cancer, neurodegenerative disorders, and infectious diseases, with an aim to identify novel therapeutic targets.",
      image: "https://images.unsplash.com/photo-1532187643623-db673ead3a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzZWFzZSUyMHJlc2VhcmNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      publicationTitle: "Cytoskeletal defects in cancer progression.",
      publicationLink: "#", // Placeholder
      publicationDoi: "10.1158/0008-5472.CAN-20-0004"
    }
  ];

  const collaborators = [
    {
      name: "Dr. Maria Santos",
      institution: "Stanford University",
      department: "Department of Cell Biology",
      expertise: "Cytoskeleton dynamics in cancer cells",
      collaboration: "Joint research on microtubule organization",
      website: "https://stanford.edu",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
    },
    {
      name: "Dr. James Chen",
      institution: "MIT",
      department: "Department of Biological Engineering",
      expertise: "Live-cell imaging and microscopy",
      collaboration: "Development of advanced imaging techniques",
      website: "https://mit.edu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
    },
    {
      name: "Dr. Anna Mueller",
      institution: "Max Planck Institute",
      department: "Department of Molecular Cell Biology",
      expertise: "Protein dynamics and structural biology",
      collaboration: "Structural analysis of cytoskeletal proteins",
      website: "https://mpi.de",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
    },
    {
      name: "Dr. Raj Patel",
      institution: "University of Cambridge",
      department: "Department of Biochemistry",
      expertise: "Computational modeling of cellular processes",
      collaboration: "Mathematical modeling of cytoskeleton networks",
      website: "https://cambridge.ac.uk",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
    }
  ];

  const fundingAgencies = [
    {
      name: "National Institutes of Health",
      abbreviation: "NIH",
      type: "Federal Government",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: "bg-blue-100"
    },
    {
      name: "National Science Foundation",
      abbreviation: "NSF",
      type: "Federal Government",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: "bg-green-100"
    },
    {
      name: "Human Frontier Science Program",
      abbreviation: "HFSP",
      type: "International Organization",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: "bg-purple-100"
    },
    {
      name: "American Cancer Society",
      abbreviation: "ACS",
      type: "Non-profit Organization",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: "bg-pink-100"
    },
    {
      name: "Chan Zuckerberg Initiative",
      abbreviation: "CZI",
      type: "Philanthropic Foundation",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: "bg-orange-100"
    },
    {
      name: "European Research Council",
      abbreviation: "ERC",
      type: "International Government",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: "bg-indigo-100"
    },
    {
      name: "Gates Foundation",
      abbreviation: "BMGF",
      type: "Philanthropic Foundation",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: "bg-yellow-100"
    },
    {
      name: "Wellcome Trust",
      abbreviation: "WT",
      type: "Charitable Foundation",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: "bg-teal-100"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
        Our Research Focus
      </h1>
      <p className="text-lg font-sans text-slate-700 mb-12 text-center max-w-3xl mx-auto">
        Our laboratory is at the forefront of cytoskeleton research, utilizing a multidisciplinary approach to unravel the complex mechanisms governing cellular structure and function. We explore how these dynamic protein networks drive essential biological processes.
      </p>
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {researchAreas.map((area, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src={area.image} alt={area.title} className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl font-heading font-semibold mb-3 text-sky-700">{area.title}</h2>
            <p className="font-sans text-slate-600 flex-grow mb-4">{area.description}</p>
            {area.publicationTitle && (
              <div className="mt-auto pt-4 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-700 mb-1">Related Publication:</h3>
                {area.publicationLink && area.publicationLink !== "#" ? (
                  <a 
                    href={area.publicationLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 hover:underline font-medium"
                  >
                    {area.publicationTitle} <LinkIcon size={14} className="ml-1" />
                  </a>
                ) : (
                  <p className="text-sm text-slate-500">
                    {area.publicationTitle} (DOI: {area.publicationDoi || 'N/A'})
                  </p>
                )}
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
          {collaborators.map((collaborator, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <img 
                    src={collaborator.image} 
                    alt={collaborator.name} 
                    className="w-16 h-16 rounded-full object-cover" 
                  />
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
              {fundingAgencies.map((agency, index) => (
                <div key={index} className={`${agency.color} rounded-lg p-3 text-center hover:shadow-md transition-shadow`}>
                  <img 
                    src={agency.image} 
                    alt={agency.name}
                    className="w-12 h-12 mx-auto mb-2 rounded-full object-cover"
                  />
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
