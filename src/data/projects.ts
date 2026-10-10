import calippoShotsCover from "../assets/images/projects/calippo-shots-project.webp";
import donutShopCover from "../assets/images/projects/donut-shop-project.webp";
import moneyMoodCover from "../assets/images/projects/moneymood-project.webp";
import sirVectorCover from "../assets/images/projects/sir-vector-project.webp";
import templeOfFiveCover from "../assets/images/projects/temple-of-five-project.webp";
import whichDevHeroCover from "../assets/images/projects/which-dev-hero-project.webp";

export type ProjectType = "Design" | "Game" | "E-commerce";

export type ProjectFilter = "Frontend" | "Backend" | "Fullstack" | ProjectType;

export const projectFilters: ProjectFilter[] = [
  "Frontend",
  "Backend",
  "Fullstack",
  "Design",
  "Game",
  "E-commerce",
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  types?: ProjectType[];
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "which-dev-hero",
    title: "Which Dev Hero Are You?",
    subtitle: "Fullstack-quiz för utvecklare",
    description:
      "Ett interaktivt fullstack-quiz där användaren svarar på frågor och matchas med en utvecklarprofil, med egen backend, databas, statistik och kommentarer.",
    technologies: ["TypeScript", "Vite", "Node.js", "Express", "MySQL", "Figma", "SCSS"],
    image: whichDevHeroCover,
    imageAlt: "Omslagsbild för Which Dev Hero Are You?",
    githubUrl: "https://github.com/AlexJCodes/which-dev-hero-are-you-api",
    liveUrl: "https://which-dev-hero.vercel.app/",
  },
  {
    id: "temple-of-five",
    title: "The Temple of Five",
    subtitle: "Digital escape room-upplevelse",
    description:
      "En digital escape room-upplevelse byggd i team med fokus på användarflöden, tillgänglighet och interaktivitet.",
    types: ["Game"],
    technologies: ["TypeScript", "Vite", "SCSS", "Figma"],
    image: templeOfFiveCover,
    imageAlt: "Omslagsbild för The Temple of Five",
    githubUrl: "https://github.com/AlexJCodes/escape-room-game",
    liveUrl: "https://alexjcodes.github.io/escape-room-game/",
  },
  {
    id: "money-mood",
    title: "MoneyMood",
    subtitle: "Budgetapp med användaren i fokus",
    description:
      "En budgetapp för inkomster, utgifter och sparmål med dynamiskt gränssnitt och lokal datalagring.",
    technologies: ["TypeScript", "Vite", "SCSS", "LocalStorage", "Figma"],
    image: moneyMoodCover,
    imageAlt: "Omslagsbild för budgetappen MoneyMood",
    githubUrl: "https://github.com/AlexJCodes/money-mood-budget-app",
    liveUrl: "https://alexjcodes.github.io/money-mood-budget-app/",
  },
  {
    id: "donut-shop",
    title: "G's Donut Shop",
    subtitle: "E-handel från produktval till checkout",
    description:
      "En lekfull webbshop med filtrering, sortering, varukorg och ett komplett checkout-flöde.",
    types: ["E-commerce"],
    technologies: ["HTML", "SCSS", "JavaScript", "Vite", "Figma"],
    image: donutShopCover,
    imageAlt: "Omslagsbild för G's Donut Shop",
    githubUrl: "https://github.com/AlexJCodes/donut-shop-ui",
    liveUrl: "https://alexjcodes.github.io/donut-shop-ui/",
  },
  {
    id: "sir-vector",
    title: "Sir Vector",
    subtitle: "Visuellt frontendprojekt",
    description:
      "Ett visuellt frontendprojekt med spelinspirerad identitet med fokus på animation, grafisk form och interaktiva detaljer.",
    types: ["Design"],
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "GSAP"],
    image: sirVectorCover,
    imageAlt: "Omslagsbild för Sir Vector",
    githubUrl: "https://github.com/Medieinstitutet/fed25d-grafiska-verktyg-individuell-AlexJCodes",
    liveUrl: "https://medieinstitutet.github.io/fed25d-grafiska-verktyg-individuell-AlexJCodes/",
  },
  {
    id: "calippo-shots",
    title: "Calippo Shots",
    subtitle: "Från Figma-design till färdig frontend",
    description:
      "Ett skolprojekt där vi fick en annan grupps Figma-design och kravspecifikation och ansvarade för att bygga den responsiva frontend-lösningen.",
    technologies: ["HTML", "SCSS", "JavaScript", "Figma"],
    image: calippoShotsCover,
    imageAlt: "Omslagsbild för frontendprojektet Calippo Shots",
    githubUrl: "https://github.com/Medieinstitutet/fed25d-grafiska-verktyg-bleed-trim",
    liveUrl: "https://medieinstitutet.github.io/fed25d-grafiska-verktyg-bleed-trim/",
  },
];
