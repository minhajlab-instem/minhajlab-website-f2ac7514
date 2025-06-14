
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Award, Users, Newspaper } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';

// Selected news items for homepage display
const selectedNewsItems = [{
  id: "grant-2025",
  title: "Dr. Vance Receives Prestigious Research Grant",
  date: "May 15, 2025",
  category: "Award",
  icon: Award,
  summary: "Our Principal Investigator has been awarded a significant grant to further investigate cytoskeletal dynamics in neurodegenerative diseases.",
  badge: "Research Grant"
}, {
  id: "new-member-carter",
  title: "Lab Welcomes New Postdoctoral Fellow Dr. Ben Carter",
  date: "April 28, 2025",
  category: "Team",
  icon: Users,
  summary: "We are thrilled to welcome Dr. Ben Carter to our team, bringing expertise in advanced microscopy and microtubule research.",
  badge: "New Member"
}, {
  id: "breakthrough-2025",
  title: "Major Breakthrough in Cytoskeletal Dynamics",
  date: "April 5, 2025",
  category: "Publication",
  icon: Newspaper,
  summary: "Our lab has published a groundbreaking study revealing new insights into the assembly and function of the cytoskeleton.",
  badge: "Research Highlight"
}];

const HomePage: React.FC = () => {
  return <div className="animate-fade-in-up">
      {/* Image Slider Section */}
      <section className="relative h-96 overflow-hidden">
        <ImageSlider />
      </section>

      {/* Hero Text Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Unraveling the mysteries of cytoskeleton across scales!
          </h1>
          <p className="text-lg md:text-xl font-sans mb-10 max-w-3xl mx-auto">Our lab studies cytoskeleton,  motility and contractile elements across scale dimensions, from whole organ to cellular and molecular scale.</p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-sky-100 font-heading font-semibold px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/research">
                Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-sky-700 font-heading font-semibold px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">
              Latest Lab Updates
            </h2>
            <p className="text-lg font-sans text-slate-600 max-w-2xl mx-auto">
              Stay informed about our recent achievements, new team members, and breakthrough research.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {selectedNewsItems.map((item, index) => <Link key={index} to={`/news?id=${item.id}`} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 block group cursor-pointer transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-sky-100">
                      <item.icon className="h-5 w-5 text-sky-600" />
                    </div>
                    <span className="text-sm text-slate-500 font-medium">
                      <Calendar size={12} className="inline mr-1" />
                      {item.date}
                    </span>
                  </div>
                  <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-2 py-1 rounded">
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-lg font-heading font-semibold mb-3 text-slate-800 line-clamp-2 group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-sans text-slate-600 text-sm mb-4 line-clamp-3">
                  {item.summary}
                </p>

                <div className="text-sky-600 text-sm font-medium group-hover:text-sky-700 transition-colors">
                  Read more <ArrowRight className="inline h-4 w-4 ml-1" />
                </div>
              </Link>)}
          </div>

          <div className="text-center">
            <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white font-heading font-semibold px-8 py-3">
              <Link to="/news">
                View All Updates <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};

export default HomePage;
