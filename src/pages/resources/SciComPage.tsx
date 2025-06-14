
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Film, ShoppingCart } from 'lucide-react';
import { useScienceCommData } from '@/hooks/useResourcesData';

const SciComPage: React.FC = () => {
  const { data: sciCommData, isLoading, error } = useScienceCommData();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
        <div className="text-center text-red-600">Error loading content</div>
      </div>
    );
  }

  const book = sciCommData?.find(item => item.type === 'book');
  const video = sciCommData?.find(item => item.type === 'video');
  const film = sciCommData?.find(item => item.type === 'film');

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
        {book && (
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-heading font-bold">Featured Book</h2>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Book Thumbnail */}
                  <div className="lg:w-1/3 p-6">
                    <img 
                      src={book.thumbnail_url || '/placeholder.svg'} 
                      alt={book.title}
                      className="w-full max-w-xs mx-auto lg:max-w-none rounded-lg shadow-md"
                    />
                  </div>
                  
                  {/* Book Details */}
                  <div className="lg:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{book.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        {book.year && <span>Published: {book.year}</span>}
                        {book.pages && <span>{book.pages}</span>}
                      </div>
                    </CardHeader>
                    
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {book.description}
                    </CardDescription>
                    
                    {book.shop_link && (
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <a href={book.shop_link} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Shop This Book
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Educational Video Section */}
        {video && (
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Video className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-heading font-bold">Featured Educational Video</h2>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Video Embed */}
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${video.embed_id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Video Description */}
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{video.title}</CardTitle>
                      {video.duration && (
                        <div className="text-sm text-muted-foreground">
                          Duration: {video.duration}
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardDescription className="text-base leading-relaxed">
                      {video.description}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Short Film Section */}
        {film && (
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Film className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-heading font-bold">Featured Short Film</h2>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Film Embed */}
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${film.embed_id}`}
                        title={film.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    {/* Film Poster */}
                    {film.poster_url && (
                      <div className="text-center">
                        <img 
                          src={film.poster_url} 
                          alt={`${film.title} poster`}
                          className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                        />
                        <p className="text-sm text-muted-foreground mt-2">Official Poster</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Film Description */}
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{film.title}</CardTitle>
                      <div className="flex flex-col space-y-1 text-sm text-muted-foreground mb-4">
                        {film.year && <span>Year: {film.year}</span>}
                        {film.duration && <span>Duration: {film.duration}</span>}
                        {film.awards && <span className="text-golden font-medium">{film.awards}</span>}
                      </div>
                    </CardHeader>
                    
                    <CardDescription className="text-base leading-relaxed">
                      {film.description}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

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
