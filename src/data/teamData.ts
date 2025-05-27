
import { FlaskConical, Briefcase, Smile } from 'lucide-react'; // Icons for MemberDetailItem if we decide to move it fully here. For now, just data.

export interface TeamMember {
  name: string;
  role: string;
  researchArea?: string;
  focus?: string;
  interests?: string;
  imageUrl: string;
  email: string;
  linkedin: string;
  status: 'pi' | 'current' | 'alumni';
  cvUrl?: string;
  alumniDetails?: {
    graduationYear?: string;
    currentPosition?: string;
    durationInLab?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Eleanor Vance",
    role: "Principal Investigator",
    researchArea: "Actin dynamics and cell migration.",
    focus: "Cytoskeleton research with over 20 years of experience, particularly in how cellular structures drive cell behavior.",
    interests: "Mentoring young scientists, exploring new microscopy techniques.",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ec527868148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NpZW50aXN0JTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "eleanor.vance@example.com",
    linkedin: "https://linkedin.com/in/eleanorvance",
    status: 'pi',
    cvUrl: "/cv/eleanor_vance_cv.pdf"
  },
  {
    name: "Dr. Ben Carter",
    role: "Postdoctoral Fellow",
    researchArea: "Microtubules in neuronal development and disease.",
    focus: "Investigating the role of microtubules using advanced microscopy techniques.",
    interests: "Photography, Cycling, Sci-fi literature.",
    imageUrl: "https://images.unsplash.com/photo-1618085222100-93f0c1f790cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaWVudGlzdCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80",
    email: "ben.carter@example.com",
    linkedin: "https://linkedin.com/in/bencarter",
    status: 'current',
  },
  {
    name: "Aisha Khan",
    role: "PhD Student",
    researchArea: "Mechanics of intermediate filaments and cellular integrity.",
    focus: "Utilizing a combination of experimental and computational approaches to study filament contribution to cell structure.",
    interests: "Reading, Baking, Coding.",
    imageUrl: "https://images.unsplash.com/photo-1571175220097-0689e1ab3538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVudGlzdCUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=80",
    email: "aisha.khan@example.com",
    linkedin: "https://linkedin.com/in/aishakhan",
    status: 'current',
  },
  {
    name: "Samuel Green",
    role: "Former Lab Technician",
    researchArea: "Lab management and technical support (during tenure).",
    focus: "Ensured smooth lab operations and resource management (during tenure).",
    imageUrl: "https://images.unsplash.com/photo-1622109060009-075a1547c438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhYiUyMHRlY2huaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "samuel.green.alumni@example.com",
    linkedin: "https://linkedin.com/in/samuelgreen",
    status: 'alumni',
    alumniDetails: {
      graduationYear: "2023",
      currentPosition: "Research Scientist at BioSynth Inc.",
      durationInLab: "2021-2023"
    }
  },
  {
    name: "Dr. Olivia Chen",
    role: "Former Postdoctoral Fellow",
    researchArea: "Mechanotransduction (during tenure).",
    focus: "Studied how cells sense and respond to mechanical stimuli (during tenure).",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
    email: "olivia.chen.alumni@example.com",
    linkedin: "https://linkedin.com/in/oliviachen",
    status: 'alumni',
    alumniDetails: {
      graduationYear: "2022",
      currentPosition: "Assistant Professor, Northwood University",
      durationInLab: "2019-2022"
    }
  }
];
