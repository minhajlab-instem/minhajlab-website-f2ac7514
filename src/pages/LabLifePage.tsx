import React, { useState, useMemo } from 'react';
import { labEventsData, LabEvent } from '@/data/labLifeData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag, Images } from 'lucide-react';

const LabLifePage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(labEventsData.map(event => event.year.toString())));
    return ['all', ...uniqueYears.sort((a, b) => parseInt(b) - parseInt(a))];
  }, []);

  const tags = useMemo(() => {
    const allTags = labEventsData.flatMap(event => event.tags);
    return ['all', ...Array.from(new Set(allTags)).sort()];
  }, []);

  const filteredEvents = useMemo(() => {
    return labEventsData.filter(event => {
      const yearMatch = selectedYear === 'all' || event.year.toString() === selectedYear;
      const tagMatch = selectedTag === 'all' || event.tags.includes(selectedTag);
      return yearMatch && tagMatch;
    });
  }, [selectedYear, selectedTag]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-10">
        {/* Background Line Art - Camera/Events/Celebration */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Crect x='200' y='70' width='60' height='40' rx='8' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='230' cy='90' r='12' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='220' y='55' width='20' height='15' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='400' y='75' width='60' height='40' rx='8' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='430' cy='95' r='12' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='420' y='60' width='20' height='15' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='600' y='65' width='60' height='40' rx='8' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='630' cy='85' r='12' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='620' y='50' width='20' height='15' rx='3' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Cpath d='M180 130 Q200 120 220 130 T260 130 T300 130' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M380 135 Q400 125 420 135 T460 135 T500 135' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M580 125 Q600 115 620 125 T660 125 T700 125' stroke='%23334155' stroke-width='2' fill='none'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-6 text-slate-800">
          Lab Life & Events
        </h1>
        <p className="relative text-lg font-sans text-slate-700 text-center max-w-3xl mx-auto">
          A glimpse into our vibrant lab culture, collaborations, and memorable moments, now organized by event.
        </p>
      </div>

      {/* Filters Section */}
      <div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 p-4 bg-slate-100 rounded-lg shadow">
        <div>
          <label htmlFor="year-filter" className="block text-sm font-medium text-slate-700 mb-1">Filter by Year:</label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger id="year-filter" className="w-full sm:w-[180px] bg-white">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="tag-filter" className="block text-sm font-medium text-slate-700 mb-1">Filter by Tag:</label>
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger id="tag-filter" className="w-full sm:w-[180px] bg-white">
              <SelectValue placeholder="Select Tag" />
            </SelectTrigger>
            <SelectContent>
              {tags.map(tag => (
                <SelectItem key={tag} value={tag}>
                  {tag === 'all' ? 'All Tags' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Event Gallery */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredEvents.map(event => (
            <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {event.photos.length > 0 ? (
                <img 
                  src={event.photos[0].imageUrl} 
                  alt={event.photos[0].altText || event.title} 
                  className="w-full h-60 object-cover" 
                />
              ) : (
                <div className="w-full h-60 bg-slate-200 flex items-center justify-center">
                  <Images className="w-16 h-16 text-slate-400" />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-sky-700">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-slate-600 mb-2">{event.description}</p>
                <p className="text-xs text-slate-500 mb-2">Year: {event.year}</p>
                {event.photos.length > 0 && (
                  <p className="text-xs text-slate-500">
                    {event.photos.length} photo{event.photos.length > 1 ? 's' : ''}
                  </p>
                )}
              </CardContent>
              <CardFooter className="pt-4 flex flex-wrap gap-2">
                {event.tags.map(tag => (
                  <Button key={tag} variant="outline" size="sm" className="text-xs" onClick={() => setSelectedTag(tag)}>
                    <Tag className="mr-1 h-3 w-3" /> {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-500 py-12 text-lg">No events match your current filters. Try adjusting your selection!</p>
      )}
    </div>
  );
};

export default LabLifePage;
