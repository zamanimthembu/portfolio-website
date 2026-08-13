import profileImage from "./assets/zamani-profile.png";

const featuredProjects = [
  {
    title: "LinkAnalytics",
    category: "Backend Engineering",
    summary:
      "A RESTful link-shortening and analytics platform built to strengthen production-style backend engineering through clean API architecture, persistence, redirect handling and click analytics.",
    highlights: [
      "REST API architecture",
      "ASP.NET Core",
      "SQL persistence",
      "Docker environment",
    ],
    links: [
      {
        label: "View Source",
        href: "https://github.com/zamanimthembu/LinkAnalytics",
        variant: "primary",
        placeholder: false,
      },
    ],
  },
  {
    title: "College Rovers Performance Dashboard",
    category: "Full-Stack Performance Platform",
    summary:
      "A full-stack rugby performance platform combining a React interface, ASP.NET Core API, authentication and structured performance data to support clearer coaching decisions and match analysis.",
    highlights: [
      "Full-stack architecture",
      "REST API integration",
      "Role-based authentication",
      "Performance analytics",
    ],
    links: [
      {
        label: "Private Build in Progress",
        variant: "primary",
        placeholder: true,
      },
    ],
  },
  {
    title: "Portfolio Platform",
    category: "React / Vite Application",
    summary:
      "A responsive React and Vite portfolio platform built with reusable component structure, deployment-ready implementation, and iterative product development around a clear professional identity.",
    highlights: [
      "React / Vite",
      "Responsive components",
      "Deployment workflow",
      "Iterative product development",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://zamanimthembu.co.za",
        variant: "primary",
        placeholder: false,
      },
      {
        label: "Source",
        href: "https://github.com/zamanimthembu/portfolio-website",
        variant: "secondary",
        placeholder: false,
      },
    ],
  },
];

const expertise = [
  {
    title: "Backend Engineering",
    items: [
      "C# / ASP.NET Core",
      "REST API design",
      "Entity Framework Core",
      "SQL Server",
    ],
  },
  {
    title: "Java & Programming",
    items: [
      "Java",
      "Object-oriented programming",
      "Data structures & problem solving",
      "Spring Boot - current focus",
    ],
  },
  {
    title: "Full-Stack & Cloud",
    items: [
      "React / Vite",
      "Docker",
      "Azure",
      "AWS fundamentals",
    ],
  },
  {
    title: "Engineering Practice",
    items: [
      "Git / GitHub",
      "Debugging",
      "Technical documentation",
      "Structured problem solving",
    ],
  },
];

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/zamanimthembu",
    href: "https://github.com/zamanimthembu",
    note: "Open profile",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zamani-mthembu",
    href: "https://www.linkedin.com/in/zamani-mthembu-aa5475132/",
    note: "Open profile",
    external: true,
  },
  {
    label: "Email",
    value: "zamanimthembu@yahoo.com",
    href: "mailto:zamanimthembu@yahoo.com",
    note: "Start email",
  },
  {
    label: "CV / Resume",
    value: "CV available on request",
    href: "mailto:zamanimthembu@yahoo.com?subject=CV%20Request",
    note: "Request a copy via email",
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
      <div className="project-card__actions">
        {project.links.map((link) =>
          link.placeholder ? (
            <span
              key={link.label}
              className={`project-card__link project-card__link--${link.variant} project-card__status`}
              role="status"
              aria-label={`${link.label} for ${project.title}`}
            >
              {link.label}
            </span>
          ) : (
            <a
              key={link.label}
              className={`project-card__link project-card__link--${link.variant}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ),
        )}
      </div>
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

function ContactCard({ link }) {
  return (
    <a
      className="contact-link"
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      aria-label={link.label}
    >
      <span>{link.label}</span>
      <strong>{link.value}</strong>
      <small>{link.note}</small>
    </a>
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
              Software Developer | C# · ASP.NET Core · Java · React · SQL
            </span>
            <h1>
              Building reliable software systems with engineering clarity and
              product thinking.
            </h1>
            <p className="hero-copy__lede">
              I&apos;m Zamani Mthembu, a software developer with enterprise IT
              experience and hands-on full-stack development across C#,
              ASP.NET Core, Java, React, REST APIs and SQL. I enjoy turning real
              operational problems into well-structured software that is
              practical, maintainable and built with purpose.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                View Projects
              </a>
              <a className="button button--secondary" href="#contact">
                Let&apos;s Connect
              </a>
              <a
                className="button button--tertiary"
                href="mailto:zamanimthembu@yahoo.com?subject=CV%20Request"
                aria-label="Request Zamani Mthembu CV by email"
              >
                Request CV
              </a>
            </div>

            <div className="hero-metrics" aria-label="Professional highlights">
              <div>
                <strong>Backend-minded</strong>
                <span>APIs, data and application logic</span>
              </div>
              <div>
                <strong>Product-focused</strong>
                <span>Software built around real user needs</span>
              </div>
              <div>
                <strong>Systems-focused</strong>
                <span>Structured problem solving that scales</span>
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
                Software developer with product focus, structured engineering,
                and practical systems thinking.
              </p>
            </div>
            <div className="hero-visual__panel hero-visual__panel--top">
              <span>Current Focus</span>
              <strong>
                Backend engineering, Java/Spring Boot, cloud and production
                software
              </strong>
            </div>
            <div className="hero-visual__panel hero-visual__panel--bottom">
              <span>Trajectory</span>
              <strong>
                Building depth as a professional software engineer through real
                products and production-minded engineering
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
              <h3>What I build</h3>
              <p>
                I build practical backend and full-stack software, from REST
                APIs and data persistence to responsive interfaces and
                analytics-driven products.
              </p>
            </article>
            <article className="surface-card">
              <h3>How I engineer</h3>
              <p>
                I approach problems through structure: understanding the
                requirement, separating responsibilities, designing clear
                application layers and debugging methodically from symptoms to
                root cause.
              </p>
            </article>
            <article className="surface-card">
              <h3>Where I&apos;m heading</h3>
              <p>
                I&apos;m building deeper professional software engineering
                experience across Java, Spring Boot, cloud technologies,
                automated testing and production-scale systems.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionIntro
            eyebrow="Featured Projects"
            title="Software built around real problems, clear architecture and practical outcomes."
            description="Selected work demonstrating backend development, full-stack implementation, product thinking and the engineering decisions behind software that solves real problems."
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
            title="The engineering stack behind my work."
            description="A growing software engineering toolkit spanning backend development, Java, full-stack applications, cloud technologies and disciplined technical problem solving."
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
            description="If you're hiring, collaborating, or want to talk through an interesting problem space, I'd be glad to connect."
          />

          <div className="contact-panel">
            {contactLinks.map((link) => (
              <ContactCard key={link.label} link={link} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed and developed by Zamani Mthembu.</p>
        <span>Zamani Mthembu | Software Developer</span>
      </footer>
    </div>
  );
}

export default App;
