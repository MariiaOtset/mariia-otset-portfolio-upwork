import "./App.css";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Achievements from "./components/Achievements/Achievements.jsx";

const MyProjects = lazy(() => import("./components/MyProjects/MyProjects.jsx"));
const Education = lazy(() => import("./components/Education/Education.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Hero />
        <AboutMe />
        <Experience />
        <TechStack />
        <SkillsContainer />
        <MyProjects />
        <Achievements />
        <Education />
        <Contacts />
      </Suspense>
    </>
  );
}

export default App;