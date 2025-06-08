
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useLabAlumni } from '@/hooks/useTeamData';
import { Skeleton } from '@/components/ui/skeleton';

const AlumniTabContent: React.FC = () => {
  const { data: alumniMembers, isLoading, error } = useLabAlumni();

  if (error) {
    console.error('Error loading alumni members:', error);
  }

  if (isLoading) {
    return (
      <div className="animate-fade-in-up">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] sm:w-[200px]">Name</TableHead>
                <TableHead>Duration in Lab</TableHead>
                <TableHead>Last Role in Lab</TableHead>
                <TableHead>Current Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(3)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-36" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      {alumniMembers && alumniMembers.length > 0 ? (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] sm:w-[200px]">Name</TableHead>
                <TableHead>Duration in Lab</TableHead>
                <TableHead>Last Role in Lab</TableHead>
                <TableHead>Current Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alumniMembers.map((alumnus) => (
                <TableRow key={alumnus.id}>
                  <TableCell className="font-medium text-slate-800">{alumnus.name}</TableCell>
                  <TableCell className="text-slate-600">{alumnus.duration_in_lab || 'N/A'}</TableCell>
                  <TableCell className="text-slate-600">{alumnus.role}</TableCell>
                  <TableCell className="text-slate-600">{alumnus.current_position || 'N/A'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
         <p className="text-center text-slate-500 py-8">No alumni to display.</p>
      )}
    </div>
  );
};

export default AlumniTabContent;
