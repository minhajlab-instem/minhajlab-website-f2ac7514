
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, Code, Download, ExternalLink, Lock, Unlock, Users, Globe } from 'lucide-react';

const ResearchDataPage: React.FC = () => {
  const internalResources = [
    {
      title: "Lab Inventory System",
      description: "Real-time tracking of equipment, reagents, and supplies",
      link: "/lab-inventory",
      type: "System"
    },
    {
      title: "Standard Operating Procedures",
      description: "Complete collection of lab protocols and procedures",
      link: "/lab-protocols",
      type: "Protocols"
    },
    {
      title: "Ordering Portal",
      description: "Submit requests for new equipment and supplies",
      link: "/ordering-portal",
      type: "Portal"
    },
    {
      title: "Equipment Booking",
      description: "Schedule and reserve shared laboratory equipment",
      link: "/equipment-booking",
      type: "System"
    },
    {
      title: "Safety Guidelines",
      description: "Laboratory safety protocols and emergency procedures",
      link: "/safety-guidelines",
      type: "Guidelines"
    },
    {
      title: "Lab Calendar",
      description: "Shared calendar for meetings, seminars, and deadlines",
      link: "/lab-calendar",
      type: "Calendar"
    }
  ];

  const publishedDatasets = [
    {
      title: "Actin Polymerization Dynamics",
      description: "Time-lapse microscopy data of actin filament assembly in vitro",
      size: "2.3 GB",
      format: "TIFF, CSV",
      access: "Open",
      downloads: 156,
      doi: "10.1234/dataset.actin.2023"
    },
    {
      title: "Microtubule Growth Tracking",
      description: "Single molecule tracking data of microtubule plus-end dynamics",
      size: "890 MB",
      format: "MAT, CSV",
      access: "Restricted",
      downloads: 89,
      doi: "10.1234/dataset.mt.2023"
    },
    {
      title: "Cell Migration Analysis",
      description: "Quantitative analysis of cell motility in different cytoskeletal conditions",
      size: "1.1 GB",
      format: "CSV, JSON",
      access: "Open",
      downloads: 203,
      doi: "10.1234/dataset.migration.2022"
    }
  ];

  const plasmids = [
    {
      name: "pMinhaj-GFP-Actin",
      description: "Green fluorescent protein tagged actin for live cell imaging",
      addgeneId: "12345",
      resistance: "Ampicillin",
      availability: "Available"
    },
    {
      name: "pMinhaj-mCherry-Tubulin",
      description: "Red fluorescent protein tagged tubulin for microtubule visualization",
      addgeneId: "12346",
      resistance: "Kanamycin",
      availability: "Available"
    },
    {
      name: "pMinhaj-FRAP-Construct",
      description: "Optimized construct for FRAP analysis of cytoskeletal proteins",
      addgeneId: "12347",
      resistance: "Ampicillin",
      availability: "In Review"
    }
  ];

  const codeRepositories = [
    {
      title: "CytoTracker",
      description: "MATLAB/Python toolkit for automated cytoskeleton analysis",
      language: "MATLAB/Python",
      stars: 47,
      license: "MIT",
      lastUpdate: "2 weeks ago",
      github: "https://github.com/minhajlab/cytotracker"
    },
    {
      title: "FilamentAnalyzer",
      description: "ImageJ plugin for quantitative analysis of cytoskeletal networks",
      language: "Java",
      stars: 32,
      license: "GPL-3.0",
      lastUpdate: "1 month ago",
      github: "https://github.com/minhajlab/filament-analyzer"
    },
    {
      title: "PolymerizationKinetics",
      description: "R package for modeling protein polymerization dynamics",
      language: "R",
      stars: 18,
      license: "Apache-2.0",
      lastUpdate: "3 weeks ago",
      github: "https://github.com/minhajlab/polymerization-kinetics"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-8">
        {/* Background Line Art - Data/Research/Lab */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Crect x='150' y='60' width='100' height='60' rx='8' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='160' y='70' width='80' height='8' rx='2' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='160' y='85' width='60' height='8' rx='2' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='160' y='100' width='70' height='8' rx='2' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='400' y='70' width='100' height='60' rx='8' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M420 85 L430 95 L420 105 M440 85 L450 95 L440 105 M460 85 L470 95 L460 105' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M475 85 L480 85 M475 95 L485 95 M475 105 L480 105' stroke='%23334155' stroke-width='1'/%3E%3Crect x='650' y='65' width='100' height='60' rx='8' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='700' cy='85' r='6' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Ccircle cx='720' cy='85' r='6' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Ccircle cx='680' cy='105' r='6' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Ccircle cx='700' cy='105' r='6' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Ccircle cx='720' cy='105' r='6' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Cpath d='M900 70 L1000 70 M900 80 L1000 80 M900 90 L1000 90 M900 100 L1000 100 M900 110 L1000 110 M900 120 L1000 120' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
          Research Data Resources
        </h1>
        <div className="relative w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="internal" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="internal" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Internal Usage</span>
            </TabsTrigger>
            <TabsTrigger value="external" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>External Access</span>
            </TabsTrigger>
          </TabsList>

          {/* Internal Usage Tab */}
          <TabsContent value="internal" className="space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Lab Management Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internalResources.map((resource, index) => (
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
                      <Button asChild className="w-full">
                        <a href={resource.link}>
                          Access {resource.type}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* External Access Tab */}
          <TabsContent value="external" className="space-y-8">
            {/* Published Datasets */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold">Published Datasets</h2>
              </div>
              
              <div className="space-y-6">
                {publishedDatasets.map((dataset, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{dataset.title}</CardTitle>
                          <CardDescription className="mt-2">{dataset.description}</CardDescription>
                          <div className="text-sm text-slate-600 mt-2">DOI: {dataset.doi}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {dataset.access === 'Open' ? (
                            <Unlock className="h-4 w-4 text-green-600" />
                          ) : (
                            <Lock className="h-4 w-4 text-orange-600" />
                          )}
                          <span className={`text-xs px-2 py-1 rounded ${
                            dataset.access === 'Open' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            {dataset.access}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-slate-600 mb-4">
                        <span>Size: {dataset.size}</span>
                        <span>Format: {dataset.format}</span>
                        <span>{dataset.downloads} downloads</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Plasmids */}
            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Available Plasmids</h2>
              <div className="grid md:grid-cols-1 gap-6">
                {plasmids.map((plasmid, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{plasmid.name}</CardTitle>
                          <CardDescription className="mt-2">{plasmid.description}</CardDescription>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          plasmid.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {plasmid.availability}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-slate-600 mb-4">
                        <span>Addgene ID: {plasmid.addgeneId}</span>
                        <span>Resistance: {plasmid.resistance}</span>
                      </div>
                      <Button size="sm" asChild>
                        <a href={`https://www.addgene.org/${plasmid.addgeneId}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View on Addgene
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Code Repositories */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Code className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold">Code Repositories</h2>
              </div>
              
              <div className="grid md:grid-cols-1 gap-6">
                {codeRepositories.map((repo, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{repo.title}</CardTitle>
                          <CardDescription className="mt-2">{repo.description}</CardDescription>
                        </div>
                        <div className="text-right text-sm text-slate-600">
                          <div>⭐ {repo.stars}</div>
                          <div>{repo.lastUpdate}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">{repo.language}</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">{repo.license}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" asChild>
                          <a href={repo.github} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View on GitHub
                          </a>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download ZIP
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Access Guidelines */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Access Guidelines & Citation</CardTitle>
                  <CardDescription>
                    Important information for accessing and using our research resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">How to Access Resources</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Open datasets are freely available for download</li>
                        <li>• Restricted datasets require registration and approval</li>
                        <li>• Plasmids are available through Addgene</li>
                        <li>• Code repositories are hosted on GitHub</li>
                        <li>• Contact us for additional support or custom requests</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Citation Requirements</h4>
                      <div className="bg-slate-50 p-3 rounded text-sm">
                        <code>
                          Please cite the original publication and include the DOI when using our datasets. 
                          For plasmids, cite both our lab and Addgene. 
                          For code, reference the GitHub repository.
                        </code>
                      </div>
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

export default ResearchDataPage;
