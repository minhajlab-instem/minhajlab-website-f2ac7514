import React from 'react';
import { Link as ExternalLinkIcon } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Skeleton } from '@/components/ui/skeleton';
import { useCurrentLabPublications, usePreLabPublications } from '@/hooks/useTeamData';
const PublicationsPage: React.FC = () => {
  const {
    data: currentLabPubs,
    isLoading: currentLabLoading,
    error: currentLabError
  } = useCurrentLabPublications();
  const {
    data: preLabPubs,
    isLoading: preLabLoading,
    error: preLabError
  } = usePreLabPublications();
  if (currentLabError) {
    console.error('Error loading current lab publications:', currentLabError);
  }
  if (preLabError) {
    console.error('Error loading pre-lab publications:', preLabError);
  }
  const isLoading = currentLabLoading || preLabLoading;
  const PublicationTable = ({
    publications,
    isLoading
  }: {
    publications: any[] | undefined;
    isLoading: boolean;
  }) => {
    if (isLoading) {
      return <div className="overflow-x-auto bg-white p-1 rounded-lg shadow-lg">
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
              {[...Array(3)].map((_, index) => <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-36" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </div>;
    }
    if (!publications || publications.length === 0) {
      return <div className="text-center py-8">
          <p className="text-slate-500">No publications to display.</p>
        </div>;
    }
    return <div className="overflow-x-auto bg-white p-1 rounded-lg shadow-lg">
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
            {publications.map(pub => <TableRow key={pub.id} className="hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-sky-700 py-3">{pub.title}</TableCell>
                <TableCell className="text-slate-600 py-3">{pub.authors}</TableCell>
                <TableCell className="text-slate-500 italic py-3">{pub.journal}</TableCell>
                <TableCell className="text-slate-500 text-center py-3">{pub.year}</TableCell>
                <TableCell className="py-3">
                  {pub.link && pub.link !== "#" ? <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 hover:underline font-medium">
                      {pub.doi} <ExternalLinkIcon size={14} className="ml-1" />
                    </a> : pub.doi ? <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 hover:underline font-medium">
                      {pub.doi}
                    </a> : <span className="text-slate-400">N/A</span>}
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  };
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-10">
        {/* Background Line Art - Scientific Papers/Documents */}
        <div className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M50 100 L200 80 L350 120 L500 90 L650 110 L800 85 L950 105 L1100 95' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='200' cy='80' r='4' fill='%23334155'/%3E%3Ccircle cx='500' cy='90' r='4' fill='%23334155'/%3E%3Ccircle cx='800' cy='85' r='4' fill='%23334155'/%3E%3Crect x='150' y='60' width='30' height='40' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='450' y='70' width='30' height='40' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='750' y='65' width='30' height='40' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Cpath d='M160 70 L170 80 M160 80 L170 70' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M460 80 L470 90 M460 90 L470 80' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M760 75 L770 85 M760 85 L770 75' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`
      }} />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-slate-800">Publications</h1>
        <p className="relative text-lg font-sans text-slate-700 text-center max-w-3xl mx-auto">
          A comprehensive chronological list of our research contributions to the scientific community.
        </p>
      </div>

      {/* Current Lab Publications */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-slate-800">
          Current Laboratory Publications
        </h2>
        <PublicationTable publications={currentLabPubs} isLoading={currentLabLoading} />
      </div>

      {/* PI Pre-Lab Publications */}
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-slate-800">
          Principal Investigator's Pre-Laboratory Publications
        </h2>
        <p className="text-base font-sans text-slate-600 mb-6 max-w-4xl">
          Publications by Dr. Eleanor Vance from her research work prior to establishing the current laboratory.
        </p>
        <PublicationTable publications={preLabPubs} isLoading={preLabLoading} />
      </div>
    </div>;
};
export default PublicationsPage;