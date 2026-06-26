import css from "./Contacts.module.css";

const NextSteps = () => {
  return (
    <footer className={css.footerSection} id="next-steps">
      <h2 className={css.footerTitle}>
        Let&apos;s Build Something Great Together
      </h2>
      <p className={css.footerSubtitle}>
        Full Stack & AI Engineer | MERN Stack | Bolt, Lovable, Replit, Vibe Coder
      </p>

      <p className={css.footerNote}>
        Copyright {new Date().getFullYear()} All rights reserved.
        <span className={css.availableStatus}>Available for freelance work.</span>
      </p>
    </footer>
  );
};

export default NextSteps;
