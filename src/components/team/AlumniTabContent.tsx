
import React from 'react';
import { teamMembers } from '@/data/teamData';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const AlumniTabContent: React.FC = () => {
  const alumniMembers = teamMembers.filter(member => member.status === 'alumni');

  return (
    <div className="animate-fade-in-up">
      {alumniMembers.length > 0 ? (
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
                <TableRow key={alumnus.name}>
                  <TableCell className="font-medium text-slate-800">{alumnus.name}</TableCell>
                  <TableCell className="text-slate-600">{alumnus.alumniDetails?.durationInLab || 'N/A'}</TableCell>
                  <TableCell className="text-slate-600">{alumnus.role}</TableCell>
                  <TableCell className="text-slate-600">{alumnus.alumniDetails?.currentPosition || 'N/A'}</TableCell>
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

