import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import PersonalSection from "./sections/PersonalSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

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
      </main>
    </>
  );
}

export default App;
