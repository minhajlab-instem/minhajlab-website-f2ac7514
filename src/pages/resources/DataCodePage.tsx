
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Code, Download, ExternalLink, Lock, Unlock } from 'lucide-react';

const DataCodePage: React.FC = () => {
  const datasets = [
    {
      title: "Actin Polymerization Dynamics",
      description: "Time-lapse microscopy data of actin filament assembly in vitro",
      size: "2.3 GB",
      format: "TIFF, CSV",
      access: "Open",
      downloads: 156
    },
    {
      title: "Microtubule Growth Tracking",
      description: "Single molecule tracking data of microtubule plus-end dynamics",
      size: "890 MB",
      format: "MAT, CSV",
      access: "Restricted",
      downloads: 89
    },
    {
      title: "Cell Migration Analysis",
      description: "Quantitative analysis of cell motility in different cytoskeletal conditions",
      size: "1.1 GB",
      format: "CSV, JSON",
      access: "Open",
      downloads: 203
    }
  ];

  const codeRepositories = [
    {
      title: "CytoTracker",
      description: "MATLAB/Python toolkit for automated cytoskeleton analysis",
      language: "MATLAB/Python",
      stars: 47,
      license: "MIT",
      lastUpdate: "2 weeks ago"
    },
    {
      title: "FilamentAnalyzer",
      description: "ImageJ plugin for quantitative analysis of cytoskeletal networks",
      language: "Java",
      stars: 32,
      license: "GPL-3.0",
      lastUpdate: "1 month ago"
    },
    {
      title: "PolymerizationKinetics",
      description: "R package for modeling protein polymerization dynamics",
      language: "R",
      stars: 18,
      license: "Apache-2.0",
      lastUpdate: "3 weeks ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Data & Code Resources
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Research Datasets */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Database className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Research Datasets</h2>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-6">
            {datasets.map((dataset, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{dataset.title}</CardTitle>
                      <CardDescription className="mt-2">{dataset.description}</CardDescription>
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
                    <Button size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on GitHub
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

        {/* Usage Guidelines */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines & Citation</CardTitle>
              <CardDescription>
                Important information for using our research data and code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Data Usage Policy</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Open datasets are freely available for research use</li>
                    <li>• Restricted datasets require registration and approval</li>
                    <li>• Commercial use requires separate licensing agreement</li>
                    <li>• Proper citation is required for all uses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Citation Format</h4>
                  <div className="bg-slate-50 p-3 rounded text-sm">
                    <code>
                      Minhaj Lab (2025). [Dataset/Code Name]. Retrieved from
                      https://minhajlab.edu/resources/data-code
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DataCodePage;
