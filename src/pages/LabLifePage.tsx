
import React, { useState, useMemo } from 'react';
import { labPhotosData, LabPhoto } from '@/data/labLifeData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from 'lucide-react'; // Using Tag icon as a generic icon for tags

const LabLifePage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(labPhotosData.map(photo => photo.year.toString())));
    return ['all', ...uniqueYears.sort((a, b) => parseInt(b) - parseInt(a))];
  }, []);

  const tags = useMemo(() => {
    const allTags = labPhotosData.flatMap(photo => photo.tags);
    return ['all', ...Array.from(new Set(allTags)).sort()];
  }, []);

  const filteredPhotos = useMemo(() => {
    return labPhotosData.filter(photo => {
      const yearMatch = selectedYear === 'all' || photo.year.toString() === selectedYear;
      const tagMatch = selectedTag === 'all' || photo.tags.includes(selectedTag);
      return yearMatch && tagMatch;
    });
  }, [selectedYear, selectedTag]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6 text-slate-800">
        Lab Life & Events
      </h1>
      <p className="text-lg font-sans text-slate-700 mb-10 text-center max-w-3xl mx-auto">
        A glimpse into our vibrant lab culture, collaborations, and memorable moments.
      </p>

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

      {/* Photo Gallery */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPhotos.map(photo => (
            <Card key={photo.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img src={photo.imageUrl} alt={photo.altText} className="w-full h-60 object-cover" />
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-sky-700">{photo.altText}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-slate-600 mb-2">{photo.description}</p>
                <p className="text-xs text-slate-500">Year: {photo.year}</p>
              </CardContent>
              <CardFooter className="pt-4 flex flex-wrap gap-2">
                {photo.tags.map(tag => (
                  <Button key={tag} variant="outline" size="sm" className="text-xs" onClick={() => setSelectedTag(tag)}>
                    <Tag className="mr-1 h-3 w-3" /> {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-500 py-12 text-lg">No photos match your current filters. Try adjusting your selection!</p>
      )}
    </div>
  );
};

export default LabLifePage;

