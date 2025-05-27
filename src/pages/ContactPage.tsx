
import React from 'react';
import { MapPin, Phone, Mail as MailIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted (Placeholder - no actual submission yet)!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
        Get In Touch
      </h1>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-sky-700">Contact Information</h2>
          <div className="space-y-4 font-sans text-slate-700">
            <div className="flex items-start">
              <MapPin size={24} className="mr-3 mt-1 text-sky-600" />
              <div>
                <h3 className="font-semibold">Our Address</h3>
                <p>123 Research Parkway, Science City, ST 98765, USA</p>
              </div>
            </div>
            <div className="flex items-start">
              <MailIcon size={24} className="mr-3 mt-1 text-sky-600" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p>info@cytoskeletonlab.example.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone size={24} className="mr-3 mt-1 text-sky-600" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-heading font-semibold mb-3 text-sky-700">Lab Hours</h3>
            <p className="font-sans text-slate-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="font-sans text-slate-700">Weekends: Closed</p>
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
       {/* Placeholder for a map - can be added later */}
       <div className="mt-16 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-center text-sky-700">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 bg-slate-200 rounded-md flex items-center justify-center">
            <p className="text-slate-500 italic">Embedded Map Placeholder (e.g., Google Maps)</p>
          </div>
        </div>
    </div>
  );
};

export default ContactPage;
