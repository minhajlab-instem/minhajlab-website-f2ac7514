
import React from 'react';
import { Link as ExternalLinkIcon } from 'lucide-react'; // Using Link icon for external links

const publications = [
  {
    title: "Novel insights into actin polymerization dynamics during cell migration.",
    authors: "Vance, E., Carter, B., et al.",
    journal: "Journal of Cell Biology",
    year: 2023,
    doi: "10.1083/jcb.202301001",
    link: "#" // Placeholder link
  },
  {
    title: "The role of microtubule-associated proteins in neurogenesis.",
    authors: "Carter, B., Khan, A., Vance, E.",
    journal: "Developmental Cell",
    year: 2022,
    doi: "10.1016/j.devcel.202203002",
    link: "#"
  },
  {
    title: "Mechanical stress resilience mediated by intermediate filaments.",
    authors: "Khan, A., Green, S., Vance, E.",
    journal: "Nature Communications",
    year: 2021,
    doi: "10.1038/s41467-021-21003-x",
    link: "#"
  },
  {
    title: "Cytoskeletal defects in cancer progression.",
    authors: "Vance, E., et al.",
    journal: "Cancer Research",
    year: 2020,
    doi: "10.1158/0008-5472.CAN-20-0004",
    link: "#"
  }
];

const PublicationsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
        Our Publications
      </h1>
      <p className="text-lg font-sans text-slate-700 mb-12 text-center max-w-3xl mx-auto">
        Explore our contributions to the scientific literature. We are committed to sharing our findings with the broader research community.
      </p>
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-heading font-semibold mb-1 text-sky-700">{pub.title}</h2>
            <p className="font-sans text-sm text-slate-600 mb-1">{pub.authors}</p>
            <p className="font-sans text-sm text-slate-500 italic mb-3">
              {pub.journal}, {pub.year}.
            </p>
            {pub.link && pub.link !== "#" ? (
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 hover:underline font-semibold"
              >
                View Publication <ExternalLinkIcon size={16} className="ml-1" />
              </a>
            ) : (
              <span className="text-sm text-slate-400">DOI: {pub.doi} (Link coming soon)</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;
