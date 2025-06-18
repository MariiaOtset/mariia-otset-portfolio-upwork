import TypingAnimation from "../TypingAnimation/TypingAnimation.jsx";
import css from "./AboutMe.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

const AboutMe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const principles = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Constantly exploring new technologies and best practices"
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Building strong relationships with cross-functional teams"
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    }
  ];

  return (
    <section className={css.sectionWrapper} id="about">
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={css.header}
        >
          <h2 className={css.sectionTitle}>About Me</h2>
          <p className={css.sectionSubtitle}>
            Senior Full Stack Developer with a passion for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className={css.contentWrapper}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={css.leftContent}
          >
            {windowWidth >= 768 && <TypingAnimation />}
            
            <div className={css.aboutContent}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className={css.introText}
              >
                <p className={css.aboutText}>
                  As a <strong>Senior Full Stack Developer</strong> with over 3 years of experience, 
                  I specialize in architecting and building scalable web applications that serve 
                  thousands of users. My expertise spans the entire development lifecycle, from 
                  system design to deployment and maintenance.
                </p>
                
                {windowWidth < 768 && <TypingAnimation />}
                
                <p className={css.aboutText}>
                  I thrive on solving complex technical challenges and have successfully led 
                  development teams in delivering high-performance applications. My approach 
                  combines technical excellence with strong leadership skills, ensuring both 
                  code quality and team productivity.
                </p>

                <p className={css.aboutText}>
                  Beyond coding, I'm passionate about mentoring junior developers, staying 
                  current with emerging technologies, and contributing to the developer community 
                  through open-source projects and technical writing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className={css.statsContainer}
              >
                <div className={css.stat}>
                  <span className={css.statNumber}>3+</span>
                  <span className={css.statLabel}>Years Experience</span>
                </div>
                <div className={css.stat}>
                  <span className={css.statNumber}>50+</span>
                  <span className={css.statLabel}>Projects Completed</span>
                </div>
                <div className={css.stat}>
                  <span className={css.statNumber}>15+</span>
                  <span className={css.statLabel}>Developers Mentored</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className={css.rightContent}
          >
            <div className={css.principlesContainer}>
              <h3 className={css.principlesTitle}>Core Principles</h3>
              <div className={css.principlesGrid}>
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={css.principleCard}
                  >
                    <div className={css.principleIcon}>
                      {principle.icon}
                    </div>
                    <h4 className={css.principleTitle}>{principle.title}</h4>
                    <p className={css.principleDescription}>{principle.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className={css.personalSection}
            >
              <h3 className={css.personalTitle}>When I'm Not Coding</h3>
              <p className={css.personalText}>
                I enjoy exploring historical documentaries, staying active through cycling, 
                and continuously learning about emerging technologies. I believe in maintaining 
                a healthy work-life balance while staying curious and passionate about technology.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;