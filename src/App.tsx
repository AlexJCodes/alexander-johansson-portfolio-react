import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PersonalSection from "./sections/PersonalSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-foreground focus:px-4 focus:py-3 focus:font-semibold focus:text-background"
      >
        Hoppa till huvudinnehåll
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
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
