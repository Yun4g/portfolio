
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-portfolio-gray-light">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Feel free to contact me for any work or suggestions. I'll get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-portfolio-blue hover:bg-blue-800" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-portfolio-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-500">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-portfolio-blue hover:underline">your.email@example.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-portfolio-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-500">Phone</h4>
                    <a href="tel:+1234567890" className="text-portfolio-blue hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center hover:bg-portfolio-blue hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center hover:bg-portfolio-blue hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
