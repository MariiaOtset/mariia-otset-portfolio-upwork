import css from "./BusinessValue.module.css";
import {
  IoBulbOutline,
  IoCardOutline,
  IoPhonePortraitOutline,
  IoSparklesOutline,
  IoRocketOutline,
  IoConstructOutline,
} from "react-icons/io5";

const services = [
  {
    icon: IoRocketOutline,
    title: "Landing pages",
    text: "Fast, responsive pages for launches, campaigns, and personal brands.",
  },
  {
    icon: IoBulbOutline,
    title: "SaaS interfaces",
    text: "Clean dashboards, user flows, admin panels, and product features.",
  },
  {
    icon: IoCardOutline,
    title: "Payments",
    text: "Stripe checkout, subscriptions, installments, and payment flows.",
  },
  {
    icon: IoPhonePortraitOutline,
    title: "Mobile adaptation",
    text: "Layouts that feel polished on mobile, tablet, and desktop screens.",
  },
  {
    icon: IoConstructOutline,
    title: "Bug fixing",
    text: "UI fixes, code cleanup, performance improvements, and maintenance.",
  },
  {
    icon: IoSparklesOutline,
    title: "AI integrations",
    text: "AI-powered content tools, prompt-based features, and automation.",
  },
];

const BusinessValue = () => {
  return (
    <section className={css.sectionWrapper} id="services">
      <div className={css.container}>
        <div className={css.header}>
          <p className={css.eyebrow}>Freelance services</p>
          <h2 className={css.title}>What I can do for your business</h2>
          <p className={css.description}>
            I build practical web products that help clients launch, sell,
            automate, and improve their online experience.
          </p>
        </div>

        <ul className={css.servicesList}>
          {services.map(({ icon: Icon, title, text }) => (
            <li className={css.serviceItem} key={title}>
              <Icon className={css.icon} aria-hidden="true" />
              <h3 className={css.serviceTitle}>{title}</h3>
              <p className={css.serviceText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BusinessValue;
