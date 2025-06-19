import { useState, useEffect } from "react";
import TypingAnimation from "../TypingAnimation/TypingAnimation.jsx";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.sectionWrapper} id="about">
      <div className={styles.backgroundDecoration}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.leftSideWrapper}>
          {windowWidth >= 768 && (
            <div className={styles.leftContent}>
              <div className={styles.titleSection}>
                <h1 className={styles.mainTitle}>
                  <span className={styles.hello}>Hello,</span>
                  <span className={styles.fullName}>I&apos;m Mariia Otset</span>
                </h1>
                <h2 className={styles.jobTitle}>Full Stack Developer</h2>
                <div className={styles.titleUnderline}></div>
              </div>
              <TypingAnimation />
            </div>
          )}
        </div>

        <div className={styles.aboutWrapper}>
          {windowWidth < 768 && (
            <div className={styles.titleSection}>
              <h1 className={styles.mainTitle}>
                <span className={styles.hello}>Hello,</span>
                <span className={styles.fullName}>I&apos;m Mariia Otset</span>
              </h1>
              <h2 className={styles.jobTitle}>Full Stack Developer</h2>
              <div className={styles.titleUnderline}></div>
            </div>
          )}

          {windowWidth < 768 && <TypingAnimation />}

          <div className={styles.contentSection}>
            <h2 className={styles.aboutTitle}>About me</h2>

            <div className={styles.aboutContent}>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>💻</div>
                <p className={styles.aboutText}>
                  For two years now, I&apos;ve been immersed in the world of
                  full-stack web development, expanding my skills and delivering
                  real results. My favorite part of programming is the
                  problem-solving aspect. I love the feeling of finally finding
                  a solution to a problem.
                </p>
              </div>

              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>🚀</div>
                <p className={styles.aboutText}>
                  I am always looking for new challenges and opportunities to
                  contribute to the success of projects as a full-stack
                  developer.
                </p>
              </div>

              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>🌟</div>
                <p className={styles.aboutText}>
                  When I am not coding, I enjoy reading or watching videos about
                  history, watching movies, and riding my bike. I also enjoy
                  learning new things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
