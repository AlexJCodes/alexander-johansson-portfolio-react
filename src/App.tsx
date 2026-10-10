import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
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
      </main>
    </>
  );
}

export default App;
