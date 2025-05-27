
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button from shadcn is available
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Unraveling the Mysteries of the Cytoskeleton
          </h1>
          <p className="text-lg md:text-xl font-sans mb-10 max-w-3xl mx-auto">
            Our lab is dedicated to advancing the understanding of cytoskeleton dynamics and its crucial roles in cellular processes, health, and disease.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-sky-100 font-heading font-semibold px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/research">
                Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sky-700 font-heading font-semibold px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
            Pioneering Cytoskeletal Discoveries
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581093430995-0a01f5950992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZSUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Science Laboratory" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="font-sans text-slate-700 space-y-6">
              <p className="text-lg">
                Welcome to the Cytoskeleton Research Lab. We are a passionate team of scientists committed to exploring the intricate world of cellular architecture. The cytoskeleton, a dynamic network of protein filaments, is fundamental to cell shape, movement, division, and intracellular organization.
              </p>
              <p className="text-lg">
                Our research employs cutting-edge microscopy, biochemical assays, and computational modeling to investigate how cytoskeletal components assemble, function, and contribute to complex biological phenomena.
              </p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white font-heading font-semibold">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links/Highlights Section (Optional) */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-heading font-semibold mb-3 text-sky-700">Latest News</h3>
              <p className="font-sans text-slate-600 mb-4">Stay updated with our recent breakthroughs and lab announcements.</p>
              <Button asChild variant="link" className="text-sky-600 hover:text-sky-800 font-semibold">
                <Link to="/news">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-heading font-semibold mb-3 text-sky-700">Our Publications</h3>
              <p className="font-sans text-slate-600 mb-4">Explore our contributions to the scientific community.</p>
              <Button asChild variant="link" className="text-sky-600 hover:text-sky-800 font-semibold">
                <Link to="/publications">View Publications <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-heading font-semibold mb-3 text-sky-700">Join Us</h3>
              <p className="font-sans text-slate-600 mb-4">Interested in contributing to our research? Discover opportunities.</p>
              <Button asChild variant="link" className="text-sky-600 hover:text-sky-800 font-semibold">
                <Link to="/contact">Work With Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
