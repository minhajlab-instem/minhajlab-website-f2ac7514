
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Mail } from 'lucide-react';

const StudentsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Resources for Students
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Research Opportunities */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-blue-500">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Research Opportunities</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Join our research team and contribute to cutting-edge cytoskeleton research.
            </CardDescription>
            <ul className="space-y-2 mb-6 text-sm">
              <li>• Undergraduate Research Program (Summer & Academic Year)</li>
              <li>• Graduate Student Positions (PhD & Masters)</li>
              <li>• Postdoctoral Fellowship Opportunities</li>
              <li>• Visiting Student Researcher Program</li>
            </ul>
            <Button asChild>
              <Link to="/contact">Apply Now</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Learning Materials */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-green-500">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Educational Materials</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Comprehensive learning resources for understanding cytoskeleton biology.
            </CardDescription>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold mb-2">Lecture Series</h4>
                <p className="text-sm text-slate-600">Recorded lectures on cytoskeleton fundamentals</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold mb-2">Reading List</h4>
                <p className="text-sm text-slate-600">Essential papers and textbook recommendations</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold mb-2">Laboratory Manuals</h4>
                <p className="text-sm text-slate-600">Step-by-step guides for key techniques</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold mb-2">Online Tutorials</h4>
                <p className="text-sm text-slate-600">Interactive learning modules</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scholarships & Awards */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-purple-500">
                <Award className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Scholarships & Awards</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Financial support and recognition opportunities for outstanding students.
            </CardDescription>
            <ul className="space-y-2 mb-6 text-sm">
              <li>• Cytoskeleton Research Excellence Award</li>
              <li>• Undergraduate Research Scholarship</li>
              <li>• Graduate Student Travel Grants</li>
              <li>• Best Poster Awards at Annual Symposium</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-orange-500">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Get in Touch</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Have questions about joining our research team or accessing resources?
            </CardDescription>
            <p className="text-sm mb-4">
              Contact our Student Coordinator: <br />
              Email: students@minhajlab.edu <br />
              Office Hours: Monday-Friday, 9:00 AM - 5:00 PM
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentsPage;
