import css from "./SkillsContainer.module.css";

const SkillsContainer = () => {
  return (
    <section className={css.allSkillsWrapper} id="skills">
      <div className={css.header}>
        <p className={css.eyebrow}>Tech toolkit</p>
        <h2 className={css.sectionTitle}>Skills I use to build reliable web products</h2>
        <p className={css.description}>
          A practical stack for responsive interfaces, product flows,
          integrations, and full-stack web applications.
        </p>
      </div>

      <div className={css.skillsSection}>
        <h3 className={css.title}>Hard skills</h3>
        <ul className={`${css.hardSkillsWrapper} ${css.skill}`}>
          <li className={css.primarySkill}>HTML/CSS</li>
          <li className={css.primarySkill}>JavaScript</li>
          <li className={css.primarySkill}>React</li>
          <li className={css.primarySkill}>TypeScript</li>
          <li className={css.primarySkill}>Node.js</li>
          <li className={css.primarySkill}>Next.js</li>

          <li>Stripe</li>
          <li>Twilio</li>
          <li>REST API</li>
          <li>Sass</li>
          <li>Redux</li>
          <li>Tailwind CSS</li>
          <li>CSS Modules</li>
          <li>Git</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Swagger</li>
          <li>Responsive/Adaptive Design</li>
          <li>Figma</li>
        </ul>
      </div>

      <div className={css.skillsSection}>
        <h3 className={css.title}>Soft skills</h3>
        <ul className={`${css.skill} ${css.softSkill}`}>
          <li>Flexible</li>
          <li>Hardworking</li>
          <li>Attention to details</li>
          <li>Willingness to learn</li>
          <li>Problem-solving skills</li>
          <li>Ability to work efficiently both individually and in a team</li>
        </ul>
      </div>

      <div className={css.skillsSection}>
        <h3 className={css.title}>Languages</h3>
        <ul className={`${css.skill} ${css.languageSkill}`}>
          <li>English - Upper Intermediate</li>
          <li>Ukrainian - Native</li>
          <li>Russian - Native</li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsContainer;
