import React from 'react';
import { Link as ExternalLinkIcon } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const publicationsData = [
  {
    title: "Novel insights into actin polymerization dynamics during cell migration.",
    authors: "Vance, E., Carter, B., et al.",
    journal: "Journal of Cell Biology",
    year: 2023,
    doi: "10.1083/jcb.202301001",
    link: "#"
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
    link: "https://doi.org/10.1158/0008-5472.CAN-20-0004"
  },
  {
    title: "High-Resolution Imaging of Intermediate Filaments in Stressed Cells.",
    authors: "Kim J., Davis L.",
    journal: "Biophysical Journal",
    year: 2024,
    doi: "10.1016/j.bpj.2024.05.012",
    link: "https://doi.org/10.1016/j.bpj.2024.05.012"
  }
];

const piPreLabPublications = [
  {
    title: "Structural basis of actin filament nucleation by formins.",
    authors: "Vance, E., Thompson, K., Martinez, L.",
    journal: "Nature Structural & Molecular Biology",
    year: 2018,
    doi: "10.1038/s41594-018-0120-3",
    link: "https://doi.org/10.1038/s41594-018-0120-3"
  },
  {
    title: "Dynamic regulation of cytoskeletal networks during development.",
    authors: "Vance, E., Anderson, P., Liu, S.",
    journal: "Cell",
    year: 2017,
    doi: "10.1016/j.cell.2017.08.045",
    link: "https://doi.org/10.1016/j.cell.2017.08.045"
  },
  {
    title: "Mechanotransduction pathways in cellular migration.",
    authors: "Johnson, R., Vance, E., Brown, M.",
    journal: "Science",
    year: 2016,
    doi: "10.1126/science.aaf2121",
    link: "https://doi.org/10.1126/science.aaf2121"
  },
  {
    title: "Molecular motors and cytoskeletal organization in neurons.",
    authors: "Vance, E., White, D., Garcia, A.",
    journal: "Neuron",
    year: 2015,
    doi: "10.1016/j.neuron.2015.04.018",
    link: "https://doi.org/10.1016/j.neuron.2015.04.018"
  },
  {
    title: "Force generation mechanisms in cellular adhesion.",
    authors: "Davis, C., Vance, E., Miller, J.",
    journal: "Nature Cell Biology",
    year: 2014,
    doi: "10.1038/ncb2943",
    link: "https://doi.org/10.1038/ncb2943"
  },
  {
    title: "Cytoskeletal remodeling during epithelial-mesenchymal transition.",
    authors: "Vance, E., Taylor, R., Wilson, H.",
    journal: "Developmental Cell",
    year: 2013,
    doi: "10.1016/j.devcel.2013.02.015",
    link: "https://doi.org/10.1016/j.devcel.2013.02.015"
  }
];

const PublicationsPage: React.FC = () => {
  const sortedPublications = [...publicationsData].sort((a, b) => b.year - a.year);
  const sortedPiPublications = [...piPreLabPublications].sort((a, b) => b.year - a.year);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-10">
        {/* Background Line Art - Scientific Papers/Documents */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M50 100 L200 80 L350 120 L500 90 L650 110 L800 85 L950 105 L1100 95' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='200' cy='80' r='4' fill='%23334155'/%3E%3Ccircle cx='500' cy='90' r='4' fill='%23334155'/%3E%3Ccircle cx='800' cy='85' r='4' fill='%23334155'/%3E%3Crect x='150' y='60' width='30' height='40' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='450' y='70' width='30' height='40' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='750' y='65' width='30' height='40' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Cpath d='M160 70 L170 80 M160 80 L170 70' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M460 80 L470 90 M460 90 L470 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M760 75 L770 85 M760 85 L770 75' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-slate-800">
          Laboratory Publications
        </h1>
        <p className="relative text-lg font-sans text-slate-700 text-center max-w-3xl mx-auto">
          A comprehensive chronological list of our research contributions to the scientific community.
        </p>
      </div>

      {/* Current Lab Publications */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-slate-800">
          Current Laboratory Publications
        </h2>
        <div className="overflow-x-auto bg-white p-1 rounded-lg shadow-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%] font-semibold text-slate-700">Title</TableHead>
                <TableHead className="w-[20%] font-semibold text-slate-700">Authors</TableHead>
                <TableHead className="w-[20%] font-semibold text-slate-700">Journal</TableHead>
                <TableHead className="w-[10%] text-center font-semibold text-slate-700">Year</TableHead>
                <TableHead className="text-left w-[10%] font-semibold text-slate-700">DOI / Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedPublications.map((pub, index) => (
                <TableRow key={index} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-sky-700 py-3">{pub.title}</TableCell>
                  <TableCell className="text-slate-600 py-3">{pub.authors}</TableCell>
                  <TableCell className="text-slate-500 italic py-3">{pub.journal}</TableCell>
                  <TableCell className="text-slate-500 text-center py-3">{pub.year}</TableCell>
                  <TableCell className="py-3">
                    {pub.link && pub.link !== "#" ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 hover:underline font-medium"
                      >
                        {pub.doi} <ExternalLinkIcon size={14} className="ml-1" />
                      </a>
                    ) : (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 hover:underline font-medium"
                      >
                        {pub.doi}
                      </a>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* PI Pre-Lab Publications */}
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-slate-800">
          Principal Investigator's Pre-Laboratory Publications
        </h2>
        <p className="text-base font-sans text-slate-600 mb-6 max-w-4xl">
          Publications by Dr. Eleanor Vance from her research work prior to establishing the current laboratory.
        </p>
        <div className="overflow-x-auto bg-white p-1 rounded-lg shadow-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%] font-semibold text-slate-700">Title</TableHead>
                <TableHead className="w-[20%] font-semibold text-slate-700">Authors</TableHead>
                <TableHead className="w-[20%] font-semibold text-slate-700">Journal</TableHead>
                <TableHead className="w-[10%] text-center font-semibold text-slate-700">Year</TableHead>
                <TableHead className="text-left w-[10%] font-semibold text-slate-700">DOI / Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedPiPublications.map((pub, index) => (
                <TableRow key={index} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-sky-700 py-3">{pub.title}</TableCell>
                  <TableCell className="text-slate-600 py-3">{pub.authors}</TableCell>
                  <TableCell className="text-slate-500 italic py-3">{pub.journal}</TableCell>
                  <TableCell className="text-slate-500 text-center py-3">{pub.year}</TableCell>
                  <TableCell className="py-3">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 hover:underline font-medium"
                    >
                      {pub.doi} <ExternalLinkIcon size={14} className="ml-1" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
