
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Microscope, ExternalLink, FileText, Award, Link } from 'lucide-react';
import { 
  useApplicationResources, 
  useOnlineCourses, 
  useRecommendedBooks, 
  useResearchTools 
} from '@/hooks/useResourcesData';

const UsefulLinksPage: React.FC = () => {
  const { data: applicationResources, isLoading: loadingResources } = useApplicationResources();
  const { data: onlineCourses, isLoading: loadingCourses } = useOnlineCourses();
  const { data: recommendedBooks, isLoading: loadingBooks } = useRecommendedBooks();
  const { data: researchTools, isLoading: loadingTools } = useResearchTools();

  if (loadingResources || loadingCourses || loadingBooks || loadingTools) {
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
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Application Resources */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Application Resources</h2>
          </div>
          <div className="space-y-4">
            {applicationResources?.map((resource) => (
              <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">{resource.title}</h3>
                    <p className="text-muted-foreground">{resource.description}</p>
                    <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 mt-1 inline-block">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <Button asChild size="sm">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Online Courses */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Online Courses</h2>
          </div>
          <div className="space-y-4">
            {onlineCourses?.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <p className="text-primary font-medium text-sm">{course.provider}</p>
                    <p className="text-muted-foreground">{course.description}</p>
                    <div className="flex space-x-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">{course.level}</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">{course.duration}</span>
                    </div>
                  </div>
                </div>
                <Button asChild size="sm">
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Take Course
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Books */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Recommended Books</h2>
          </div>
          <div className="space-y-4">
            {recommendedBooks?.map((book) => (
              <div key={book.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">{book.title}</h3>
                    <p className="text-muted-foreground font-medium text-sm">{book.authors}</p>
                    <p className="text-muted-foreground">{book.description}</p>
                    <div className="flex space-x-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded">{book.category}</span>
                      <span className="text-xs text-slate-600">{book.edition}</span>
                    </div>
                  </div>
                </div>
                <Button asChild size="sm">
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Book
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Research Tools */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Microscope className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Essential Research Tools</h2>
          </div>
          <div className="space-y-4">
            {researchTools?.map((tool) => (
              <div key={tool.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <Link className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">{tool.title}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                    <div className="flex space-x-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">{tool.category}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        tool.cost === 'Free' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {tool.cost}
                      </span>
                    </div>
                  </div>
                </div>
                <Button asChild size="sm">
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started Guide */}
        <section>
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Getting Started with Research Tools</h2>
            <p className="text-muted-foreground mb-6">
              A beginner's guide to essential software and tools for cytoskeleton research
            </p>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default UsefulLinksPage;
