
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Calendar, Users, ExternalLink, Award } from 'lucide-react';

const FundingPage: React.FC = () => {
  const fundingOpportunities = [
    {
      title: "NSF Graduate Research Fellowship",
      organization: "National Science Foundation",
      amount: "$34,000/year",
      duration: "3 years",
      deadline: "October 15, 2025",
      eligibility: "Graduate Students",
      description: "Supports outstanding graduate students pursuing research-based degrees in NSF-supported fields."
    },
    {
      title: "NIH NRSA Postdoctoral Fellowship",
      organization: "National Institutes of Health",
      amount: "$50,000-$58,000/year",
      duration: "2-3 years",
      deadline: "Multiple deadlines",
      eligibility: "Postdocs",
      description: "Individual fellowships for postdoctoral training in biomedical research."
    },
    {
      title: "ASCB LGBTQ+ Travel Award",
      organization: "American Society for Cell Biology",
      amount: "$500-$1,000",
      duration: "One-time",
      deadline: "September 1, 2025",
      eligibility: "Students/Postdocs",
      description: "Travel support for LGBTQ+ researchers to attend scientific conferences."
    },
    {
      title: "Cytoskeleton Research Grant",
      organization: "Cell Biology Foundation",
      amount: "$25,000-$75,000",
      duration: "1-2 years",
      deadline: "January 31, 2026",
      eligibility: "Faculty",
      description: "Supports innovative research projects focused on cytoskeletal biology and dynamics."
    }
  ];

  const activeGrants = [
    {
      title: "Mechanisms of Cytoskeletal Reorganization",
      sponsor: "NIH R01",
      amount: "$1,200,000",
      period: "2023-2028",
      pi: "Dr. Eleanor Vance"
    },
    {
      title: "Advanced Microscopy for Live Cell Imaging",
      sponsor: "NSF MRI",
      amount: "$850,000",
      period: "2024-2027",
      pi: "Dr. Eleanor Vance"
    },
    {
      title: "Undergraduate Research Training",
      sponsor: "NIH T35",
      amount: "$300,000",
      period: "2022-2027",
      pi: "Dr. Eleanor Vance"
    }
  ];

  const getEligibilityColor = (eligibility: string) => {
    const colors: { [key: string]: string } = {
      'Graduate Students': 'bg-blue-100 text-blue-800',
      'Postdocs': 'bg-green-100 text-green-800',
      'Students/Postdocs': 'bg-purple-100 text-purple-800',
      'Faculty': 'bg-orange-100 text-orange-800'
    };
    return colors[eligibility] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Funding Sources
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Funding Opportunities */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <DollarSign className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Available Funding Opportunities</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {fundingOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
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
              </Card>
            ))}
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
                {activeGrants.map((grant, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{grant.title}</h4>
                      <span className="text-lg font-bold text-green-600">{grant.amount}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-slate-600">
                      <span>Sponsor: {grant.sponsor}</span>
                      <span>Period: {grant.period}</span>
                      <span>PI: {grant.pi}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Funding Resources */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Funding Resources & Tips</CardTitle>
              <CardDescription>
                Helpful information for successful grant applications
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
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Success Tips</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Start applications well before deadlines</li>
                    <li>• Seek feedback from experienced researchers</li>
                    <li>• Clearly articulate research significance</li>
                    <li>• Follow all formatting requirements exactly</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Grant Writing Support</h4>
                    <p className="text-sm text-blue-700">
                      Our lab offers regular grant writing sessions and one-on-one mentoring. 
                      Contact us to schedule a consultation or join our monthly grant writing group.
                    </p>
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

export default FundingPage;
