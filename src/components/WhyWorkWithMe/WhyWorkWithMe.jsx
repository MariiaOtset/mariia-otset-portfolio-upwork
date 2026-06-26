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
    title: "Reliable Upwork delivery",
    text: "I keep scope clear, communicate progress, and focus on finishing the work properly.",
  },
  {
    icon: IoChatbubblesOutline,
    title: "Clear communication",
    text: "I ask practical questions, explain trade-offs, and keep collaboration easy to follow.",
  },
  {
    icon: IoPhonePortraitOutline,
    title: "Responsive delivery",
    text: "I build web experiences that feel polished, stable, and usable across real devices.",
  },
  {
    icon: IoTrendingUpOutline,
    title: "Business-focused solutions",
    text: "I care about user flow, clarity, conversion, and long-term usefulness, not only code.",
  },
];

const proofPoints = [
  "A clear plan before the work starts",
  "Regular updates without chasing for progress",
  "A polished result your users can trust",
  "Practical decisions focused on your business goals",
  "Support for the next step after launch",
];

const WhyWorkWithMe = () => {
  return (
    <section className={css.sectionWrapper}>
      <div className={css.container}>
        <div className={css.header}>
          <p className={css.eyebrow}>Upwork proof</p>
          <h2 className={css.title}>Why clients hire me on Upwork</h2>
          <p className={css.description}>
            I combine thoughtful implementation with product sense, so clients
            get practical web solutions that are easier to use, launch, and
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
          <p className={css.availableTitle}>What clients can expect</p>
          <ul className={css.availableList}>
            {proofPoints.map((item) => (
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
