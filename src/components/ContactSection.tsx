import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I’d love to hear from you! Whether it’s a project, opportunity, or
            just a chat — feel free to reach out.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="text-portfolio-blue" size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a
                    href="mailto:delightvincent487@gmail.com"
                    className="text-gray-800 font-medium hover:text-portfolio-blue transition-colors"
                  >
                    delightvincent487@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center">
                  <Phone className="text-portfolio-blue" size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <a
                    href="tel:08060329362"
                    className="text-gray-800 font-medium hover:text-portfolio-blue transition-colors"
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
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-6">
              Connect With Me
            </h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/Yun4g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full hover:bg-portfolio-blue hover:text-white transition-all duration-300"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/delight-vincent-700946300/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full hover:bg-portfolio-blue hover:text-white transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
