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
        Full Stack & AI Engineer | MERN Stack | Bolt, Lovable, Replit, Vibe Coder
      </p>

      {/* <div className={css.techIcons}>
        <FaReact className={css.icon} title="React" />
        <SiTypescript className={css.icon} title="TypeScript" />
        <SiTailwindcss className={css.icon} title="Tailwind CSS" />
        <FaUpwork className={css.icon} title="Available on Upwork" />
      </div> */}
<p className={css.availableUpwork)>
© {new Date().getFullYear()} All rights reserved.
  <a href="https://www.upwork.com/freelancers/~01ab7fe2a9e7d90639" className={css.footerNote}>
         Available on Upwork.
      </a>
</p>
    </footer>
  );
};

export default NextSteps;
