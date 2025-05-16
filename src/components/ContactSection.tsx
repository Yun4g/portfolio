
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

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



  return (
    <section id="contact" className="my-3 bg-portfolio-gray-light">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Feel free to contact me for any work or suggestions. I'll get back to you as soon as possible.
        </p>
        
        <div className="">
         
          
          <div className="flex  flex-col  w-full  py-4 justify-center">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold w-full mb-6 text-portfolio-blue">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center">
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-portfolio-blue" size={20} />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="text-gray-500 ">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-portfolio-blue hover:underline">delightvincent487@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-portfolio-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-500">Phone</h4>
                    <a href="tel:08060329362" className="text-portfolio-blue hover:underline">08060329362</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Yun4g" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center hover:bg-portfolio-blue hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/delight-vincent-700946300/" 
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
