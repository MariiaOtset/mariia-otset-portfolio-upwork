import { useState, useEffect } from "react";
import { FaSquareUpwork } from "react-icons/fa6";
import { IoCodeSlash, IoRocketOutline } from "react-icons/io5";
import TypingAnimation from "../TypingAnimation/TypingAnimation.jsx";
import UpworkBadges from "../UpworkBadges/UpworkBadges.jsx";
import styles from "./AboutMe.module.css";

const upworkProfileUrl =
  "https://www.upwork.com/freelancers/~01ab7fe2a9e7d90639?viewMode=1";

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
                <div className={styles.cardIcon}>
                  <IoCodeSlash className={styles.aboutIcon} aria-hidden="true" />
                </div>
                <p className={styles.aboutText}>
                  I help clients turn unclear ideas, rough designs, or
                  unfinished builds into working web products that are easier to
                  use, launch, and improve.
                </p>
              </div>

              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <IoRocketOutline
                    className={styles.aboutIcon}
                    aria-hidden="true"
                  />
                </div>
                <p className={styles.aboutText}>
                  My focus is practical execution: clear scope, responsive
                  interfaces, reliable integrations, and steady progress from
                  first task to final polish.
                </p>
              </div>

              <a
                href={upworkProfileUrl}
                className={`${styles.aboutCard} ${styles.upworkCard}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`${styles.cardIcon} ${styles.upworkCardIcon}`}>
                  <FaSquareUpwork className={styles.upworkIcon} aria-hidden="true" />
                </div>
                <div className={styles.upworkProof}>
                  <p className={styles.aboutText}>
                    Trusted on Upwork for reliable delivery, clear
                    communication, and practical web solutions that help clients
                    move their projects forward.
                  </p>
                  <div className={styles.upworkBadges}>
                    <UpworkBadges variant="dark" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
