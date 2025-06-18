import { motion } from "framer-motion";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiRedis, SiDocker,
  SiGit, SiJest, SiCypress, SiFigma, SiGraphql, SiPrisma
} from "react-icons/si";
import { FaDatabase, FaCloud, FaTools, FaPalette } from "react-icons/fa";
import css from "./TechStack.module.css";

const techCategories = [
  {
    title: "Frontend",
    icon: <FaPalette />,
    color: "#61DAFB",
    technologies: [
      { name: "React", icon: <SiReact />, level: 95, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, level: 90, color: "#3178C6" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 88, color: "#000000" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    icon: <FaDatabase />,
    color: "#339933",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 90, color: "#339933" },
      { name: "GraphQL", icon: <SiGraphql />, level: 85, color: "#E10098" },
      { name: "Prisma", icon: <SiPrisma />, level: 80, color: "#2D3748" },
      { name: "MongoDB", icon: <SiMongodb />, level: 88, color: "#47A248" },
    ]
  },
  {
    title: "Database & Cache",
    icon: <FaDatabase />,
    color: "#336791",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 85, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, level: 88, color: "#47A248" },
      { name: "Redis", icon: <SiRedis />, level: 75, color: "#DC382D" },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud />,
    color: "#FF9900",
    technologies: [
      { name: "Docker", icon: <SiDocker />, level: 85, color: "#2496ED" },
      { name: "Git", icon: <SiGit />, level: 95, color: "#F05032" },
    ]
  },
  {
    title: "Testing & Tools",
    icon: <FaTools />,
    color: "#C21325",
    technologies: [
      { name: "Jest", icon: <SiJest />, level: 85, color: "#C21325" },
      { name: "Cypress", icon: <SiCypress />, level: 80, color: "#17202C" },
      { name: "Figma", icon: <SiFigma />, level: 90, color: "#F24E1E" },
    ]
  }
];

const TechStack = () => {
  return (
    <section className={css.techStackSection} id="tech-stack">
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={css.header}
        >
          <h2 className={css.title}>Technology Stack</h2>
          <p className={css.subtitle}>
            Expertise in modern technologies and frameworks for building scalable applications
          </p>
        </motion.div>

        <div className={css.categoriesGrid}>
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={css.categoryCard}
            >
              <div className={css.categoryHeader}>
                <div 
                  className={css.categoryIcon}
                  style={{ "--category-color": category.color }}
                >
                  {category.icon}
                </div>
                <h3 className={css.categoryTitle}>{category.title}</h3>
              </div>

              <div className={css.technologiesList}>
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + techIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className={css.techItem}
                  >
                    <div className={css.techInfo}>
                      <div 
                        className={css.techIcon}
                        style={{ "--tech-color": tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <span className={css.techName}>{tech.name}</span>
                      <span className={css.techLevel}>{tech.level}%</span>
                    </div>
                    
                    <div className={css.progressBar}>
                      <motion.div
                        className={css.progressFill}
                        style={{ "--tech-color": tech.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + techIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className={css.architectureSection}
        >
          <h3 className={css.architectureTitle}>System Architecture Expertise</h3>
          <div className={css.architectureGrid}>
            <div className={css.architectureItem}>
              <h4>Microservices</h4>
              <p>Designing and implementing scalable microservice architectures</p>
            </div>
            <div className={css.architectureItem}>
              <h4>API Design</h4>
              <p>RESTful and GraphQL API development with proper documentation</p>
            </div>
            <div className={css.architectureItem}>
              <h4>Performance</h4>
              <p>Optimization strategies for high-traffic applications</p>
            </div>
            <div className={css.architectureItem}>
              <h4>Security</h4>
              <p>Implementation of security best practices and authentication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;