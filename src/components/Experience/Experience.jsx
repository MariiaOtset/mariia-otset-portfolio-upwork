import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import css from "./Experience.module.css";

const experienceData = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Ltd",
    location: "Remote",
    period: "2023 - Present",
    type: "Full-time",
    achievements: [
      "Led a team of 5 developers in building a microservices architecture serving 100K+ users",
      "Reduced application load time by 40% through performance optimization and caching strategies",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Mentored junior developers and conducted code reviews ensuring high code quality standards"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Agency",
    location: "London, UK",
    period: "2022 - 2023",
    type: "Full-time",
    achievements: [
      "Developed and maintained 15+ client projects using modern web technologies",
      "Collaborated with design teams to implement pixel-perfect responsive interfaces",
      "Integrated third-party APIs and payment systems for e-commerce platforms",
      "Optimized database queries resulting in 60% faster data retrieval"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"]
  },
  {
    title: "Junior Full Stack Developer",
    company: "StartUp Hub",
    location: "Remote",
    period: "2021 - 2022",
    type: "Full-time",
    achievements: [
      "Built responsive web applications from concept to deployment",
      "Participated in agile development processes and daily standups",
      "Contributed to open-source projects and internal tool development",
      "Gained expertise in modern JavaScript frameworks and backend technologies"
    ],
    technologies: ["JavaScript", "React", "Express.js", "MySQL", "Git", "REST APIs"]
  }
];

const Experience = () => {
  return (
    <section className={css.experienceSection} id="experience">
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={css.header}
        >
          <h2 className={css.title}>Professional Experience</h2>
          <p className={css.subtitle}>
            Building scalable solutions and leading development teams
          </p>
        </motion.div>

        <div className={css.timeline}>
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${css.timelineItem} ${index % 2 === 0 ? css.left : css.right}`}
            >
              <div className={css.timelineContent}>
                <div className={css.experienceCard}>
                  <div className={css.cardHeader}>
                    <div className={css.jobInfo}>
                      <h3 className={css.jobTitle}>{experience.title}</h3>
                      <h4 className={css.company}>{experience.company}</h4>
                      <div className={css.jobMeta}>
                        <span className={css.metaItem}>
                          <FaCalendarAlt className={css.metaIcon} />
                          {experience.period}
                        </span>
                        <span className={css.metaItem}>
                          <FaMapMarkerAlt className={css.metaIcon} />
                          {experience.location}
                        </span>
                        <span className={css.jobType}>{experience.type}</span>
                      </div>
                    </div>
                    <div className={css.jobIcon}>
                      <FaBriefcase />
                    </div>
                  </div>

                  <div className={css.achievements}>
                    <h5 className={css.achievementsTitle}>Key Achievements:</h5>
                    <ul className={css.achievementsList}>
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={css.achievementItem}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={css.technologies}>
                    <h5 className={css.techTitle}>Technologies Used:</h5>
                    <div className={css.techTags}>
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={css.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.timelineMarker}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;