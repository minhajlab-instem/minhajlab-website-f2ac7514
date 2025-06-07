
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, BookOpen, Microscope, ExternalLink, FileText, Award } from 'lucide-react';

const UsefulLinksPage: React.FC = () => {
  const applicationResources = [
    {
      title: "PhD Application Guide",
      description: "Comprehensive guide on applying to PhD programs in cell biology and biophysics",
      link: "https://example.com/phd-guide",
      type: "Guide"
    },
    {
      title: "Writing a Strong Statement of Purpose",
      description: "Tips and examples for crafting compelling SOPs for graduate school applications",
      link: "https://example.com/sop-guide",
      type: "Writing Guide"
    },
    {
      title: "PostDoc Application Strategies",
      description: "Navigate the postdoc application process with expert advice and timeline planning",
      link: "https://example.com/postdoc-guide",
      type: "Guide"
    },
    {
      title: "Fellowship Opportunities Database",
      description: "Curated list of fellowships for graduate students and postdocs in life sciences",
      link: "https://example.com/fellowships",
      type: "Database"
    },
    {
      title: "Academic CV Templates",
      description: "Professional CV templates specifically designed for academic careers",
      link: "https://example.com/cv-templates",
      type: "Templates"
    },
    {
      title: "Interview Preparation Toolkit",
      description: "Common questions and preparation strategies for PhD and postdoc interviews",
      link: "https://example.com/interview-prep",
      type: "Toolkit"
    }
  ];

  const onlineCourses = [
    {
      title: "Introduction to Cell Biology",
      provider: "MIT OpenCourseWare",
      description: "Comprehensive introduction to cellular structure and function",
      link: "https://ocw.mit.edu/courses/biology/",
      duration: "12 weeks",
      level: "Undergraduate"
    },
    {
      title: "Principles of Microscopy",
      provider: "iBiology",
      description: "Fundamentals of light microscopy and advanced imaging techniques",
      link: "https://ibiology.org/courses/microscopy/",
      duration: "8 weeks",
      level: "Graduate"
    },
    {
      title: "Cytoskeleton Dynamics",
      provider: "Coursera",
      description: "Advanced course on cytoskeletal protein function and regulation",
      link: "https://coursera.org/cytoskeleton",
      duration: "6 weeks",
      level: "Advanced"
    },
    {
      title: "Biophysics Methods",
      provider: "edX",
      description: "Quantitative approaches to studying biological systems",
      link: "https://edx.org/biophysics",
      duration: "10 weeks",
      level: "Graduate"
    },
    {
      title: "Scientific Writing and Communication",
      provider: "FutureLearn",
      description: "Develop skills in scientific writing and presentation",
      link: "https://futurelearn.com/sci-writing",
      duration: "4 weeks",
      level: "All Levels"
    }
  ];

  const books = [
    {
      title: "Molecular Biology of the Cell",
      authors: "Alberts, Johnson, Lewis, Morgan, Raff, Roberts, Walter",
      description: "The definitive textbook for understanding cellular and molecular biology",
      edition: "7th Edition",
      link: "https://example.com/alberts",
      category: "Cell Biology"
    },
    {
      title: "Physical Biology of the Cell",
      authors: "Phillips, Kondev, Theriot, Garcia",
      description: "Quantitative approaches to understanding cellular phenomena",
      edition: "2nd Edition",
      link: "https://example.com/phillips",
      category: "Biophysics"
    },
    {
      title: "The Cytoskeleton: A Very Short Introduction",
      authors: "Mullins",
      description: "Concise overview of cytoskeletal structure and function",
      edition: "1st Edition",
      link: "https://example.com/mullins",
      category: "Cytoskeleton"
    },
    {
      title: "Introduction to Fluorescence Microscopy",
      authors: "Waters",
      description: "Practical guide to fluorescence microscopy techniques",
      edition: "3rd Edition",
      link: "https://example.com/waters",
      category: "Microscopy"
    }
  ];

  const researchTools = [
    {
      title: "ImageJ/FIJI",
      description: "Open-source image processing and analysis software",
      link: "https://imagej.net/",
      category: "Image Analysis",
      cost: "Free"
    },
    {
      title: "CellProfiler",
      description: "Cell image analysis software for identifying and measuring biological objects",
      link: "https://cellprofiler.org/",
      category: "Image Analysis",
      cost: "Free"
    },
    {
      title: "Imaris",
      description: "3D/4D image processing and analysis software for microscopy data",
      link: "https://imaris.oxinst.com/",
      category: "3D Analysis",
      cost: "Commercial"
    },
    {
      title: "ChimeraX",
      description: "Molecular visualization and analysis software",
      link: "https://www.cgl.ucsf.edu/chimerax/",
      category: "Molecular Visualization",
      cost: "Free"
    },
    {
      title: "Cytoscape",
      description: "Network analysis and visualization software",
      link: "https://cytoscape.org/",
      category: "Network Analysis",
      cost: "Free"
    },
    {
      title: "GraphPad Prism",
      description: "Statistical analysis and graphing software for scientific research",
      link: "https://graphpad.com/",
      category: "Statistics",
      cost: "Commercial"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-8">
        {/* Background Line Art - Links/Network/Resources */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Ccircle cx='200' cy='80' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='280' cy='120' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='360' cy='80' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M215 80 L265 120 M295 120 L345 80' stroke='%23334155' stroke-width='2'/%3E%3Ccircle cx='500' cy='100' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='580' cy='70' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='580' cy='130' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M515 100 L565 70 M515 100 L565 130' stroke='%23334155' stroke-width='2'/%3E%3Ccircle cx='750' cy='90' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='830' cy='90' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='910' cy='90' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M765 90 L815 90 M845 90 L895 90' stroke='%23334155' stroke-width='2'/%3E%3Crect x='1000' y='75' width='30' height='30' rx='4' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M1005 85 L1025 85 M1005 95 L1025 95' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
          Useful Links & Resources
        </h1>
        <div className="relative w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="applications" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="applications" className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>Applications</span>
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Learning</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center space-x-2">
              <Microscope className="h-4 w-4" />
              <span>Research Tools</span>
            </TabsTrigger>
          </TabsList>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-8">
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold">Application Resources</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {applicationResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                          {resource.type}
                        </span>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild size="sm">
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Access Resource
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Learning Tab */}
          <TabsContent value="learning" className="space-y-8">
            {/* Online Courses */}
            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Online Courses</h2>
              <div className="grid lg:grid-cols-1 gap-6">
                {onlineCourses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <CardDescription className="mt-1 text-primary font-medium">{course.provider}</CardDescription>
                          <CardDescription className="mt-2">{course.description}</CardDescription>
                        </div>
                        <div className="text-right text-sm">
                          <div className="px-2 py-1 bg-green-100 text-green-800 rounded mb-1">{course.level}</div>
                          <div className="text-slate-600">{course.duration}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button asChild size="sm">
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Take Course
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recommended Books */}
            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Recommended Books</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {books.map((book, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{book.title}</CardTitle>
                          <CardDescription className="mt-1 font-medium">{book.authors}</CardDescription>
                          <CardDescription className="mt-2">{book.description}</CardDescription>
                        </div>
                        <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-800">
                          {book.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-slate-600">{book.edition}</span>
                      </div>
                      <Button asChild size="sm">
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Book
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Research Tools Tab */}
          <TabsContent value="tools" className="space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Essential Research Tools</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {researchTools.map((tool, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          <CardDescription className="mt-2">{tool.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 mb-1 block">
                            {tool.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            tool.cost === 'Free' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            {tool.cost}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button asChild size="sm">
                        <a href={tool.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Website
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Getting Started Guide */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started with Research Tools</CardTitle>
                  <CardDescription>
                    A beginner's guide to essential software and tools for cytoskeleton research
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">For Beginners</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Start with ImageJ/FIJI for basic image analysis</li>
                        <li>• Learn GraphPad Prism for statistical analysis</li>
                        <li>• Practice with online tutorials and sample data</li>
                        <li>• Join user forums and communities for support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Advanced Users</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Explore specialized tools like CellProfiler and Imaris</li>
                        <li>• Learn programming for custom analysis pipelines</li>
                        <li>• Integrate multiple tools for comprehensive workflows</li>
                        <li>• Contribute to open-source projects and tool development</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UsefulLinksPage;
