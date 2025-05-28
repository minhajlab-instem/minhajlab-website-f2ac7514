
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileText, Database, DollarSign, ArrowRight } from 'lucide-react';

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
    },
    {
      title: "Funding Sources",
      description: "Information about grants, fellowships, and funding opportunities in our field.",
      icon: DollarSign,
      link: "/resources/funding",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Research Resources
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      <p className="text-lg font-sans text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
        Comprehensive resources for researchers, students, and collaborators working in cytoskeleton research and related fields.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
