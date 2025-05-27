
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { teamMembers, TeamMember } from '@/data/teamData';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const AlumniPage: React.FC = () => {
  const alumniMembers = teamMembers.filter(member => member.status === 'alumni');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <Button variant="outline" size="sm" asChild className="mb-8">
        <Link to="/team">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Team Page
        </Link>
      </Button>
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 text-slate-800">
        Lab Alumni
      </h1>
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
         <p className="text-center text-slate-500">No alumni to display.</p>
      )}
    </div>
  );
};

export default AlumniPage;
