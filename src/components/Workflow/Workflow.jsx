import css from "./Workflow.module.css";

const workflowSteps = [
  {
    step: "01",
    title: "Send an invite",
    text: "Share your project idea, goal, or current problem through Upwork.",
  },
  {
    step: "02",
    title: "Discuss the scope",
    text: "We clarify priorities, timeline, success criteria, and the best first milestone.",
  },
  {
    step: "03",
    title: "Start the milestone",
    text: "I build, communicate progress, and keep the work easy to review.",
  },
  {
    step: "04",
    title: "Launch and improve",
    text: "We polish the result, launch confidently, and plan useful next steps.",
  },
];

const Workflow = () => {
  return (
    <section className={css.sectionWrapper} id="workflow">
      <div className={css.container}>
        <div className={css.header}>
          <p className={css.eyebrow}>How we can work together on Upwork</p>
          <h2 className={css.title}>A simple path from invite to launch</h2>
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
