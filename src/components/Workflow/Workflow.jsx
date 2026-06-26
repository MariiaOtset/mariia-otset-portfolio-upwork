import css from "./Workflow.module.css";

const workflowSteps = [
  {
    step: "01",
    title: "Discovery",
    text: "We define your goal, users, core features, timeline, and success criteria.",
  },
  {
    step: "02",
    title: "Design / Build",
    text: "I turn the plan into responsive pages, product flows, integrations, and clean UI.",
  },
  {
    step: "03",
    title: "Launch",
    text: "I prepare the project for release, test key flows, and deploy it to production.",
  },
  {
    step: "04",
    title: "Support",
    text: "After launch, I can help with improvements, bug fixes, and new features.",
  },
];

const Workflow = () => {
  return (
    <section className={css.sectionWrapper} id="workflow">
      <div className={css.container}>
        <div className={css.header}>
          <p className={css.eyebrow}>How we work</p>
          <h2 className={css.title}>A clear workflow from idea to launch</h2>
        </div>

        <ol className={css.stepsList}>
          {workflowSteps.map(({ step, title, text }) => (
            <li className={css.stepItem} key={title}>
              <span className={css.stepNumber}>{step}</span>
              <h3 className={css.stepTitle}>{title}</h3>
              <p className={css.stepText}>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Workflow;
