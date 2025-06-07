
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Film, ExternalLink } from 'lucide-react';

const SciComPage: React.FC = () => {
  const books = [
    {
      title: "The Dynamic Cell: Cytoskeleton in Focus",
      description: "A comprehensive guide to understanding cellular dynamics and cytoskeletal organization.",
      link: "https://example.com/book1",
      year: "2023"
    },
    {
      title: "Microtubules and Motor Proteins",
      description: "Exploring the fascinating world of cellular transport and organization.",
      link: "https://example.com/book2",
      year: "2022"
    }
  ];

  const videos = [
    {
      title: "The Secret Life of Cells",
      description: "A journey into the microscopic world of cellular mechanics and cytoskeletal dynamics.",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      duration: "15 min"
    },
    {
      title: "Actin Networks in Action",
      description: "Visualizing how actin filaments create the cellular scaffolding that drives movement.",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      duration: "12 min"
    }
  ];

  const films = [
    {
      title: "The Molecular Dance",
      description: "A short documentary exploring the beauty of protein interactions at the cellular level.",
      link: "https://example.com/film1",
      year: "2023",
      duration: "8 min"
    },
    {
      title: "Invisible Architecture",
      description: "How the cytoskeleton shapes life at the smallest scale.",
      link: "https://example.com/film2",
      year: "2022",
      duration: "12 min"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      {/* Title with Background Illustration */}
      <div className="relative mb-8">
        {/* Background Line Art - Communication/Media/Outreach */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Ccircle cx='200' cy='100' r='40' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M180 85 L220 85 M180 100 L220 100 M180 115 L220 115' stroke='%23334155' stroke-width='2'/%3E%3Cpath d='M240 80 L280 80 L300 100 L280 120 L240 120 Z' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Crect x='400' y='70' width='80' height='60' rx='8' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Ccircle cx='440' cy='90' r='8' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M420 110 L460 110' stroke='%23334155' stroke-width='2'/%3E%3Crect x='600' y='75' width='100' height='50' rx='4' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M620 90 L630 100 L620 110 M640 90 L680 90 M640 100 L680 100 M640 110 L680 110' stroke='%23334155' stroke-width='1'/%3E%3Ccircle cx='850' cy='100' r='35' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpolygon points='835,90 835,110 855,100' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M1000 80 Q1020 60 1040 80 Q1020 100 1000 80' stroke='%23334155' stroke-width='2' fill='none'/%3E%3Cpath d='M1050 80 Q1070 60 1090 80 Q1070 100 1050 80' stroke='%23334155' stroke-width='2' fill='none'/%3E%3C/svg%3E")`
          }}
        />
        <h1 className="relative text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
          Science Communication
        </h1>
        <div className="relative w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Books Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Books & Publications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{book.title}</CardTitle>
                  <CardDescription>{book.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-slate-600">Published: {book.year}</span>
                  </div>
                  <Button asChild size="sm">
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Book
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Video className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Educational Videos</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video mb-4">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-slate-600">
                    Duration: {video.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Short Films Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Film className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold">Short Films</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {films.map((film, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{film.title}</CardTitle>
                  <CardDescription>{film.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-slate-600">
                    <span>Year: {film.year}</span>
                    <span>Duration: {film.duration}</span>
                  </div>
                  <Button asChild size="sm">
                    <a href={film.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch Film
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>About Our Outreach</CardTitle>
              <CardDescription>
                Bridging the gap between cutting-edge research and public understanding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4">
                Our science communication efforts aim to make complex cytoskeletal research accessible to diverse audiences. 
                Through books, videos, and short films, we showcase the beauty and importance of cellular mechanics in 
                understanding life at its most fundamental level.
              </p>
              <p className="text-slate-700">
                These resources are designed for students, educators, and anyone curious about the microscopic world 
                that drives all life processes. We believe that sharing knowledge is essential for advancing scientific 
                literacy and inspiring the next generation of researchers.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default SciComPage;
