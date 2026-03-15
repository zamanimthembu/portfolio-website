import profileImage from "./assets/zamani-profile.png";

const featuredProjects = [
  {
    title: "College Rovers Match Dashboard",
    category: "Analytics Product",
    summary:
      "A rugby analytics dashboard built to turn match data into clearer coaching decisions, sharper performance reviews, and a stronger weekly product workflow.",
    highlights: [
      "Match trends",
      "Coach-ready insights",
      "Real operational value",
    ],
  },
  {
    title: "Portfolio Platform",
    category: "Personal Brand System",
    summary:
      "A premium portfolio experience designed to present technical depth, product thinking, and execution quality in a format that works for recruiters and engineers.",
    highlights: [
      "Responsive UI",
      "Strong brand direction",
      "Scalable structure",
    ],
  },
  {
    title: "Cloud Systems Concept",
    category: "Engineering Exploration",
    summary:
      "A placeholder for future work focused on practical cloud architecture, backend reliability, and shipping software that solves real operational problems.",
    highlights: ["System design", "API thinking", "Production mindset"],
  },
];

const expertise = [
  {
    title: "Software Engineering",
    items: [
      "React",
      "JavaScript",
      "Frontend architecture",
      "Reusable UI systems",
    ],
  },
  {
    title: "Analytics & Dashboards",
    items: [
      "Data storytelling",
      "Performance reporting",
      "Product metrics",
      "Insight-driven workflows",
    ],
  },
  {
    title: "Systems Thinking",
    items: [
      "Information systems",
      "Solution design",
      "Process improvement",
      "Practical product strategy",
    ],
  },
  {
    title: "Professional Strengths",
    items: [
      "Teaching clarity",
      "Stakeholder communication",
      "Structured execution",
      "Continuous learning",
    ],
  },
];

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/zamanimthembu",
    href: "https://github.com/zamanimthembu",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zamani-mthembu",
    href: "https://www.linkedin.com/in/zamani-mthembu-aa5475132/",
  },
  {
    label: "Email",
    value: "zamanimthembu@yahoo.com",
    href: "mailto:zamanimthembu@yahoo.com",
  },
];

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <span className="project-card__category">{project.category}</span>
        <h3>{project.title}</h3>
      </div>
      <p>{project.summary}</p>
      <ul className="project-card__highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

function ExpertiseCard({ group }) {
  return (
    <article className="expertise-card">
      <h3>{group.title}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient--left" aria-hidden="true" />
      <div className="ambient ambient--right" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand__mark">ZM</span>
          <span className="brand__text">Zamani Mthembu</span>
        </a>

        <nav className="topbar__nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#expertise">Expertise</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              Software Developer • UCT Information Systems Postgraduate
            </span>
            <h1>
              Software products built with engineering clarity and analytical
              depth.
            </h1>
            <p className="hero-copy__lede">
              I&apos;m Zamani Mthembu, a software developer focused on practical
              product execution, analytics-driven dashboards, and
              well-structured systems built for real-world use.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                View Projects
              </a>
              <a className="button button--secondary" href="#contact">
                Let&apos;s Connect
              </a>
            </div>

            <div className="hero-metrics" aria-label="Professional highlights">
              <div>
                <strong>Product-minded</strong>
                <span>Engineering with business context</span>
              </div>
              <div>
                <strong>Analytics-driven</strong>
                <span>Dashboards and performance insight</span>
              </div>
              <div>
                <strong>Systems-focused</strong>
                <span>Structured execution that scales</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual__frame">
              <img src={profileImage} alt="" />
              <div className="hero-visual__overlay" />
            </div>
            <div className="hero-visual__identity">
              <span>Profile</span>
              <strong>Zamani Mthembu</strong>
              <p>
                Developer with product focus, analytical rigor, and systems
                thinking.
              </p>
            </div>
            <div className="hero-visual__panel hero-visual__panel--top">
              <span>Current Focus</span>
              <strong>
                Software engineering, analytics, cloud, and digital products
              </strong>
            </div>
            <div className="hero-visual__panel hero-visual__panel--bottom">
              <span>Trajectory</span>
              <strong>
                High-level software development opportunities with real impact
              </strong>
            </div>
          </div>
        </section>

        <section className="content-section" id="about">
          <SectionIntro
            eyebrow="About"
            title="A developer with technical range, product judgment, and teaching clarity."
            description="I bring together software development, information systems thinking, analytics, and education. That combination helps me design solutions that are technically sound, understandable to stakeholders, and grounded in practical execution."
          />
          <div className="about-grid">
            <article className="surface-card">
              <h3>What I do</h3>
              <p>
                I build modern software experiences with a strong focus on clean
                interfaces, meaningful structure, and tools that support real
                decisions.
              </p>
            </article>
            <article className="surface-card">
              <h3>How I think</h3>
              <p>
                I care about more than code quality alone. I think in terms of
                users, data, systems, constraints, and what it takes to turn an
                idea into a working product.
              </p>
            </article>
            <article className="surface-card">
              <h3>Where I&apos;m heading</h3>
              <p>
                I&apos;m building toward high-level software opportunities where
                engineering, analysis, and product execution come together in a
                meaningful way.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionIntro
            eyebrow="Featured Projects"
            title="Selected work that reflects execution, product depth, and technical intent."
            description="These projects are presented as products, not exercises. Each one is framed around decisions, outcomes, and the kind of thinking required to ship work that matters."
          />
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="content-section" id="expertise">
          <SectionIntro
            eyebrow="Skills & Expertise"
            title="Core areas I bring into software work."
            description="A focused mix of engineering, analytical thinking, and structured communication that supports both product quality and team effectiveness."
          />
          <div className="expertise-grid">
            {expertise.map((group) => (
              <ExpertiseCard key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section
          className="content-section content-section--contact"
          id="contact"
        >
          <SectionIntro
            eyebrow="Contact"
            title="Open to thoughtful conversations about software, products, and opportunities."
            description="If you’re hiring, collaborating, or want to talk through an interesting problem space, I’d be glad to connect."
          />

          <div className="contact-panel">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="contact-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Designed and developed as the first version of zamanimthembu.co.za.
        </p>
        <span>Zamani Mthembu • Software Developer</span>
      </footer>
    </div>
  );
}

export default App;
