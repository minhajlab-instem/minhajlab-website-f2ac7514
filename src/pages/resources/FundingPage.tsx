import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Calendar, Users, ExternalLink, Award, Building, Globe, University } from 'lucide-react';
const FundingPage: React.FC = () => {
  const collaborators = [{
    name: "Dr. Maria Santos",
    institution: "Stanford University",
    department: "Department of Cell Biology",
    expertise: "Cytoskeleton dynamics in cancer cells",
    collaboration: "Joint research on microtubule organization",
    website: "https://stanford.edu",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
  }, {
    name: "Dr. James Chen",
    institution: "MIT",
    department: "Department of Biological Engineering",
    expertise: "Live-cell imaging and microscopy",
    collaboration: "Development of advanced imaging techniques",
    website: "https://mit.edu",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
  }, {
    name: "Dr. Anna Mueller",
    institution: "Max Planck Institute",
    department: "Department of Molecular Cell Biology",
    expertise: "Protein dynamics and structural biology",
    collaboration: "Structural analysis of cytoskeletal proteins",
    website: "https://mpi.de",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
  }, {
    name: "Dr. Raj Patel",
    institution: "University of Cambridge",
    department: "Department of Biochemistry",
    expertise: "Computational modeling of cellular processes",
    collaboration: "Mathematical modeling of cytoskeleton networks",
    website: "https://cambridge.ac.uk",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
  }];
  const fundingOpportunities = [{
    title: "NSF Graduate Research Fellowship",
    organization: "National Science Foundation",
    amount: "$37,000/year",
    duration: "3 years",
    deadline: "October 15, 2025",
    eligibility: "Graduate Students",
    description: "Supports outstanding graduate students pursuing research-based degrees in NSF-supported fields."
  }, {
    title: "NIH NRSA Postdoctoral Fellowship",
    organization: "National Institutes of Health",
    amount: "$52,000-$60,000/year",
    duration: "2-3 years",
    deadline: "Multiple deadlines",
    eligibility: "Postdocs",
    description: "Individual fellowships for postdoctoral training in biomedical research."
  }, {
    title: "HFSP Long-Term Fellowship",
    organization: "Human Frontier Science Program",
    amount: "$60,000/year",
    duration: "3 years",
    deadline: "August 25, 2025",
    eligibility: "Postdocs",
    description: "Supports postdoctoral research in biological sciences across international borders."
  }, {
    title: "Cytoskeleton Research Grant",
    organization: "Cell Biology Foundation",
    amount: "$50,000-$100,000",
    duration: "2 years",
    deadline: "January 31, 2026",
    eligibility: "Faculty",
    description: "Supports innovative research projects focused on cytoskeletal biology and dynamics."
  }];
  const activeGrants = [{
    title: "Mechanisms of Cytoskeletal Reorganization in Disease",
    sponsor: "NIH R01",
    amount: "$1,450,000",
    period: "2023-2028",
    pi: "Dr. Eleanor Vance",
    status: "Active"
  }, {
    title: "Advanced Microscopy for Live Cell Imaging",
    sponsor: "NSF MRI",
    amount: "$950,000",
    period: "2024-2027",
    pi: "Dr. Eleanor Vance",
    status: "Active"
  }, {
    title: "International Collaboration on Cytoskeleton Dynamics",
    sponsor: "HFSP Research Grant",
    amount: "$450,000",
    period: "2024-2027",
    pi: "Dr. Eleanor Vance (Lead PI)",
    status: "Active"
  }, {
    title: "Undergraduate Research Training Program",
    sponsor: "NIH T35",
    amount: "$350,000",
    period: "2022-2027",
    pi: "Dr. Eleanor Vance",
    status: "Active"
  }];
  const industryPartners = [{
    name: "Zeiss Microscopy",
    type: "Equipment Partnership",
    description: "Collaboration on advanced imaging systems and technique development"
  }, {
    name: "Thermo Fisher Scientific",
    type: "Research Partnership",
    description: "Joint development of cytoskeleton analysis tools and reagents"
  }, {
    name: "Leica Microsystems",
    type: "Technology Partnership",
    description: "Beta testing of new microscopy platforms and software"
  }];
  const getEligibilityColor = (eligibility: string) => {
    const colors: {
      [key: string]: string;
    } = {
      'Graduate Students': 'bg-blue-100 text-blue-800',
      'Postdocs': 'bg-green-100 text-green-800',
      'Faculty': 'bg-orange-100 text-orange-800'
    };
    return colors[eligibility] || 'bg-gray-100 text-gray-800';
  };
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Collaborators & Funding
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Research Collaborators */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Collaborators &amp; Well-wishers</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {collaborators.map((collaborator, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <img src={collaborator.image} alt={collaborator.name} className="w-16 h-16 rounded-full object-cover" />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{collaborator.name}</CardTitle>
                      <CardDescription className="text-sm">
                        <div className="flex items-center space-x-1 mb-1">
                          <University className="h-3 w-3" />
                          <span>{collaborator.institution}</span>
                        </div>
                        <div className="text-xs text-slate-500">{collaborator.department}</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-slate-700">Expertise:</span>
                      <p className="text-sm text-slate-600">{collaborator.expertise}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-700">Collaboration:</span>
                      <p className="text-sm text-slate-600">{collaborator.collaboration}</p>
                    </div>
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <a href={collaborator.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Visit Institution
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Industry Partners */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Building className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Industry Partners</h2>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Corporate Collaborations</CardTitle>
              <CardDescription>
                Strategic partnerships with leading biotechnology companies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {industryPartners.map((partner, index) => <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold mb-2">{partner.name}</h4>
                    <div className="mb-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {partner.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{partner.description}</p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Funding Opportunities */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <DollarSign className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Funding Opportunities</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {fundingOpportunities.map((opportunity, index) => <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    <span className={`px-2 py-1 text-xs rounded-full ${getEligibilityColor(opportunity.eligibility)}`}>
                      {opportunity.eligibility}
                    </span>
                  </div>
                  <CardDescription className="text-sm font-medium text-primary">
                    {opportunity.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{opportunity.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Amount:</span>
                      <span className="font-medium">{opportunity.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Duration:</span>
                      <span className="font-medium">{opportunity.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Deadline:</span>
                      <span className="font-medium text-red-600">{opportunity.deadline}</span>
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Current Lab Funding */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Current Lab Funding</h2>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Active Research Grants</CardTitle>
              <CardDescription>
                Current funding supporting our research activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeGrants.map((grant, index) => <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{grant.title}</h4>
                      <div className="text-right">
                        <span className="text-xl font-bold text-green-600">{grant.amount}</span>
                        <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1">
                          {grant.status}
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
                      <div>
                        <span className="font-medium">Sponsor:</span> {grant.sponsor}
                      </div>
                      <div>
                        <span className="font-medium">Period:</span> {grant.period}
                      </div>
                      <div>
                        <span className="font-medium">PI:</span> {grant.pi}
                      </div>
                    </div>
                  </div>)}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700 mb-1">
                    Total Active Funding: $3.2M
                  </div>
                  <p className="text-sm text-green-600">Supporting groundbreaking cytoskeleton research</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Funding Resources */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Funding Resources & Support</CardTitle>
              <CardDescription>
                Comprehensive support for successful grant applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Application Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <a href="#" className="text-primary hover:underline">Grant Writing Workshop Materials</a></li>
                    <li>• <a href="#" className="text-primary hover:underline">Sample Successful Applications</a></li>
                    <li>• <a href="#" className="text-primary hover:underline">Budget Planning Templates</a></li>
                    <li>• <a href="#" className="text-primary hover:underline">Review Criteria Guidelines</a></li>
                    <li>• <a href="#" className="text-primary hover:underline">Collaboration Agreement Templates</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Success Tips</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Start applications well before deadlines</li>
                    <li>• Seek feedback from experienced researchers</li>
                    <li>• Clearly articulate research significance</li>
                    <li>• Follow all formatting requirements exactly</li>
                    <li>• Establish strong collaborative relationships</li>
                    <li>• Demonstrate preliminary data when possible</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Grant Writing & Collaboration Support</h4>
                    <p className="text-sm text-blue-700">
                      Our lab offers regular grant writing sessions, collaboration facilitation, and one-on-one mentoring. 
                      Contact us to schedule a consultation or join our monthly grant writing group.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>;
};
export default FundingPage;