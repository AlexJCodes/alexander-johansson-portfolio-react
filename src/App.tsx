import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import PersonalSection from "./sections/PersonalSection";

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
