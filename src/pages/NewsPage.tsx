
import React from 'react';
import { Calendar, Award, Users, Newspaper, Twitter, ExternalLink, ChevronDown, Filter, CalendarDays } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  timestamp: Date; 
  year: number;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: string; 
  summary: string;
  image?: string;
  link?: {
    url: string;
    text: string;
    isExternal: boolean;
  };
  tags: string[];
}

// Enhanced news items data with tags and years
const newsItems: NewsItem[] = [
  {
    id: "grant-2025",
    title: "Dr. Vance Receives Prestigious Research Grant",
    date: "May 15, 2025",
    timestamp: new Date(2025, 4, 15),
    year: 2025,
    category: "Award",
    icon: Award,
    badge: "Research Grant",
    summary: "Our Principal Investigator, Dr. Eleanor Vance, has been awarded a significant grant to further investigate cytoskeletal dynamics in neurodegenerative diseases. This funding will enable groundbreaking research into therapeutic targets.",
    image: "https://images.unsplash.com/photo-1560415004-913579095038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: { url: "#", text: "Read More", isExternal: false },
    tags: ["Grant", "Research", "Neurodegenerative", "Funding"]
  },
  {
    id: "guest-lecture-2025",
    title: "Guest Lecture on Super-Resolution Microscopy",
    date: "May 10, 2025",
    timestamp: new Date(2025, 4, 10),
    year: 2025,
    category: "Social",
    icon: Twitter,
    badge: "Twitter",
    summary: "We are excited to host a guest lecture by Dr. Alex Chen on super-resolution microscopy. This cutting-edge technique is revolutionizing how we observe cellular structures at unprecedented detail.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
    link: { url: "https://twitter.com", text: "View Tweet", isExternal: true },
    tags: ["Lecture", "Microscopy", "Technology", "Education"]
  },
  {
    id: "new-member-carter",
    title: "Lab Welcomes New Postdoctoral Fellow Dr. Ben Carter",
    date: "April 28, 2025",
    timestamp: new Date(2025, 3, 28),
    year: 2025,
    category: "Team",
    icon: Users,
    badge: "New Member",
    summary: "We are thrilled to welcome Dr. Ben Carter to our team. Dr. Carter brings expertise in advanced microscopy and will be focusing on microtubule research, expanding our capabilities in live-cell imaging.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: { url: "/lab-life", text: "View Lab Photos", isExternal: false },
    tags: ["Team", "Postdoc", "Microscopy", "Welcome"]
  },
  {
    id: "breakthrough-2025",
    title: "Major Breakthrough in Cytoskeletal Dynamics",
    date: "April 5, 2025",
    timestamp: new Date(2025, 3, 5),
    year: 2025,
    category: "Publication",
    icon: Newspaper,
    badge: "Research Highlight",
    summary: "Our lab has published a groundbreaking study revealing new insights into the assembly and function of the cytoskeleton. This research opens up new avenues for understanding cellular mechanics and disease progression.",
    image: "https://images.unsplash.com/photo-1581093430995-0a01f5950992?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
    link: { url: "/publications", text: "Read Publication", isExternal: false },
    tags: ["Publication", "Breakthrough", "Cytoskeleton", "Research"]
  },
  {
    id: "jcb-publication-2025",
    title: "Breakthrough Publication in Journal of Cell Biology",
    date: "March 10, 2025",
    timestamp: new Date(2025, 2, 10),
    year: 2025,
    category: "Publication",
    icon: Newspaper,
    badge: "Publication",
    summary: "Our latest research on actin polymerization dynamics has been published in the Journal of Cell Biology, offering new insights into cell migration and the role of actin networks in disease.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVibGljYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: { url: "https://doi.org/10.1083/jcb.202301001", text: "View Publication", isExternal: true },
    tags: ["Publication", "JCB", "Actin", "Cell Migration"]
  },
  {
    id: "lab-retreat-2025",
    title: "Annual Lab Retreat",
    date: "February 15, 2025",
    timestamp: new Date(2025, 1, 15),
    year: 2025,
    category: "Event",
    icon: Users,
    summary: "Our team participated in our annual lab retreat to discuss research progress, brainstorm new ideas, and strengthen team bonding. The retreat featured presentations from all lab members and collaborative planning sessions.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
    link: { url: "/lab-life", text: "View Photos", isExternal: false },
    tags: ["Event", "Retreat", "Team Building", "Planning"]
  }
];

const NewsPage: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [selectedItemId, setSelectedItemId] = React.useState<string | null>(null);
  const [sortBy, setSortBy] = React.useState<string>('date-desc');
  const [filterTag, setFilterTag] = React.useState<string>('all');
  const [selectedYear, setSelectedYear] = React.useState<string>('2025');

  // Get all unique tags and years
  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    newsItems.forEach(item => item.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const allYears = React.useMemo(() => {
    const years = new Set(newsItems.map(item => item.year));
    return Array.from(years).sort((a, b) => b - a);
  }, []);

  // Filter and sort news items
  const filteredAndSortedItems = React.useMemo(() => {
    let filtered = [...newsItems];
    
    // Filter by year
    if (selectedYear !== 'all') {
      filtered = filtered.filter(item => item.year.toString() === selectedYear);
    }
    
    // Filter by tag
    if (filterTag !== 'all') {
      filtered = filtered.filter(item => item.tags.includes(filterTag));
    }
    
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date-asc':
          return a.timestamp.getTime() - b.timestamp.getTime();
        case 'date-desc':
          return b.timestamp.getTime() - a.timestamp.getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return b.timestamp.getTime() - a.timestamp.getTime();
      }
    });
    
    return filtered;
  }, [sortBy, filterTag, selectedYear]);

  React.useEffect(() => {
    // Check if we're coming from a specific news item link
    const params = new URLSearchParams(location.search);
    const newsId = params.get('id');
    if (newsId) {
      setSelectedItemId(newsId);
      // Scroll to the item if needed
      setTimeout(() => {
        const element = document.getElementById(`news-${newsId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 animate-fade-in-up">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Laboratory News & Updates
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg font-sans text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Stay updated with the latest developments, achievements, and announcements from our lab.
        </p>
      </div>

      {/* Modern Filters and Sorting */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
          {/* Year Tabs */}
          <div className="mb-6">
            <Tabs value={selectedYear} onValueChange={setSelectedYear} className="w-full">
              <TabsList className="grid w-full grid-cols-auto bg-slate-100/80 rounded-2xl p-1 h-auto">
                <TabsTrigger 
                  value="2025" 
                  className="rounded-xl px-6 py-3 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-200"
                >
                  <CalendarDays className="h-4 w-4 mr-2" />
                  2025
                </TabsTrigger>
                <TabsTrigger 
                  value="all" 
                  className="rounded-xl px-6 py-3 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-200"
                >
                  All Years
                </TabsTrigger>
                {allYears.filter(year => year !== 2025).map(year => (
                  <TabsTrigger 
                    key={year}
                    value={year.toString()} 
                    className="rounded-xl px-6 py-3 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-200"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Advanced Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100">
                <Filter className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-semibold text-slate-800">Refine Results</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Sort Dropdown */}
              <div className="relative">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[200px] h-12 rounded-xl border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 shadow-xl">
                    <SelectItem value="date-desc" className="rounded-lg">Latest First</SelectItem>
                    <SelectItem value="date-asc" className="rounded-lg">Oldest First</SelectItem>
                    <SelectItem value="title" className="rounded-lg">Alphabetical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tag Filter */}
              <div className="relative">
                <Select value={filterTag} onValueChange={setFilterTag}>
                  <SelectTrigger className="w-full sm:w-[200px] h-12 rounded-xl border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
                    <SelectValue placeholder="Filter by tag" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 shadow-xl">
                    <SelectItem value="all" className="rounded-lg">All Tags</SelectItem>
                    {allTags.map(tag => (
                      <SelectItem key={tag} value={tag} className="rounded-lg">{tag}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Reset Button */}
              {(selectedYear !== '2025' || filterTag !== 'all' || sortBy !== 'date-desc') && (
                <Button 
                  onClick={() => {
                    setSelectedYear('2025');
                    setSortBy('date-desc');
                    setFilterTag('all');
                  }}
                  variant="outline"
                  className="h-12 px-6 rounded-xl border-slate-200 bg-white/90 backdrop-blur-sm hover:bg-slate-50 transition-all duration-200"
                >
                  Reset
                </Button>
              )}
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 text-center">
              Showing <span className="font-semibold text-slate-800">{filteredAndSortedItems.length}</span> update{filteredAndSortedItems.length !== 1 ? 's' : ''} 
              {selectedYear !== 'all' ? ` from ${selectedYear}` : ' from all years'}
              {filterTag !== 'all' ? ` tagged with "${filterTag}"` : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative max-w-6xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform -translate-x-1/2 z-10"></div>
          
          <div className="space-y-8">
            {filteredAndSortedItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={item.id} className="relative flex items-center">
                  {/* Timeline node */}
                  <div className="absolute left-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-20 transform -translate-x-1/2">
                    <div className="absolute inset-1 bg-blue-500 rounded-full"></div>
                  </div>
                  
                  {/* Branch line */}
                  <div 
                    className={`absolute top-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform -translate-y-1/2 z-10 ${
                      isLeft ? 'right-1/2 -mr-3' : 'left-1/2 -ml-3'
                    }`}
                  ></div>
                  
                  {/* Date indicator */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 z-20 ${
                    isLeft ? 'left-1/2 ml-6' : 'right-1/2 mr-6'
                  }`}>
                    <div className="bg-white px-3 py-1 rounded-full shadow-md border border-slate-200">
                      <span className="text-sm font-medium text-slate-600">{item.date}</span>
                    </div>
                  </div>
                  
                  {/* Card */}
                  <div className={`w-full flex ${isLeft ? 'justify-start pr-4' : 'justify-end pl-4'}`}>
                    <div className={`w-full max-w-md ${isLeft ? 'mr-8' : 'ml-8'}`}>
                      <Card 
                        id={`news-${item.id}`}
                        className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm overflow-hidden hover:scale-[1.02] ${
                          selectedItemId === item.id ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                        }`}
                      >
                        {/* Image */}
                        {item.image && (
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            
                            {/* Badge overlay */}
                            {item.badge && (
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-white/95 text-slate-700 border-0 shadow-lg">
                                  {item.badge}
                                </Badge>
                              </div>
                            )}
                          </div>
                        )}

                        <CardHeader className="pb-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100">
                              <item.icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <span className="text-sm text-slate-500 font-medium">
                              <Calendar size={14} className="inline mr-1.5 -mt-px" />
                              {item.category}
                            </span>
                          </div>
                          
                          <h2 className="text-xl font-heading font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                            {item.title}
                          </h2>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className="text-xs bg-slate-50 hover:bg-blue-50 border-slate-200 hover:border-blue-200 transition-colors cursor-pointer"
                                onClick={() => setFilterTag(tag)}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Summary */}
                          <p className="font-sans text-slate-600 leading-relaxed">
                            {item.summary}
                          </p>
                          
                          {/* Link */}
                          {item.link && (
                            <div className="pt-2">
                              {item.link.isExternal ? (
                                <a 
                                  href={item.link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group/link transition-colors"
                                >
                                  {item.link.text} 
                                  <ExternalLink size={14} className="ml-1.5 transition-transform group-hover/link:translate-x-0.5" />
                                </a>
                              ) : (
                                <Link 
                                  to={item.link.url} 
                                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group/link transition-colors"
                                >
                                  {item.link.text} 
                                  <ExternalLink size={14} className="ml-1.5 transition-transform group-hover/link:translate-x-0.5" />
                                </Link>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* No updates found */}
        {filteredAndSortedItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-heading font-semibold text-slate-700 mb-2">No updates found</h3>
            <p className="text-slate-500">Try adjusting your filters to see more results.</p>
            <Button 
              onClick={() => {
                setSelectedYear('2025');
                setSortBy('date-desc');
                setFilterTag('all');
              }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
