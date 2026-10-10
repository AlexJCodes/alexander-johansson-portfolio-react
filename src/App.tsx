import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </>
  );
}

export default App;
