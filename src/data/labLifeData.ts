
export interface LabPhoto {
  id: string;
  imageUrl: string;
  altText: string;
  description: string;
  year: number;
  tags: string[];
}

export const labPhotosData: LabPhoto[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    altText: 'Team at a conference',
    description: 'The team presenting research findings at the annual Cell Biology conference.',
    year: 2024,
    tags: ['conference', 'presentation', 'team'],
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    altText: 'Lab members working together',
    description: 'Collaborative session in the lab, working on a new experimental setup.',
    year: 2023,
    tags: ['collaboration', 'lab work', 'experiment'],
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    altText: 'Lab retreat by the lake',
    description: 'Annual lab retreat focused on team building and strategic planning, held by the lake.',
    year: 2023,
    tags: ['retreat', 'team building', 'nature'],
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    altText: 'Outdoor team activity',
    description: 'Enjoying an outdoor activity during a summer lab social event.',
    year: 2024,
    tags: ['social', 'outdoor', 'team'],
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    altText: 'Lab celebration',
    description: 'Celebrating a major grant approval with the entire team.',
    year: 2022,
    tags: ['celebration', 'grant', 'team achievement'],
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    altText: 'Workshop session',
    description: 'Intensive workshop on new microscopy techniques.',
    year: 2023,
    tags: ['workshop', 'training', 'microscopy'],
  }
];

