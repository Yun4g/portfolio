import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={sectionVariants}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      <HeroSection />

      <AnimatedSection delay={0.1}>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <ContactSection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <Footer />
      </AnimatedSection>
    </main>
  );
};

export default Index;
