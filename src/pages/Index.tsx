// src/pages/index.tsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="h-fit w-full overflow-x-hidden">
      <Navbar />

        <HeroSection />
    

      <AnimatedSection delay={0.2}>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <ContactSection />
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
