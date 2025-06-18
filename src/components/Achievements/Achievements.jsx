import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaRocket, FaChartLine, FaStar, FaAward } from "react-icons/fa";
import css from "./Achievements.module.css";

const achievementsData = [
  {
    icon: <FaTrophy />,
    title: "Team Leadership",
    value: "15+",
    description: "Developers mentored and led across multiple projects",
    color: "#FFD700"
  },
  {
    icon: <FaRocket />,
    title: "Projects Delivered",
    value: "50+",
    description: "Successful full-stack applications deployed to production",
    color: "#FF6B6B"
  },
  {
    icon: <FaUsers />,
    title: "User Impact",
    value: "100K+",
    description: "Active users across applications I've architected",
    color: "#4ECDC4"
  },
  {
    icon: <FaChartLine />,
    title: "Performance Boost",
    value: "60%",
    description: "Average performance improvement in optimized applications",
    color: "#45B7D1"
  },
  {
    icon: <FaStar />,
    title: "Client Satisfaction",
    value: "98%",
    description: "Client satisfaction rate across all delivered projects",
    color: "#96CEB4"
  },
  {
    icon: <FaAward />,
    title: "Code Reviews",
    value: "500+",
    description: "Code reviews conducted ensuring quality standards",
    color: "#FFEAA7"
  }
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
    status: "Active"
  },
  {
    title: "React Advanced Patterns",
    issuer: "Meta",
    year: "2023",
    status: "Completed"
  },
  {
    title: "Node.js Application Development",
    issuer: "Linux Foundation",
    year: "2023",
    status: "Completed"
  }
];

const Achievements = () => {
  return (
    <section className={css.achievementsSection} id="achievements">
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={css.header}
        >
          <h2 className={css.title}>Achievements & Impact</h2>
          <p className={css.subtitle}>
            Measurable results and professional milestones in my development journey
          </p>
        </motion.div>

        <div className={css.achievementsGrid}>
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={css.achievementCard}
              style={{ "--achievement-color": achievement.color }}
            >
              <div className={css.achievementIcon}>
                {achievement.icon}
              </div>
              <div className={css.achievementContent}>
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={css.achievementValue}
                >
                  {achievement.value}
                </motion.h3>
                <h4 className={css.achievementTitle}>{achievement.title}</h4>
                <p className={css.achievementDescription}>{achievement.description}</p>
              </div>
              <div className={css.achievementGlow}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className={css.certificationsSection}
        >
          <h3 className={css.certificationsTitle}>Professional Certifications</h3>
          <div className={css.certificationsGrid}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={css.certificationCard}
              >
                <div className={css.certificationHeader}>
                  <h4 className={css.certificationTitle}>{cert.title}</h4>
                  <span className={`${css.certificationStatus} ${css[cert.status.toLowerCase()]}`}>
                    {cert.status}
                  </span>
                </div>
                <p className={css.certificationIssuer}>{cert.issuer}</p>
                <p className={css.certificationYear}>{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className={css.recognitionSection}
        >
          <h3 className={css.recognitionTitle}>Recognition & Awards</h3>
          <div className={css.recognitionList}>
            <div className={css.recognitionItem}>
              <FaTrophy className={css.recognitionIcon} />
              <div>
                <h4>Best Technical Innovation</h4>
                <p>Awarded for implementing microservices architecture that improved system scalability by 300%</p>
              </div>
            </div>
            <div className={css.recognitionItem}>
              <FaStar className={css.recognitionIcon} />
              <div>
                <h4>Team Player of the Year</h4>
                <p>Recognized for exceptional mentorship and collaboration in cross-functional teams</p>
              </div>
            </div>
            <div className={css.recognitionItem}>
              <FaRocket className={css.recognitionIcon} />
              <div>
                <h4>Performance Excellence</h4>
                <p>Consistently delivered projects ahead of schedule with zero critical bugs in production</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;