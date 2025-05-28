
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Clock, AlertCircle } from 'lucide-react';

const ProtocolsPage: React.FC = () => {
  const protocolCategories = [
    {
      title: "Microscopy Techniques",
      protocols: [
        { name: "Live Cell Imaging Protocol", duration: "2-3 hours", difficulty: "Intermediate" },
        { name: "Super-Resolution Microscopy Setup", duration: "4-5 hours", difficulty: "Advanced" },
        { name: "Immunofluorescence Staining", duration: "1-2 days", difficulty: "Beginner" },
        { name: "FRAP Analysis Protocol", duration: "3-4 hours", difficulty: "Advanced" }
      ]
    },
    {
      title: "Protein Purification",
      protocols: [
        { name: "Actin Protein Purification", duration: "2-3 days", difficulty: "Intermediate" },
        { name: "Microtubule Protein Isolation", duration: "1-2 days", difficulty: "Intermediate" },
        { name: "His-Tag Protein Purification", duration: "1 day", difficulty: "Beginner" },
        { name: "Native Protein Complex Purification", duration: "3-4 days", difficulty: "Advanced" }
      ]
    },
    {
      title: "Cell Culture",
      protocols: [
        { name: "HeLa Cell Maintenance", duration: "Daily", difficulty: "Beginner" },
        { name: "Primary Neuron Culture", duration: "2-3 weeks", difficulty: "Advanced" },
        { name: "Transfection Protocols", duration: "2-3 days", difficulty: "Intermediate" },
        { name: "Cell Synchronization", duration: "1-2 days", difficulty: "Intermediate" }
      ]
    },
    {
      title: "Biochemical Assays",
      protocols: [
        { name: "Polymerization Assays", duration: "3-4 hours", difficulty: "Intermediate" },
        { name: "ATPase Activity Measurement", duration: "2-3 hours", difficulty: "Intermediate" },
        { name: "Protein-Protein Interaction Assays", duration: "1-2 days", difficulty: "Advanced" },
        { name: "Western Blot Analysis", duration: "2 days", difficulty: "Beginner" }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Laboratory Protocols
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Important Notice */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Important Notice</h3>
                <p className="text-sm text-orange-700">
                  All protocols require proper safety training and equipment. Please consult with lab supervisors before attempting any procedures. 
                  Some protocols may require institutional approval or special permits.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Protocol Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {protocolCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>{category.title}</span>
                </CardTitle>
                <CardDescription>
                  Essential protocols for {category.title.toLowerCase()} in cytoskeleton research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.protocols.map((protocol, protocolIndex) => (
                    <div key={protocolIndex} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm">{protocol.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(protocol.difficulty)}`}>
                          {protocol.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{protocol.duration}</span>
                        </div>
                        <Button size="sm" variant="outline" className="h-6 text-xs">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>
              Supplementary materials and external resources for protocol development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Safety Guidelines</h4>
                <p className="text-sm text-slate-600 mb-3">Comprehensive lab safety protocols and emergency procedures</p>
                <Button size="sm" variant="outline">View Guidelines</Button>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Equipment Manuals</h4>
                <p className="text-sm text-slate-600 mb-3">Operating instructions for specialized lab equipment</p>
                <Button size="sm" variant="outline">Browse Manuals</Button>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Troubleshooting</h4>
                <p className="text-sm text-slate-600 mb-3">Common issues and solutions for protocol optimization</p>
                <Button size="sm" variant="outline">Get Help</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProtocolsPage;
