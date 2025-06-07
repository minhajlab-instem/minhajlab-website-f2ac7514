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
    name: "Dr. Maria Rodriguez",
    role: "Postdoctoral Fellow",
    researchArea: "Cellular mechanobiology and force transmission.",
    focus: "Studying how cells generate and respond to mechanical forces through cytoskeletal networks.",
    interests: "Dancing, Cooking, Environmental conservation.",
    imageUrl: "https://images.unsplash.com/photo-1594824720379-48b0a8577a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBzY2llbnRpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "maria.rodriguez@example.com",
    linkedin: "https://linkedin.com/in/mariarodriguez",
    status: 'current',
  },
  {
    name: "James Wilson",
    role: "PhD Student",
    researchArea: "Cytoskeletal dynamics in cell division.",
    focus: "Investigating spindle formation and chromosome segregation mechanisms during mitosis.",
    interests: "Rock climbing, Board games, Coffee brewing.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "james.wilson@example.com",
    linkedin: "https://linkedin.com/in/jameswilson",
    status: 'current',
  },
  {
    name: "Sarah Thompson",
    role: "Project Assistant",
    researchArea: "Laboratory management and technical support.",
    focus: "Maintaining cell cultures, preparing reagents, and supporting experimental workflows.",
    interests: "Hiking, Pottery, Volunteer work.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80",
    email: "sarah.thompson@example.com",
    linkedin: "https://linkedin.com/in/sarahthompson",
    status: 'current',
  },
  {
    name: "Dr. Raj Patel",
    role: "Postdoctoral Fellow",
    researchArea: "Actin polymerization and cell motility.",
    focus: "Understanding how actin dynamics regulate cell migration in 3D environments.",
    interests: "Cricket, Meditation, Travel photography.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=80",
    email: "raj.patel@example.com",
    linkedin: "https://linkedin.com/in/rajpatel",
    status: 'current',
  },
  {
    name: "Emily Chen",
    role: "PhD Student",
    researchArea: "Microtubule organization in polarized cells.",
    focus: "Studying how microtubule networks establish and maintain cellular polarity.",
    interests: "Piano, Sketching, Sustainable living.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80",
    email: "emily.chen@example.com",
    linkedin: "https://linkedin.com/in/emilychen",
    status: 'current',
  },
  {
    name: "Michael O'Connor",
    role: "Project Assistant",
    researchArea: "Data analysis and computational support.",
    focus: "Processing microscopy data and maintaining laboratory databases.",
    interests: "Gaming, Soccer, DIY electronics.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "michael.oconnor@example.com",
    linkedin: "https://linkedin.com/in/michaeloconnor",
    status: 'current',
  },
  {
    name: "Lisa Park",
    role: "PhD Student",
    researchArea: "Intermediate filament networks in disease.",
    focus: "Investigating how intermediate filament mutations contribute to genetic disorders.",
    interests: "Yoga, Gardening, Science communication.",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80",
    email: "lisa.park@example.com",
    linkedin: "https://linkedin.com/in/lisapark",
    status: 'current',
  },
  {
    name: "David Kim",
    role: "PhD Student",
    researchArea: "Cytoskeletal protein interactions and signaling.",
    focus: "Mapping protein-protein interactions within cytoskeletal networks using proteomics approaches.",
    interests: "Basketball, Cooking Korean food, Video editing.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=80",
    email: "david.kim@example.com",
    linkedin: "https://linkedin.com/in/davidkim",
    status: 'current',
  },
  {
    name: "Amanda Foster",
    role: "Project Assistant",
    researchArea: "Equipment maintenance and safety coordination.",
    focus: "Ensuring laboratory equipment is properly maintained and safety protocols are followed.",
    interests: "Theatre, Crossword puzzles, Animal rescue.",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80",
    email: "amanda.foster@example.com",
    linkedin: "https://linkedin.com/in/amandafoster",
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
