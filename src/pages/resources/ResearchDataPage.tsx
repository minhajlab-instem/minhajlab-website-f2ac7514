
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Database, Download, ExternalLink, Users, Globe, Link, FileText, TestTube, Dna } from 'lucide-react';
import { useLabManagementResources, useResearchPlasmids, useResearchProtocols } from '@/hooks/useResourcesData';

const ResearchDataPage: React.FC = () => {
  const { data: labResources, isLoading: loadingResources } = useLabManagementResources();
  const { data: plasmids, isLoading: loadingPlasmids } = useResearchPlasmids();
  const { data: protocols, isLoading: loadingProtocols } = useResearchProtocols();

  const iconMap: { [key: string]: any } = {
    Database,
    FileText,
    ExternalLink,
    TestTube,
    Link
  };

  if (loadingResources || loadingPlasmids || loadingProtocols) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

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
              <Card>
                <CardHeader>
                  <CardTitle>External Tools & Systems</CardTitle>
                  <CardDescription>
                    Quick access to external platforms and tools used for lab management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {labResources?.map((resource) => {
                      const IconComponent = iconMap[resource.icon] || Link;
                      return (
                        <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-5 w-5 text-primary" />
                            <div>
                              <h3 className="font-semibold">{resource.title}</h3>
                              <p className="text-sm text-gray-600">{resource.description}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" asChild>
                            <a href={resource.link} target="_blank" rel="noopener noreferrer">
                              <Link className="h-4 w-4 mr-2" />
                              Access
                            </a>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* External Access Tab */}
          <TabsContent value="external" className="space-y-8">
            {/* Plasmids */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Dna className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold">Available Plasmids</h2>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Published Plasmids</CardTitle>
                  <CardDescription>
                    Research plasmids available through Addgene for the scientific community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Plasmid Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Reference</TableHead>
                        <TableHead>Addgene ID</TableHead>
                        <TableHead>Resistance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {plasmids?.map((plasmid) => (
                        <TableRow key={plasmid.id}>
                          <TableCell className="font-medium">{plasmid.name}</TableCell>
                          <TableCell className="max-w-xs">
                            <div className="text-sm">{plasmid.description}</div>
                          </TableCell>
                          <TableCell className="text-sm">{plasmid.reference}</TableCell>
                          <TableCell>{plasmid.addgene_id}</TableCell>
                          <TableCell>{plasmid.resistance}</TableCell>
                          <TableCell>
                            <span className={`text-xs px-2 py-1 rounded ${
                              plasmid.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {plasmid.availability}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline" asChild>
                              <a href={`https://www.addgene.org/${plasmid.addgene_id}`} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Request
                              </a>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">How to Request Plasmids</h4>
                    <div className="text-sm text-blue-800 space-y-1">
                      <p>• Click on the "Request" button to visit the Addgene page</p>
                      <p>• Create an Addgene account if you don't have one</p>
                      <p>• Submit your request through Addgene's standard process</p>
                      <p>• Please cite the original reference when using these plasmids</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Protocols */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold">Laboratory Protocols</h2>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Published Protocols</CardTitle>
                  <CardDescription>
                    Detailed protocols from our research for reproducible experiments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {protocols?.map((protocol) => (
                      <div key={protocol.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold">{protocol.title}</h3>
                              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                                {protocol.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{protocol.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>Size: {protocol.download_size}</span>
                              <span>Updated: {new Date(protocol.last_updated).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Protocol Usage Guidelines</h4>
                    <div className="text-sm text-green-800 space-y-1">
                      <p>• All protocols are provided under Creative Commons license</p>
                      <p>• Please cite our lab when using these protocols in publications</p>
                      <p>• Contact us if you need clarification or have questions</p>
                      <p>• We welcome feedback and improvements from the community</p>
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
