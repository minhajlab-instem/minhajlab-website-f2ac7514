import React from 'react';
import { MapPin, Phone, Mail as MailIcon, Navigation, ZoomIn, ZoomOut, Layers, GraduationCap, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useContactInfo, useLabPositions, submitContactForm } from '@/hooks/useContactData';
import { useToast } from '@/hooks/use-toast';

const ContactPage: React.FC = () => {
  const { data: contactInfo, isLoading: contactLoading } = useContactInfo();
  const { data: labPositions, isLoading: positionsLoading } = useLabPositions();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const submissionData = {
      full_name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      await submitContactForm(submissionData);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const getIconComponent = (iconName: string) => {
    const icons = {
      GraduationCap,
      Users,
      BookOpen,
      Award
    };
    return icons[iconName as keyof typeof icons] || GraduationCap;
  };

  if (contactLoading || positionsLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
        Get In Touch
      </h1>
      
      {/* Contact Information & Map Panel */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-sky-700">Contact Information</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="space-y-4 font-sans text-slate-700 mb-8">
              <div className="flex items-start">
                <MapPin size={24} className="mr-3 mt-1 text-sky-600" />
                <div>
                  <h3 className="font-semibold">Our Address</h3>
                  <p>{contactInfo?.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon size={24} className="mr-3 mt-1 text-sky-600" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p>{contactInfo?.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={24} className="mr-3 mt-1 text-sky-600" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p>{contactInfo?.phone}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-sky-700">Lab Hours</h3>
              <div className="font-sans text-slate-700 whitespace-pre-line">
                {contactInfo?.lab_hours}
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-sky-700">Find Our Lab</h3>
            <div className="relative aspect-w-16 aspect-h-9 bg-slate-100 rounded-md overflow-hidden" style={{ height: '300px' }}>
              {/* Map Controls */}
              <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
                <button className="bg-white shadow-md p-2 rounded hover:bg-slate-50">
                  <ZoomIn size={16} className="text-slate-600" />
                </button>
                <button className="bg-white shadow-md p-2 rounded hover:bg-slate-50">
                  <ZoomOut size={16} className="text-slate-600" />
                </button>
                <button className="bg-white shadow-md p-2 rounded hover:bg-slate-50">
                  <Layers size={16} className="text-slate-600" />
                </button>
              </div>
              
              {/* Navigation Control */}
              <div className="absolute top-4 left-4 z-10">
                <button className="bg-white shadow-md p-2 rounded hover:bg-slate-50">
                  <Navigation size={16} className="text-slate-600" />
                </button>
              </div>
              
              {/* Dummy Map Content */}
              <div className="w-full h-full relative bg-gradient-to-br from-green-100 to-blue-100">
                {/* Grid lines to simulate map */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#94a3b8" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Simulated streets */}
                <div className="absolute top-1/3 left-0 w-full h-2 bg-slate-300 opacity-60"></div>
                <div className="absolute top-2/3 left-0 w-full h-2 bg-slate-300 opacity-60"></div>
                <div className="absolute top-0 left-1/3 w-2 h-full bg-slate-300 opacity-60"></div>
                <div className="absolute top-0 left-2/3 w-2 h-full bg-slate-300 opacity-60"></div>
                
                {/* University Buildings */}
                <div className="absolute top-1/4 left-1/4 w-16 h-12 bg-slate-400 rounded shadow-sm flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">BIOL</span>
                </div>
                <div className="absolute top-1/2 left-1/2 w-20 h-16 bg-slate-500 rounded shadow-sm flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">CHEM</span>
                </div>
                <div className="absolute top-3/4 left-1/3 w-14 h-10 bg-slate-400 rounded shadow-sm flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">LIB</span>
                </div>
                
                {/* Lab Location Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                  <div className="bg-red-500 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div className="bg-white px-3 py-1 rounded shadow-md mt-2 whitespace-nowrap text-sm font-semibold">
                    Cytoskeleton Research Lab
                  </div>
                </div>
                
                {/* Green areas */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute top-4 right-8 w-16 h-16 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute bottom-8 right-4 w-10 h-10 bg-green-300 rounded-full opacity-70"></div>
              </div>
              
              {/* Map attribution */}
              <div className="absolute bottom-2 left-2 text-xs text-slate-500 bg-white bg-opacity-80 px-2 py-1 rounded">
                Interactive Map Placeholder
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-600 font-sans">
                {contactInfo?.address} • {contactInfo?.building_info}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Lab & Contact Form Side by Side */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Join the Lab Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-sky-700">Join Our Lab</h2>
          <p className="text-slate-600 mb-6 font-sans">
            We welcome passionate researchers at all career stages to join our dynamic cytoskeleton research team.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {labPositions?.map((position) => {
              const IconComponent = getIconComponent(position.icon);
              return (
                <AccordionItem key={position.id} value={position.position_type}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <IconComponent className="mr-3 text-sky-600" size={20} />
                      <span className="font-heading font-semibold">{position.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-slate-700 font-sans">
                      <p><strong>Duration:</strong> {position.duration_text}</p>
                      
                      {position.position_requirements && position.position_requirements.length > 0 && (
                        <>
                          <p><strong>Requirements:</strong></p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            {position.position_requirements
                              .sort((a, b) => a.display_order - b.display_order)
                              .map((req) => (
                                <li key={req.id}>{req.requirement}</li>
                              ))}
                          </ul>
                        </>
                      )}
                      
                      {position.application_steps && position.application_steps.length > 0 && (
                        <>
                          <p><strong>Application Process:</strong></p>
                          <ol className="list-decimal list-inside space-y-1 ml-4">
                            {position.application_steps
                              .sort((a, b) => a.display_order - b.display_order)
                              .map((step) => (
                                <li key={step.id}>{step.step_description}</li>
                              ))}
                          </ol>
                        </>
                      )}
                      
                      {position.position_notes && position.position_notes.length > 0 && (
                        <div className="space-y-2">
                          {position.position_notes
                            .sort((a, b) => a.display_order - b.display_order)
                            .map((note) => (
                              <p 
                                key={note.id} 
                                className={note.highlight_color || "text-sky-600"}
                                style={{ fontWeight: note.is_important ? 'bold' : 'normal' }}
                              >
                                {note.note}
                              </p>
                            ))}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-slate-700 font-sans text-sm">
              <strong>General Note:</strong> All positions require a commitment to collaborative research, scientific integrity, 
              and contributing to a positive lab environment. We particularly encourage applications from underrepresented 
              groups in science.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-sky-700">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6 font-sans">
            <div>
              <Label htmlFor="name" className="text-slate-700">Full Name</Label>
              <Input type="text" id="name" name="name" required className="mt-1 w-full border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-700">Email Address</Label>
              <Input type="email" id="email" name="email" required className="mt-1 w-full border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-slate-700">Subject</Label>
              <Input type="text" id="subject" name="subject" required className="mt-1 w-full border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
            <div>
              <Label htmlFor="message" className="text-slate-700">Message</Label>
              <Textarea id="message" name="message" rows={5} required className="mt-1 w-full border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-heading font-semibold py-3">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
