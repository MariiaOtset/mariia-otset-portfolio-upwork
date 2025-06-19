import { useState, useEffect, useMemo } from "react";
import styles from "./TypingAnimation.module.css";

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(
    () => [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    []
  );

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (currentIndex > 0) {
            setDisplayText(currentWord.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentWordIndex, words]);

  return (
    <div className={styles.typingContainer}>
      <div className={styles.codeWindow}>
        <div className={styles.windowHeader}>
          <div className={styles.windowButtons}>
            <span className={styles.button}></span>
            <span className={styles.button}></span>
            <span className={styles.button}></span>
          </div>
        </div>
        <div className={styles.codeContent}>
          <div className={styles.codeLine}>
            <span className={styles.lineNumber}>1</span>
            <span className={styles.keyword}>const&nbsp;</span>
            <span className={styles.variable}>skills&nbsp;</span>
            <span className={styles.operator}> = [</span>
          </div>
          <div className={styles.codeLine}>
            <span className={styles.lineNumber}>2</span>
            <span className={styles.string}>&quot;{displayText}&quot;</span>
            <span className={styles.cursor}>|</span>
          </div>
          <div className={styles.codeLine}>
            <span className={styles.lineNumber}>3</span>
            <span className={styles.operator}>];</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingAnimation;
