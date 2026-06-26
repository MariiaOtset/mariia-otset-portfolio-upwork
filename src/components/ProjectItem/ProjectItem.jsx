import clsx from "clsx";
import { LuLink } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";
import css from "./ProjectItem.module.css";

const ProjectItem = ({
  image,
  title,
  description,
  technologies,
  tags = [],
  liveLink,
  githubLink,
  compact = false,
}) => {
  return (
    <li className={clsx(css.projectItem, compact && css.compactProjectItem)}>
      <a
        href={liveLink}
        className={css.projectImageLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} live project`}
      >
        <img src={image} alt={title} loading="lazy" className={css.projectImage} />
      </a>
      <div className={css.projectInfoContainer}>
        {tags.length > 0 && (
          <ul className={css.projectTagsList}>
            {tags.map((tag) => (
              <li className={css.projectTag} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        <h3 className={css.projectTitle}>{title}</h3>
        <p className={css.projectDescription}>{description}</p>
        <ul className={css.projectTechList}>
          {technologies.map((tech) => (
            <li key={tech} className={css.projectTechItems}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={css.linksWrapper}>
          <a
            href={liveLink}
            className={css.pageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuLink className={css.icon} aria-hidden="true" />
            Live Page
          </a>
          {githubLink && (
            <a
              href={githubLink}
              className={css.pageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className={css.icon} aria-hidden="true" />
              Github
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
