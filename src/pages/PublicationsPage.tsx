
import React from 'react';
import { Link as ExternalLinkIcon } from 'lucide-react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const publicationsData = [
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
    link: "https://doi.org/10.1158/0008-5472.CAN-20-0004" // Example of an actual link
  }
  // Adding a new publication for 2024 to test sorting
   ,{
    title: "High-Resolution Imaging of Intermediate Filaments in Stressed Cells.",
    authors: "Kim J., Davis L.",
    journal: "Biophysical Journal",
    year: 2024,
    doi: "10.1016/j.bpj.2024.05.012",
    link: "https://doi.org/10.1016/j.bpj.2024.05.012"
  }
];

const PublicationsPage: React.FC = () => {
  const sortedPublications = [...publicationsData].sort((a, b) => b.year - a.year);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-slate-800">
        Laboratory Publications
      </h1>
      <p className="text-lg font-sans text-slate-700 mb-10 text-center max-w-3xl mx-auto">
        A comprehensive chronological list of our research contributions to the scientific community.
      </p>
      <div className="overflow-x-auto bg-white p-1 rounded-lg shadow-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%] font-semibold text-slate-700">Title</TableHead>
              <TableHead className="w-[20%] font-semibold text-slate-700">Authors</TableHead>
              <TableHead className="w-[20%] font-semibold text-slate-700">Journal</TableHead>
              <TableHead className="w-[10%] text-center font-semibold text-slate-700">Date</TableHead>
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
  );
};

export default PublicationsPage;
