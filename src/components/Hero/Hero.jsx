import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaCode } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { SiTypescript, SiReact, SiNodedotjs, SiNextdotjs } from "react-icons/si";
import css from "./Hero.module.css";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techIcons = [
    { Icon: SiReact, color: "#61DAFB", delay: 0.2 },
    { Icon: SiTypescript, color: "#3178C6", delay: 0.4 },
    { Icon: SiNodedotjs, color: "#339933", delay: 0.6 },
    { Icon: SiNextdotjs, color: "#000000", delay: 0.8 },
  ];

  return (
    <section className={css.hero} id="hero">
      <div className={css.heroBackground}>
        <div className={css.gridPattern}></div>
        <div className={css.gradientOverlay}></div>
      </div>
      
      <div className={css.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={css.textContent}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={css.badge}
          >
            <FaCode className={css.badgeIcon} />
            <span>Senior Full Stack Developer</span>
          </motion.div>

          <motion.h1 
            className={css.title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className={css.greeting}>Building the Future with</span>
            <span className={css.name}>Mariia Otset</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={css.roleContainer}
          >
            <h2 className={css.role}>Architecting Scalable Solutions</h2>
            <div className={css.specialties}>
              <span>System Design</span>
              <span>Team Leadership</span>
              <span>Performance Optimization</span>
              <span>Cloud Architecture</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={css.description}
          >
            Senior Full Stack Developer with 3+ years of experience leading development teams 
            and architecting enterprise-grade applications. Specialized in modern JavaScript 
            ecosystems, cloud infrastructure, and delivering high-performance solutions at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className={css.ctaContainer}
          >
            <button className={css.primaryCta} onClick={scrollToAbout}>
              View My Work
              <HiArrowDown className={css.ctaIcon} />
            </button>
            
            <div className={css.socialLinks}>
              <a href="https://github.com" className={css.socialLink} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" className={css.socialLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <button className={css.downloadCv}>
                <FaDownload />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={css.visualContent}
        >
          <div className={css.codeWindow}>
            <div className={css.windowHeader}>
              <div className={css.windowControls}>
                <span className={css.control}></span>
                <span className={css.control}></span>
                <span className={css.control}></span>
              </div>
              <span className={css.fileName}>senior-developer.ts</span>
            </div>
            <div className={css.codeContent}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.2 }}
                className={css.codeLine}
              >
                <span className={css.keyword}>class</span>{" "}
                <span className={css.className}>SeniorDeveloper</span>{" "}
                <span className={css.bracket}>{"{"}</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.4 }}
                className={css.codeLine}
              >
                {"  "}
                <span className={css.property}>experience</span>
                <span className={css.operator}>:</span>{" "}
                <span className={css.string}>"3+ years"</span>
                <span className={css.semicolon}>;</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.6 }}
                className={css.codeLine}
              >
                {"  "}
                <span className={css.property}>skills</span>
                <span className={css.operator}>:</span>{" "}
                <span className={css.array}>["React", "Node.js"]</span>
                <span className={css.semicolon}>;</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.8 }}
                className={css.codeLine}
              >
                <span className={css.bracket}>{"}"}</span>
              </motion.div>
            </div>
          </div>

          <div className={css.techIconsContainer}>
            {techIcons.map(({ Icon, color, delay }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: delay + 1.5 }}
                className={css.techIcon}
                style={{ "--icon-color": color }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className={css.scrollIndicator}
        onClick={scrollToAbout}
      >
        <div className={css.scrollLine}></div>
        <HiArrowDown className={css.scrollArrow} />
      </motion.div>
    </section>
  );
};

export default Hero;