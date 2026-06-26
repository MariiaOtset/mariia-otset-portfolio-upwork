import css from "./MyProjects.module.css";
import { useState } from "react";
import ProjectItem from "../ProjectItem/ProjectItem.jsx";
import gameLandingImg from "../../assets/images/game-landing.jpg";
import waterTrackerImg from "../../assets/images/water-traker.jpg";
import travelTracksImg from "../../assets/images/travel-tracks.jpg";
import jferssonImg from "../../assets/images/jfersson.jpg";
import filmotekaImg from "../../assets/images/filmoteka.jpg";
import webStudioImg from "../../assets/images/web-studio.jpg";
import imageSearchImg from "../../assets/images/image-search.jpg";
import focusFrameImg from "../../assets/images/focus-frame.jpg";
import kpopShopImg from "../../assets/images/kpop-shop.jpg";
import landingGeneratorImg from "../../assets/images/landingGeneratorImg.jpg";
import learningPlatformImg from "../../assets/images/learningPlatform.jpg";
import linkedInImg from "../../assets/images/linkedIn.jpg";
import taskcraftImg from "../../assets/images/taskcraft.jpg";

const projectsData = [
  {
    image: learningPlatformImg,
    title: "Online Learning Platform",
    description:
      "Built and deployed a responsive learning platform that supports paid course sales, student onboarding, and engagement. Key results: Stripe one-time payments and installments, Supabase authentication, course management, quizzes with leaderboard, student dashboard, notes, and discussions.",
    technologies: [
      "Replit",
      "React",
      "Node.js",
      "Supabase",
      "Stripe",
      "Tailwind CSS",
    ],
    tags: ["Client project", "SaaS", "Stripe", "Auth"],
    liveLink: "https://learn.nikoxstudios.com/",
  },
  {
    image: linkedInImg,
    title: "Agella - AI Content Studio for LinkedIn",
    description:
      "Improved an AI-driven platform for creating, refining, and scheduling LinkedIn content. Key results: full mobile adaptation, Google Auth integration, Stripe subscriptions, bug fixes, and cleaner code for a smoother user experience.",
    technologies: [
      "Next.js",
      "Firebase Studio",
      "Node.js",
      "REST API",
      "Stripe",
      "Tailwind CSS",
    ],
    tags: ["Client project", "AI", "SaaS", "Stripe"],
    liveLink: "https://agella.app/",
  },
  {
    image: taskcraftImg,
    title: "TaskCraft",
    description:
      "Contributed to a team-built task management web app designed to help users organize daily work more efficiently. Key results: responsive frontend UI, improved user experience, app-like PWA behavior across devices, and a polished task workflow.",
    technologies: ["React", "JavaScript", "CSS", "PWA"],
    tags: ["Team project", "PWA", "Productivity app", "Responsive UI"],
    liveLink: "https://taskcraft.click/",
  },
  {
    image: landingGeneratorImg,
    title: "AI-Powered SaaS for Instant Landing Page Generation",
    description:
      "Built a micro-SaaS that generates landing pages from AI prompts. Key results: responsive design, animated transitions, custom branding, Supabase setup, and a Stripe-ready product experience created with Lovable.dev.",
    technologies: [
      "Lovable.dev",
      "Next.js",
      "Supabase",
      "Stripe",
      "React",
      "Tailwind CSS",
    ],
    tags: ["AI", "SaaS", "Landing page", "Stripe"],
    liveLink: "https://instant-page.lovable.app/",
  },
  {
    image: kpopShopImg,
    title: "Daebak Shop",
    description:
      "Built a responsive K-pop merch store with product browsing and checkout. Key results: product pages, category and name filters, Stripe payments, Clerk authentication, and Supabase database integration.",
    technologies: [
      "Next.js",
      "Node.js",
      "Supabase",
      "Clerk",
      "Stripe",
      "React",
      "Tailwind CSS",
    ],
    tags: ["E-commerce", "Stripe", "Auth", "Supabase"],
    liveLink: "https://frabjous-empanada-f7581f.netlify.app/",
  },
  {
    image: gameLandingImg,
    title: "Game Landing Page",
    description:
      "Created an interactive landing page for a mobile match-3 game to support product presentation and user acquisition. Key results: responsive layout, gallery, how-to-play content, game video section, and privacy policy page. Commercial team project.",
    technologies: ["HTML", "CSS", "JS"],
    tags: ["Client project", "Landing page", "Responsive UI"],
    liveLink: "https://vitayusko.github.io/Puppy-Diary-Epic-Match-3/",
    githubLink: "https://github.com/vitayusko/Puppy-Diary-Epic-Match-3",
  },
  {
    image: waterTrackerImg,
    title: "Aqua Track",
    description:
      "Contributed to a water tracking application focused on daily habit management. Key results: responsive user settings flow, mobile/tablet/desktop adaptation, and team-based front-end development.",
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
    tags: ["Team project", "React", "Dashboard", "API"],
    liveLink: "https://final-project-frontend-weld.vercel.app/",
    githubLink: "https://github.com/Kamila-Lohvynenko/final-project-frontend",
  },
  {
    image: travelTracksImg,
    title: "Travel Trucks",
    description:
      "Built a travel truck rental interface that helps users browse, filter, and review vehicle details. Key results: responsive React UI, state management, routing, API integration, and an easy-to-use booking-focused flow. Individual project.",
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
    tags: ["React", "API", "Booking flow", "Responsive UI"],
    liveLink: "https://wander-wheels-two.vercel.app/",
    githubLink: "https://github.com/MariiaOtset/wander-wheels",
  },
  {
    image: jferssonImg,
    title: "Developer Portfolio",
    description:
      "Built a developer portfolio website focused on presenting work, skills, and contact details clearly. Key results: adaptive layout, animated sections, and a visual running-photo section. Role: Scrum Master and developer. Team project.",
    technologies: ["HTML", "CSS", "JS", "REST API"],
    tags: ["Team project", "Portfolio", "Animations"],
    liveLink: "https://instreamer1.github.io/project-js-teamwork05/",
    githubLink: "https://github.com/inmate1/project-js-teamwork05",
  },
  {
    image: filmotekaImg,
    title: "Movie Search",
    description:
      "Built a movie search app that helps users find films and explore detailed information. Key results: search by title, movie details, cast, reviews, routing, and external API integration. Individual project.",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "React Router",
      "Axios",
      "REST API",
    ],
    tags: ["React", "API", "Search flow"],
    liveLink: "https://goit-react-hw-05-bice-phi.vercel.app/",
    githubLink: "https://github.com/MariiaOtset/goit-react-hw-05",
  },
  {
    image: webStudioImg,
    title: "Web Studio",
    description:
      "Created a responsive company website for presenting services and contact information. Key results: clean landing page structure, adaptive design for mobile/tablet/desktop, and polished static UI. Individual project.",
    technologies: ["HTML", "CSS", "JS"],
    tags: ["Landing page", "Responsive UI", "Business website"],
    liveLink: "https://mariiaotset.github.io/goit-markup-hw-06/",
    githubLink: "https://github.com/MariiaOtset/goit-markup-hw-06",
  },
  {
    image: imageSearchImg,
    title: "Image Search",
    description:
      "Built an image search website that lets users find visual content by keyword. Key results: TypeScript React UI, API integration, search flow, image loading states, and responsive layout. Individual project.",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "TypeScript",
      "React",
      "Axios",
      "REST API",
    ],
    tags: ["TypeScript", "API", "Search flow"],
    liveLink: "https://goit-typescript-hw-02-theta-sooty.vercel.app/",
    githubLink: "https://github.com/MariiaOtset/goit-typescript-hw-02",
  },
  {
    image: focusFrameImg,
    title: "Focus Frame",
    description:
      "Created a responsive photography website focused on presenting services with strong first-screen impact. Key results: adaptive layout, intuitive navigation, and hero section implementation. Role: Scrum Master and Hero section developer. Team project.",
    technologies: ["HTML", "CSS", "JS"],
    tags: ["Team project", "Landing page", "Responsive UI"],
    liveLink: "https://instreamer1.github.io/project-teamwork09/",
    githubLink: "https://github.com/inmate1/project-teamwork09",
  },
];

const MyProjects = () => {
  const [showOtherProjects, setShowOtherProjects] = useState(false);
  const featuredProjects = projectsData.slice(0, 5);
  const otherProjects = projectsData.slice(5);

  const toggleOtherProjects = () => {
    setShowOtherProjects((prevState) => !prevState);
  };

  return (
    <div className={css.projectsSectionWrapper} id="projects">
      <h2 className={css.sectionTitle}>My Projects</h2>

      <div className={css.projectsGroup}>
        <div className={css.groupHeader}>
          <p className={css.eyebrow}>Built to launch, sell, and grow</p>
          <h3 className={css.groupTitle}>Featured Projects</h3>
        </div>
        <ul className={css.projectsList}>
          {featuredProjects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </ul>
      </div>

      <div className={css.projectsGroup}>
        <div className={css.groupHeader}>
          <p className={css.eyebrow}>More experience</p>
          <h3 className={css.groupTitle}>Other Projects</h3>
        </div>

        {showOtherProjects && (
          <ul className={`${css.projectsList} ${css.otherProjectsList}`}>
            {otherProjects.map((project) => (
              <ProjectItem key={project.title} {...project} compact />
            ))}
          </ul>
        )}

        <button
          className={css.showMoreButton}
          type="button"
          onClick={toggleOtherProjects}
          aria-expanded={showOtherProjects}
        >
          {showOtherProjects ? "Show fewer projects" : "Show more projects"}
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
