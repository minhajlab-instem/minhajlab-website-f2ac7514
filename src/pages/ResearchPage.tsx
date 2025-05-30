
import React from 'react';
import { Link as LinkIcon } from 'lucide-react'; // Using Link icon for external links

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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
        Our Research Focus
      </h1>
      <p className="text-lg font-sans text-slate-700 mb-12 text-center max-w-3xl mx-auto">
        Our laboratory is at the forefront of cytoskeleton research, utilizing a multidisciplinary approach to unravel the complex mechanisms governing cellular structure and function. We explore how these dynamic protein networks drive essential biological processes.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
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
    </div>
  );
};

export default ResearchPage;
