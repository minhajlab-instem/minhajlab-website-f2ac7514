
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Mail } from 'lucide-react';

const StudentsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-8">
        {/* Background Line Art - Students/Graduation/Learning */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M200 120 L240 80 L280 120 L320 80 L360 120' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='240' cy='65' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M235 50 Q240 45 245 50 L245 60 L235 60 Z' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M500 120 L540 80 L580 120 L620 80 L660 120' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='540' cy='65' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M535 50 Q540 45 545 50 L545 60 L535 60 Z' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M800 120 L840 80 L880 120 L920 80 L960 120' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='840' cy='65' r='15' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M835 50 Q840 45 845 50 L845 60 L835 60 Z' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='100' y='140' width='20' height='30' rx='2' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='140' y='135' width='20' height='35' rx='2' stroke='%23334155' stroke-width='1' fill='none'/%3E%3Crect x='180' y='130' width='20' height='40' rx='2' stroke='%23334155' stroke-width='1' fill='none'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
          Resources for Students
        </h1>
        <div className="relative w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
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
