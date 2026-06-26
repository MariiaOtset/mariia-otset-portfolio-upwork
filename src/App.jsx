import "./App.css";
import { lazy, Suspense } from "react";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer.jsx";
import Loader from "./components/Loader/Loader.jsx";
import BusinessValue from "./components/BusinessValue/BusinessValue.jsx";
import Workflow from "./components/Workflow/Workflow.jsx";
import Availability from "./components/Availability/Availability.jsx";
import WhyWorkWithMe from "./components/WhyWorkWithMe/WhyWorkWithMe.jsx";
import CaseStudies from "./components/CaseStudies/CaseStudies.jsx";

const MyProjects = lazy(() => import("./components/MyProjects/MyProjects.jsx"));
const Education = lazy(() => import("./components/Education/Education.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <AboutMe />
        <SkillsContainer />
        <BusinessValue />
        <WhyWorkWithMe />
        <Workflow />
        <Availability />
        <CaseStudies />
        <MyProjects />
        <Education />
        <Contacts />
      </Suspense>
    </>
  );
}

export default App;
