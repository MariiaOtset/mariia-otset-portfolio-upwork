import css from "./WhyWorkWithMe.module.css";
import {
  IoChatbubblesOutline,
  IoCheckmarkDoneOutline,
  IoPhonePortraitOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

const reasons = [
  {
    icon: IoCheckmarkDoneOutline,
    title: "Reliable delivery",
    text: "Clear scope, consistent progress, and careful implementation from first task to launch.",
  },
  {
    icon: IoChatbubblesOutline,
    title: "Clean communication",
    text: "I explain trade-offs, ask practical questions, and keep the work easy to follow.",
  },
  {
    icon: IoPhonePortraitOutline,
    title: "Mobile-first approach",
    text: "Interfaces are built to feel polished on real mobile, tablet, and desktop screens.",
  },
  {
    icon: IoTrendingUpOutline,
    title: "Business-focused development",
    text: "I care about the user flow, conversion, and long-term usefulness of what I build.",
  },
];

const availability = [
  "MVPs",
  "SaaS features",
  "Landing pages",
  "E-commerce",
  "Integrations",
  "UI fixes",
];

const WhyWorkWithMe = () => {
  return (
    <section className={css.sectionWrapper}>
      <div className={css.container}>
        <div className={css.header}>
          <p className={css.eyebrow}>Why work with me</p>
          <h2 className={css.title}>A practical developer for client-ready results</h2>
          <p className={css.description}>
            I combine thoughtful implementation with product sense, so your
            website or app is not only built, but easier to use, launch, and
            improve.
          </p>
        </div>

        <ul className={css.reasonsList}>
          {reasons.map(({ icon: Icon, title, text }) => (
            <li className={css.reasonItem} key={title}>
              <Icon className={css.icon} aria-hidden="true" />
              <h3 className={css.reasonTitle}>{title}</h3>
              <p className={css.reasonText}>{text}</p>
            </li>
          ))}
        </ul>

        <div className={css.availableBox}>
          <p className={css.availableTitle}>Currently available for</p>
          <ul className={css.availableList}>
            {availability.map((item) => (
              <li className={css.availableItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
