import css from "./CaseStudies.module.css";

const caseStudies = [
  {
    title: "Online Learning Platform",
    label: "SaaS / Education / Payments",
    problem:
      "The client needed a course platform that could sell lessons, onboard students, and keep learners engaged after purchase.",
    work:
      "I built a responsive learning experience with Stripe payments, Supabase authentication, course management, quizzes, notes, discussions, and student dashboard flows.",
    result:
      "The platform became ready for paid course delivery with a smoother student journey and the core tools needed to manage learning content.",
  },
  {
    title: "Agella - AI Content Studio",
    label: "AI / SaaS / Subscriptions",
    problem:
      "The product needed a stronger mobile experience, cleaner user flows, and monetization support for subscription-based access.",
    work:
      "I improved mobile adaptation, fixed UI and code issues, and integrated Google Auth and Stripe subscriptions.",
    result:
      "The app became more reliable for real users and better prepared for paid LinkedIn content workflows.",
  },
  {
    title: "Daebak Shop",
    label: "E-commerce / Stripe / Auth",
    problem:
      "The store needed a product browsing flow with authentication, filtering, and a working payment path.",
    work:
      "I implemented product pages, category and name filtering, Stripe checkout, Clerk authentication, and Supabase database integration.",
    result:
      "The shop gained the core e-commerce functionality needed for customers to browse products and move toward purchase.",
  },
];

const CaseStudies = () => {
  return (
    <section className={css.sectionWrapper}>
      <div className={css.container}>
        <div className={css.header}>
          <p className={css.eyebrow}>Case studies</p>
          <h2 className={css.title}>How I turn project goals into working products</h2>
        </div>

        <ul className={css.caseList}>
          {caseStudies.map(({ title, label, problem, work, result }) => (
            <li className={css.caseItem} key={title}>
              <p className={css.caseLabel}>{label}</p>
              <h3 className={css.caseTitle}>{title}</h3>
              <div className={css.caseGrid}>
                <div>
                  <p className={css.pointTitle}>Problem</p>
                  <p className={css.pointText}>{problem}</p>
                </div>
                <div>
                  <p className={css.pointTitle}>What I did</p>
                  <p className={css.pointText}>{work}</p>
                </div>
                <div>
                  <p className={css.pointTitle}>Result</p>
                  <p className={css.pointText}>{result}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CaseStudies;
