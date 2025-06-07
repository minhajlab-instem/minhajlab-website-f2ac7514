import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileText, Database, ArrowRight } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: "For Students",
      description: "Educational materials, opportunities, and guidance for students interested in cytoskeleton research.",
      icon: GraduationCap,
      link: "/resources/students",
      color: "bg-blue-500"
    },
    {
      title: "Lab Protocols",
      description: "Detailed protocols and methodologies used in our research laboratory.",
      icon: FileText,
      link: "/resources/protocols",
      color: "bg-green-500"
    },
    {
      title: "Data & Code",
      description: "Access to research data, analysis scripts, and computational resources.",
      icon: Database,
      link: "/resources/data-code",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-12">
        {/* Background Line Art - Books/Knowledge/Education */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Crect x='150' y='60' width='80' height='60' rx='4' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='300' y='70' width='80' height='50' rx='4' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='450' y='55' width='80' height='70' rx='4' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='600' y='65' width='80' height='55' rx='4' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='750' y='50' width='80' height='75' rx='4' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='900' y='60' width='80' height='60' rx='4' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M160 75 L220 75 M160 85 L210 85 M160 95 L215 95' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M310 85 L370 85 M310 95 L360 95 M310 105 L365 105' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M460 70 L520 70 M460 80 L510 80 M460 90 L515 90 M460 100 L520 100' stroke='%23334155' stroke-width='1'/%3E%3Cpath d='M610 80 L670 80 M610 90 L660 90 M610 100 L665 100' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
          Research Resources
        </h1>
        <div className="relative w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="relative text-lg font-sans text-foreground/80 text-center max-w-3xl mx-auto">
          Comprehensive resources for researchers, students, and collaborators working in cytoskeleton research and related fields.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resourceCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-heading">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-6">
                {category.description}
              </CardDescription>
              <Button asChild className="w-full">
                <Link to={category.link}>
                  Explore {category.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
