import css from "./Availability.module.css";
import {
  IoBriefcaseOutline,
  IoCheckmarkCircleOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { scrollToSection } from "../../utils/scrollToSection.js";

const clientTypes = [
  "Startup founders launching MVPs",
  "Small businesses that need a polished website",
  "SaaS teams improving product flows",
  "Clients who need Stripe, auth, or AI features",
  "Teams looking for bug fixing and mobile improvements",
];

const Availability = () => {
  const handleContactClick = (event) => {
    event.preventDefault();
    scrollToSection("next-steps");
  };

  return (
    <section className={css.sectionWrapper} id="availability">
      <div className={css.container}>
        <div className={css.content}>
          <p className={css.eyebrow}>Open to freelance work</p>
          <h2 className={css.title}>Available for freelance projects</h2>
          <p className={css.description}>
            I can help you turn an idea, existing product, or unfinished website
            into a clear, responsive, client-ready web experience.
          </p>
          <a
            href="#next-steps"
            className={css.cta}
            onClick={handleContactClick}
          >
            <IoChatbubbleEllipsesOutline className={css.ctaIcon} />
            Discuss a project
          </a>
        </div>

        <div className={css.panel}>
          <div className={css.panelHeader}>
            <IoBriefcaseOutline className={css.panelIcon} />
            <h3 className={css.panelTitle}>Best fit for</h3>
          </div>
          <ul className={css.clientList}>
            {clientTypes.map((item) => (
              <li className={css.clientItem} key={item}>
                <IoCheckmarkCircleOutline className={css.checkIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Availability;
