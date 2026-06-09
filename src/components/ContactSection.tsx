import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";


const ContactSection = () => {






  return (
    <section id="contact" className="relative section-padding overflow-hidden bg-[#020a16] text-white">
      <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl text-center pb-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Have a project idea or want to collaborate? Reach out and let&apos;s create something exceptional together.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-semibold text-white">Contact Information</h3>
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                <a href="mailto:delightvincent487@gmail.com" className="mt-1 block text-base font-medium text-white transition hover:text-cyan-300">
                  delightvincent487@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
                <a href="tel:08060329362" className="mt-1 block text-base font-medium text-white transition hover:text-cyan-300">
                  08060329362
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card flex flex-col items-center justify-center gap-6 p-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
            <p className="mt-3 text-slate-400">
              Let&apos;s build impactful experiences and great products together.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Yun4g" target="_blank" rel="noreferrer" className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-cyan-400/20 hover:text-white">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/delight-vincent-700946300/" target="_blank" rel="noreferrer" className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-violet-500/20 hover:text-white">
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
