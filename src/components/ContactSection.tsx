import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            I’d love to hear from you! Whether it’s a project, opportunity, or
            just a chat — feel free to reach out.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-portfolio-blue mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Email</p>
                  <a
                    href="mailto:delightvincent487@gmail.com"
                    className="text-gray-800 text-sm sm:text-base font-medium hover:text-portfolio-blue transition-colors break-words"
                  >
                    delightvincent487@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center">
                  <Phone className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Phone</p>
                  <a
                    href="tel:08060329362"
                    className="text-gray-800 text-sm sm:text-base font-medium hover:text-portfolio-blue transition-colors"
                  >
                    08060329362
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-portfolio-blue mb-6 text-center">
              Connect With Me
            </h3>
            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
              <a
                href="https://github.com/Yun4g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-100 rounded-full hover:bg-portfolio-blue hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/delight-vincent-700946300/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-100 rounded-full hover:bg-portfolio-blue hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
