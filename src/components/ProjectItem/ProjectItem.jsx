import css from "./ProjectItem.module.css";
import { LuLink } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";

const ProjectItem = ({ image, title, description, technologies, liveLink, githubLink }) => {
  return (
      <li className={css.projectItem}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={css.projectImage}
        />
        <div className={css.projectInfoContainer}>
          <h3 className={css.projectTitle}>{title}</h3>
          <p className={css.projectDescription}>{description}</p>
          <ul className={css.projectTechList}>
            {technologies.map((tech, index) => (
                <li key={index} className={css.projectTechItems}>{tech}</li>
            ))}
          </ul>

          <div  className={css.linksWrapper}>
            <a href={liveLink} className={css.pageLink} target="_blank">
            <LuLink className={css.icon}/>  
            Live Page
            </a>
            <a href={githubLink} className={css.pageLink} target="_blank">
            <IoLogoGithub className={css.icon}/>
            Github</a>
          </div>
        </div>
      </li>
  );
};

export default ProjectItem;
