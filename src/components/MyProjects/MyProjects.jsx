import css from "./MyProjects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem.jsx";
import gameLandingImg from "../../assets/images/game-landing.jpg";
import waterTrackerImg from "../../assets/images/water-traker.jpg";
import travelTracksImg from "../../assets/images/travel-tracks.jpg";
import jferssonImg from "../../assets/images/jfersson.jpg";
import filmotekaImg from "../../assets/images/filmoteka.jpg";
import webStudioImg from "../../assets/images/web-studio.jpg";
import imageSearchImg from "../../assets/images/image-search.jpg";
import focusFrameImg from "../../assets/images/focus-frame.jpg";
import contactsBookImg from "../../assets/images/contacts-book.jpg";
import kpopShopImg from "../../assets/images/kpop-shop.png";

const projectsData = [
  {
    image: gameLandingImg,
    title: "Game Landing Page",
    description:
      "An interactive landing page for a mobile match-3 game. Implemented an adaptive design for mobile and desktop users. Role: developer of the Gallery, How to Play, Game Video sections and Privacy Policy page. Commercial team project.",
    technologies: ["HTML", "CSS", "JS"],
    liveLink: "https://vitayusko.github.io/Puppy-Diary-Epic-Match-3/",
    githubLink: "https://github.com/vitayusko/Puppy-Diary-Epic-Match-3",
  },
  {
    image: kpopShopImg,
    title: "Daebak Shop",
    description:
      "Adaptive for different devices K-pop merch store. Product pages were integrated, filtering by categories and names, Stripe for payment, Clerk for authentication and Supabase for database. ",
    technologies: [
      "Next.js",
      "Node.js",
      "Supabase",
      "Cleck",
      "Stripe",
      "React",
      "Tailwind CSS",
    ],
    liveLink: "https://frabjous-empanada-f7581f.netlify.app/",
  },
  {
    image: waterTrackerImg,
    title: "Aqua Track",
    description:
      "This application tracks water consumption. Implemented an adaptive design for mobile, tablet and desktop devices. Role: developer of User Settings. Team project.",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Redux",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
    ],
    liveLink: "https://final-project-frontend-weld.vercel.app/",
    githubLink: "https://github.com/Kamila-Lohvynenko/final-project-frontend",
  },
  {
    image: travelTracksImg,
    title: "Travel Trucks",
    description:
      "Travel Trucks is an application that helps users explore and organize travel information and logistics with an easy-to-use interface. Individual project.",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Redux",
      "React Router",
      "REST API",
      "Axios",
    ],
    liveLink: "https://wander-wheels-two.vercel.app/",
    githubLink: "https://github.com/MariiaOtset/wander-wheels",
  },
  {
    image: jferssonImg,
    title: "Developer Portfolio",
    description:
      "The portfolio website showcases the developer's work, skills, and projects, featuring adaptive design and animations. Role: Scrum Master and developer of the section of running lines with photos. Team project.",
    technologies: ["HTML", "CSS", "JS", "REST API"],
    liveLink: "https://instreamer1.github.io/project-js-teamwork05/",
    githubLink: "https://github.com/inmate1/project-js-teamwork05",
  },
  {
    image: filmotekaImg,
    title: "Movie Search",
    description:
      "A movie search application that allows users to find films by title and view details, including description, cast, and reviews. Integrated with an external API for fetching movie data. Individual project.",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "React Router",
      "Axios",
      "REST API",
    ],
    liveLink: "https://goit-react-hw-05-bice-phi.vercel.app/",
    githubLink: "https://github.com/MariiaOtset/goit-react-hw-05",
  },
  {
    image: webStudioImg,
    title: "Web Studio",
    description:
      "WebStudio website highlights company services with an adaptive design for mobile, tablet and desktop devices. Individual project.",
    technologies: ["HTML", "CSS", "JS"],
    liveLink: "https://mariiaotset.github.io/goit-markup-hw-06/",
    githubLink: "https://github.com/MariiaOtset/goit-markup-hw-06",
  },
  {
    image: imageSearchImg,
    title: "Image Search",
    description:
      "Image search website to search images by keywords. Individual project.",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "Type Script",
      "React",
      "Axios",
      "REST API",
    ],
    liveLink: "https://goit-typescript-hw-02-theta-sooty.vercel.app/",
    githubLink: "https://github.com/MariiaOtset/goit-typescript-hw-02",
  },
  {
    image: focusFrameImg,
    title: "Focus Frame",
    description:
      "FocusFrame website presents the photography profession with intuitive navigation and an adaptive design for mobile, tablet and desktop devices. Role: Scrum Master and Hero section developer. Team project",
    technologies: ["HTML", "CSS", "JS"],
    liveLink: "https://instreamer1.github.io/project-teamwork09/",
    githubLink: "https://github.com/inmate1/project-teamwork09",
  },
  {
    image: contactsBookImg,
    title: "Contact Book",
    description:
      "Contact Book website is an authentication-based application for managing personal contacts. The app requires user authentication for access to the contacts management features. Individual project.",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Redux Toolkit",
      "React Router",
      "JWT",
      "Axios",
    ],
    liveLink: "https://goit-react-hw-08-tau-ecru.vercel.app/",
    githubLink: "https://github.com/MariiaOtset/goit-react-hw-08",
  },
];

const MyProjects = () => {
  return (
    <div className={css.projectsSectionWrapper} id="projects">
      <h2 className={css.sectionTitle}>My Projects</h2>
      <ul className={css.projectsList}>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ul>
    </div>
  );
};

export default MyProjects;
