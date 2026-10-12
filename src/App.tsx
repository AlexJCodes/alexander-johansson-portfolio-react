import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PersonalSection from "./sections/PersonalSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <PersonalSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
