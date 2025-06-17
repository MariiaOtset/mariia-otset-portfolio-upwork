import css from "./Contacts.module.css";
import { FaReact } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const NextSteps = () => {
  return (
    <footer className={css.footerSection} id="next-steps">
      <h2 className={css.footerTitle}>
        Let&apos;s Build Something Great Together
      </h2>
      <p className={css.footerSubtitle}>
        Full Stack Developer — React / TypeScript / Next.js / Bolt
      </p>

      <div className={css.techIcons}>
        <FaReact className={css.icon} title="React" />
        <SiTypescript className={css.icon} title="TypeScript" />
        <SiTailwindcss className={css.icon} title="Tailwind CSS" />
        <FaUpwork className={css.icon} title="Available on Upwork" />
      </div>

      <p className={css.footerNote}>
        © {new Date().getFullYear()} All rights reserved. Available on Upwork.
      </p>
    </footer>
  );
};

export default NextSteps;
