import { FaSquareUpwork } from "react-icons/fa6";
import UpworkBadges from "../UpworkBadges/UpworkBadges.jsx";
import css from "./Contacts.module.css";

const upworkProfileUrl =
  "https://www.upwork.com/freelancers/~01ab7fe2a9e7d90639?viewMode=1";

const Contacts = () => {
  return (
    <section className={css.contactsSection} id="next-steps">
      <div className={css.contactsContainer}>
        <div className={css.contactsContent}>
          <p className={css.eyebrow}>Let&apos;s work together</p>
          <h2 className={css.contactsTitle}>
            Ready to make your website work better?
          </h2>
          <p className={css.contactsText}>
            I help founders, small businesses, and product teams turn ideas,
            unfinished builds, and growing digital products into polished web
            experiences that are clear, responsive, and ready for real users.
          </p>
          <p className={css.trustLine}>
            Whether you are starting from a fresh idea, an unfinished build, or
            a product that needs to work better, I can help turn business goals
            into a polished, client-ready web experience with clear thinking and
            practical execution.
          </p>
        </div>

        <div className={css.contactCard}>
          <h3 className={css.cardTitle}>Start a project conversation</h3>
          <p className={css.cardText}>
            Send me a short message on Upwork with your goal, timeline, and what
            you want to build or improve. I&apos;ll help clarify the scope and
            suggest a practical next step.
          </p>

          <div className={css.upworkBadges}>
            <UpworkBadges variant="contact" />
          </div>

          <a
            href={upworkProfileUrl}
            className={css.primaryContact}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareUpwork className={css.primaryIcon} aria-hidden="true" />
            Hire me on Upwork
          </a>

          <ul className={css.projectFitList}>
            <li>Fast response and clear communication</li>
            <li>Polished web experiences that feel reliable on every device</li>
            <li>Practical support across product flows, integrations, and improvements</li>
          </ul>

          {/* <p className={css.footerNote}>
            Copyright {new Date().getFullYear()} Mariia Otset. All rights
            reserved.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
