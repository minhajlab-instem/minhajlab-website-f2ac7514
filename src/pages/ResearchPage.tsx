
import React from 'react';
import { Link as LinkIcon, Users, Heart, University, Building, Globe, Play, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResearchPage: React.FC = () => {
  const researchScales = [
    {
      title: "Molecular Scale",
      subtitle: "Single Protein Dynamics & Interactions",
      description: "At the molecular level, we investigate the structural and dynamic properties of individual cytoskeletal proteins. Our research focuses on actin monomers, tubulin dimers, and intermediate filament subunits, examining how these building blocks assemble and interact through advanced biophysical techniques including single-molecule microscopy, atomic force microscopy, and cryo-electron microscopy.",
      detailedDescription: "We employ cutting-edge techniques to understand protein conformational changes, binding kinetics, and the molecular mechanisms underlying cytoskeletal protein assembly. Our work reveals how post-translational modifications, pH changes, and ionic strength affect protein behavior at the nanoscale.",
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Cryo-EM structure of actin filament revealing atomic-level detail of protein interactions",
          credit: "Structural Biology Core Facility"
        },
        {
          type: "video",
          url: "https://player.vimeo.com/video/123456789",
          caption: "Molecular dynamics simulation showing actin monomer conformational changes during ATP hydrolysis",
          credit: "Computational Biology Lab"
        }
      ],
      publications: [
        {
          shortForm: "Vance et al., Nat Struct Mol Biol (2018)",
          fullTitle: "Structural basis of actin filament nucleation by formins.",
          link: "/publications"
        }
      ],
      color: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Mesoscopic Scale", 
      subtitle: "Filament Networks & Bundles",
      description: "At the mesoscopic scale, we study how individual cytoskeletal filaments organize into higher-order structures such as bundles, networks, and crosslinked assemblies. This intermediate scale bridges single-molecule behavior with cellular-level functions, focusing on collective properties that emerge from filament-filament interactions.",
      detailedDescription: "Our research examines how crosslinking proteins, motor proteins, and physical constraints shape filament organization. We use reconstitution assays, advanced fluorescence microscopy, and computational modeling to understand network mechanics, bundling dynamics, and the role of molecular crowding in filament assembly.",
      media: [
        {
          type: "image", 
          url: "https://images.unsplash.com/photo-1628508364752-5550053663cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Fluorescence microscopy image of reconstituted actin networks with crosslinking proteins",
          credit: "Advanced Imaging Center"
        },
        {
          type: "video",
          url: "https://player.vimeo.com/video/234567890", 
          caption: "Time-lapse microscopy showing dynamic reorganization of microtubule bundles",
          credit: "Live Cell Imaging Lab"
        }
      ],
      publications: [
        {
          shortForm: "Carter et al., Dev Cell (2022)",
          fullTitle: "The role of microtubule-associated proteins in neurogenesis.",
          link: "/publications"
        }
      ],
      color: "from-green-50 to-emerald-50",
      iconColor: "text-green-600"
    },
    {
      title: "Cellular Scale",
      subtitle: "Whole Cell Cytoskeleton Organization",
      description: "At the cellular scale, we investigate how cytoskeletal networks coordinate to control cell shape, motility, and division. Our research examines the interplay between actin, microtubules, and intermediate filaments in live cells, focusing on how these systems respond to mechanical forces, chemical signals, and spatial constraints.",
      detailedDescription: "We use live-cell imaging, optogenetics, and mechanical perturbations to understand how cells organize their cytoskeleton in space and time. Our work reveals how cytoskeletal crosstalk enables cells to adapt their structure and function to environmental demands, including migration, adhesion, and response to mechanical stress.",
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Immunofluorescence image showing actin (red), microtubules (green), and nucleus (blue) in migrating cell",
          credit: "Cell Biology Core"
        },
        {
          type: "video",
          url: "https://player.vimeo.com/video/345678901",
          caption: "Live-cell imaging of cytoskeletal dynamics during cell division",
          credit: "Dynamic Microscopy Lab"
        }
      ],
      publications: [
        {
          shortForm: "Vance et al., J Cell Biol (2023)",
          fullTitle: "Novel insights into actin polymerization dynamics during cell migration.",
          link: "/publications"
        },
        {
          shortForm: "Khan et al., Nat Commun (2021)", 
          fullTitle: "Mechanical stress resilience mediated by intermediate filaments.",
          link: "/publications"
        }
      ],
      color: "from-purple-50 to-violet-50", 
      iconColor: "text-purple-600"
    },
    {
      title: "Tissue/Organ Scale",
      subtitle: "Multicellular Cytoskeletal Coordination",
      description: "At the tissue and organ scale, we explore how cytoskeletal organization coordinates across multiple cells to enable collective behaviors such as tissue morphogenesis, wound healing, and organ function. Our research investigates how mechanical forces propagate through tissue-level cytoskeletal networks and how cell-cell junctions transmit cytoskeletal information.",
      detailedDescription: "We study tissue-level cytoskeletal organization using organoids, tissue explants, and in vivo imaging. Our work focuses on how mechanical stress, biochemical gradients, and cell-cell communication coordinate cytoskeletal remodeling across multiple cells to achieve tissue-level functions and maintain homeostasis.",
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1606037474310-e089fd5845a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Confocal microscopy of tissue section showing coordinated cytoskeletal organization across multiple cells",
          credit: "Tissue Imaging Facility"
        },
        {
          type: "video", 
          url: "https://player.vimeo.com/video/456789012",
          caption: "Time-lapse imaging of collective cell migration during wound healing",
          credit: "Developmental Biology Lab"
        }
      ],
      publications: [
        {
          shortForm: "Vance et al., Cancer Res (2020)",
          fullTitle: "Cytoskeletal defects in cancer progression.",
          link: "/publications"
        }
      ],
      color: "from-orange-50 to-red-50",
      iconColor: "text-orange-600" 
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
      {/* Title with Background Illustration */}
      <div className="relative mb-16">
        {/* Background Line Art - Cytoskeletal Network */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M100 100 Q200 60 300 100 T500 100 T700 100 T900 100 T1100 100' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='150' cy='80' r='6' fill='%23334155'/%3E%3Ccircle cx='250' cy='120' r='6' fill='%23334155'/%3E%3Ccircle cx='350' cy='80' r='6' fill='%23334155'/%3E%3Ccircle cx='450' cy='120' r='6' fill='%23334155'/%3E%3Ccircle cx='550' cy='80' r='6' fill='%23334155'/%3E%3Ccircle cx='650' cy='120' r='6' fill='%23334155'/%3E%3Ccircle cx='750' cy='80' r='6' fill='%23334155'/%3E%3Ccircle cx='850' cy='120' r='6' fill='%23334155'/%3E%3Ccircle cx='950' cy='80' r='6' fill='%23334155'/%3E%3Cpath d='M150 74 L150 86 M144 80 L156 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M350 74 L350 86 M344 80 L356 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M550 74 L550 86 M544 80 L556 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M750 74 L750 86 M744 80 L756 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M950 74 L950 86 M944 80 L956 80' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-6 text-slate-800">
          Cytoskeleton Research Across Scales
        </h1>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-lg font-sans text-slate-700 mb-4">
            Our laboratory investigates the cytoskeleton across multiple length scales, from individual molecules to tissues and organs. 
            We employ a multidisciplinary approach combining structural biology, biophysics, cell biology, and computational modeling 
            to understand how cytoskeletal networks drive essential biological processes.
          </p>
          <p className="text-base font-sans text-slate-600">
            By studying cytoskeletal organization and dynamics at different scales, we aim to uncover the fundamental principles 
            governing cellular structure, mechanics, and function in health and disease.
          </p>
        </div>
      </div>

      {/* Research Scales */}
      <div className="space-y-16 mb-20">
        {researchScales.map((scale, index) => (
          <div key={index} className={`bg-gradient-to-r ${scale.color} rounded-2xl p-8 shadow-lg`}>
            {/* Scale Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${scale.iconColor.replace('text-', 'bg-')}`}></div>
                <h2 className="text-3xl font-heading font-bold text-slate-800">{scale.title}</h2>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-4">{scale.subtitle}</h3>
              <p className="text-lg font-sans text-slate-700 leading-relaxed mb-4">{scale.description}</p>
              <p className="text-base font-sans text-slate-600 leading-relaxed">{scale.detailedDescription}</p>
            </div>

            {/* Media Content */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {scale.media.map((item, mediaIndex) => (
                <div key={mediaIndex} className="bg-white rounded-lg p-4 shadow-md">
                  {item.type === 'image' ? (
                    <div className="relative">
                      <img 
                        src={item.url} 
                        alt={item.caption}
                        className="w-full h-48 object-cover rounded-lg mb-3"
                      />
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

            {/* Related Publications */}
            {scale.publications && scale.publications.length > 0 && (
              <div className="bg-white bg-opacity-70 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Related Publications
                </h4>
                <div className="space-y-2">
                  {scale.publications.map((pub, pubIndex) => (
                    <div key={pubIndex}>
                      <a 
                        href={pub.link}
                        className="inline-flex items-center text-sky-700 hover:text-sky-900 hover:underline font-medium"
                      >
                        {pub.shortForm} <LinkIcon size={14} className="ml-1" />
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
