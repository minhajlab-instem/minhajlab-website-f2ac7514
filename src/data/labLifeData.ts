
export interface EventPhoto {
  imageUrl: string;
  altText: string;
}

export interface LabEvent {
  id: string;
  title: string;
  description: string;
  year: number;
  tags: string[];
  photos: EventPhoto[];
}

export const labEventsData: LabEvent[] = [
  {
    id: 'event1',
    title: 'Annual Conference Presentations 2024',
    description: 'The team showcasing research and networking at key conferences.',
    year: 2024,
    tags: ['conference', 'presentation', 'team', 'research'],
    photos: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        altText: 'Team at a conference',
      },
      // Add more photos for this event if available
    ],
  },
  {
    id: 'event2',
    title: 'Lab Collaboration & Experiments 2023',
    description: 'Highlights from our collaborative sessions and experimental work in the lab.',
    year: 2023,
    tags: ['collaboration', 'lab work', 'experiment'],
    photos: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        altText: 'Lab members working together',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        altText: 'Workshop session on microscopy',
      },
    ],
  },
  {
    id: 'event3',
    title: 'Team Building & Socials',
    description: 'Memorable moments from our lab retreats and social gatherings.',
    year: 2023, // Can be an ongoing event or pick a representative year
    tags: ['retreat', 'team building', 'nature', 'social', 'outdoor'],
    photos: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        altText: 'Lab retreat by the lake',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        altText: 'Outdoor team activity',
      },
    ],
  },
  {
    id: 'event4',
    title: 'Lab Achievements & Celebrations',
    description: 'Celebrating milestones, grant approvals, and team successes.',
    year: 2022,
    tags: ['celebration', 'grant', 'team achievement'],
    photos: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        altText: 'Lab celebration for grant approval',
      },
    ],
  },
  // Add more events as needed, grouping existing photos or adding new ones
];
