import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tactical-grid">
      <Navbar />
      <HeroSection />
      <div className="tactical-line" />
      <AboutSection />
      <div className="tactical-line" />
      <ProjectsSection />
      <div className="tactical-line" />
      <SkillsSection />
      <div className="tactical-line" />
      <EducationSection />
      <div className="tactical-line" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
