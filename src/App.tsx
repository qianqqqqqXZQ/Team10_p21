import { useEffect, useRef, useState } from "react";
import type { Experience, Member } from "./data";
import { project, members, workflow, designDetails, pageCopy, teamFit } from "./data";
import TimelineBridge from "./TimelineBridge";
import Prototype from "./Prototype";

/** Fixed drawing coordinates only: no real prices, dates, or performance data. */
const marketCurve = (() => {
  const turns = [
    [0, 440], [75, 452], [145, 396], [220, 425], [300, 324],
    [360, 349], [420, 272], [470, 306], [535, 288], [600, 384],
    [665, 367], [735, 445], [800, 418], [875, 310], [930, 347],
    [1000, 244], [1065, 276], [1125, 188], [1195, 232],
    [1250, 150], [1315, 182], [1400, 100],
  ];
  let seed = 210;
  let segment = 0;
  let jitter = 0;
  return Array.from({ length: 281 }, (_, index) => {
    const x = index * 5;
    while (segment < turns.length - 2 && x > turns[segment + 1][0]) segment++;
    const [startX, startY] = turns[segment];
    const [endX, endY] = turns[segment + 1];
    const progress = (x - startX) / (endX - startX);
    // Seeded, correlated offsets make the drawing stable across renders.
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    jitter = jitter * 0.42 + (seed / 4294967296 - 0.5) * 29;
    const y = startY + (endY - startY) * progress + jitter;
    return `${index === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`;
  }).join(" ");
})();

function MarketBackground() {
  return (
    <svg className="market-background" viewBox="0 0 1400 650" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="market-gold" x1="0" x2="1">
          <stop offset="0" stopColor="#b88b24" stopOpacity="0.62" />
          <stop offset="0.35" stopColor="#c4a34e" stopOpacity="0.22" />
          <stop offset="0.6" stopColor="#b9983e" stopOpacity="0.2" />
          <stop offset="1" stopColor="#ac7c17" stopOpacity="0.76" />
        </linearGradient>
        <linearGradient id="market-wash" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#c6a03b" stopOpacity="0.16" />
          <stop offset="0.75" stopColor="#d7b456" stopOpacity="0.025" />
          <stop offset="1" stopColor="#d7b456" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="#b99a49" strokeWidth="0.7" opacity="0.09">
        <path d="M0 170H1400 M0 290H1400 M0 410H1400 M0 530H1400" />
        <path d="M160 100V650 M340 100V650 M520 100V650 M700 100V650 M880 100V650 M1060 100V650 M1240 100V650" />
      </g>
      <path d={`${marketCurve} L1400 650 H0 Z`} fill="url(#market-wash)" />
      <path d={marketCurve} fill="none" stroke="url(#market-gold)" strokeWidth="7" opacity="0.08" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      <path d={marketCurve} fill="none" stroke="url(#market-gold)" strokeWidth="1.8" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProcessIcon({ name }: { name: string }) {
  const drawings: Record<string, React.ReactNode> = {
    document: (
      <>
        <path d="M19 9h20l10 10v39H19z" />
        <path d="M39 9v11h10M26 31h16M26 38h16M26 45h10" />
        <path d="M12 17v48h29" />
      </>
    ),
    scan: (
      <>
        <path d="M13 24V12h12m14 0h12v12m0 16v12H39m-14 0H13V40M8 32h48" />
        <rect x="23" y="22" width="18" height="20" rx="2" />
        <path d="M28 27h8m-8 10h8" />
      </>
    ),
    chart: (
      <>
        <path d="M12 12v42h44M21 44V33h7v11m9 0V24h7v20M18 25l13-9 10 2 13-10M47 8h7v7" />
        <path d="M21 59h30" />
      </>
    ),
    report: (
      <>
        <rect x="14" y="9" width="36" height="49" rx="3" />
        <path d="M23 20h18M23 27h18M23 34h10M25 46l5 5 11-13" />
        <path d="M21 64h28" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 64 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {drawings[name]}
    </svg>
  );
}

function SectionHeading({
  number,
  label,
  children,
  text,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <h2>{children}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ExperienceGroup({
  title,
  items,
}: {
  title: string;
  items?: Experience[];
}) {
  if (!items?.length) return null;
  return (
    <section className="experience-group">
      <h3>{title}</h3>
      {items.map((item) => (
        <article key={item.title}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          {item.url && (
            <a
              className="text-link"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              Project repository <Arrow diagonal />
            </a>
          )}
        </article>
      ))}
    </section>
  );
}

function MemberDialog({
  member,
  onClose,
  returnFocus,
}: {
  member: Member;
  onClose: () => void;
  returnFocus: HTMLButtonElement | null;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = returnFocus;
    const modal = dialog.current;
    const scrollStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modal?.showModal();
    return () => {
      modal?.close();
      document.body.style.overflow = scrollStyle;
      previous?.focus();
    };
  }, [returnFocus]);

  return (
    <dialog
      ref={dialog}
      className="member-dialog"
      aria-labelledby="member-name"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialog.current) {
          const rect = dialog.current.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="dialog-close"
        aria-label="Close member profile"
        onClick={onClose}
      >
        ×
      </button>
      <div className="dialog-header">
        <span className="eyebrow">
          {member.leader ? "TEAM LEADER" : "MEET THE TEAM"}
        </span>
        <h2 id="member-name">{member.name}</h2>
        <p className="member-role">{member.role}</p>
        <p>{member.introduction}</p>
        <div className="profile-links">
          <a href={`mailto:${member.email}`}>
            {member.email} <Arrow diagonal />
          </a>
          {member.website && (
            <a href={member.website} target="_blank" rel="noreferrer">
              Personal website <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
      <div className="dialog-body">
        <section className="profile-responsibility">
          <span className="eyebrow">PLANNED P21 RESPONSIBILITIES</span>
          <p>{member.responsibility}</p>
        </section>
        <ExperienceGroup
          title="Internship experience"
          items={member.internships}
        />
        <ExperienceGroup title="Project experience" items={member.projects} />
        <ExperienceGroup title="Research experience" items={member.research} />
        <section className="experience-group">
          <h3>Skills & foundations</h3>
          <ul className="skill-details">
            {member.skillDetails.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
        <p className="profile-source">
          Profile based on the team’s P21 bid report · 15 October 2026.
        </p>
      </div>
    </dialog>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const profileTrigger = useRef<HTMLButtonElement | null>(null);
  const nav = [
    { id: "project", label: "Project" },
    { id: "plan", label: "Plan" },
    { id: "timeline", label: "Timeline" },
    { id: "team", label: "Team" },
    { id: "why-us", label: "Team fit" },
    { id: "prototype", label: "Prototype" },
  ];

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    reveals.forEach((el) => revealObserver.observe(el));
    const navObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }),
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id], #plan")
      .forEach((el) => navObserver.observe(el));
    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a
            href="#top"
            className="wordmark"
            aria-label={`${project.team} home`}
          >
            <strong>
              Team202610<span> / </span>
            </strong>
            <span>UNNC GRP</span>
          </a>
          <nav
            id="main-navigation"
            className={menuOpen ? "main-nav open" : "main-nav"}
            aria-label="Main navigation"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#timeline">
            View our schedule <Arrow diagonal />
          </a>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span className={menuOpen ? "is-open" : ""} />
          </button>
        </div>
      </header>

      <main id="main">
        <section
          className="hero container"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-frame">
            <MarketBackground />
            <div className="hero-topline">
              <span>UNIVERSITY OF NOTTINGHAM NINGBO CHINA</span>
              <span>PROJECT PROPOSAL / P21</span>
            </div>
            <div className="hero-content">
              <h1 id="hero-title">{project.name}</h1>
              <p className="hero-description">
                {pageCopy.heroDescription}
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#timeline">
                  View our schedule <Arrow diagonal />
                </a>
                <a className="button button-outline" href="#team">
                  Meet the team <Arrow />
                </a>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="hero-project-title">
                <span className="tiny-label">TEAM</span>
                <p>{project.team}</p>
              </div>
              <a
                className="scroll-cue"
                href="#project"
                aria-label="Scroll to our project"
              >
                <span>PROJECT OVERVIEW</span>
                <span>↓</span>
              </a>
            </div>
            <div className="hero-corner corner-left" aria-hidden="true" />
            <div className="hero-corner corner-right" aria-hidden="true" />
          </div>
        </section>

        <section
          className="project-section container section-space"
          id="project"
        >
          <div className="reveal">
            <SectionHeading
              number="01"
              label="OUR PROJECT"
              text={pageCopy.proposalIntroduction}
            >
              {pageCopy.projectHeading}
            </SectionHeading>
          </div>
          <div className="workflow-grid">
            {workflow.map((step, index) => (
              <article className="workflow-card reveal" key={step.title}>
                <div className="workflow-top">
                  <span className="tiny-label">0{index + 1}</span>
                  <Arrow />
                </div>
                <div className="process-illustration">
                  <ProcessIcon name={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="design-heading" id="plan">
            <h3>Our plan</h3>
            <p>{pageCopy.planIntroduction}</p>
          </div>
          <div className="design-details">
            {designDetails.map((detail, index) => (
              <details key={detail.title} open={index === 0}>
                <summary>
                  <span className="detail-number">0{index + 1}</span>
                  {detail.title}
                  <span className="detail-toggle" aria-hidden="true" />
                </summary>
                <p>{detail.text}</p>
              </details>
            ))}
          </div>
          <div className="technology-line">
            <span className="tiny-label">PROPOSED CORE STACK</span>
            <span>React</span>
            <i>·</i>
            <span>FastAPI</span>
            <i>·</i>
            <span>MySQL</span>
            <i>·</i>
            <span>Python</span>
            <i>·</i>
            <span>LLMs</span>
          </div>
        </section>

        <section
          className="timeline-section container section-space"
          id="timeline"
        >
          <div className="timeline-heading reveal">
            <SectionHeading
              number="02"
              label="OUR TIMELINE"
              text={pageCopy.scheduleIntroduction}
            >
              {pageCopy.scheduleHeading}
            </SectionHeading>
            <div className="timeline-range">
              <span>21 OCT 2026</span>
              <svg className="range-line" viewBox="0 0 100 12" fill="none" aria-hidden="true" focusable="false">
                <path d="M1 6H98M93 1L98 6L93 11" vectorEffect="non-scaling-stroke" />
              </svg>
              <span>01 APR 2027</span>
            </div>
          </div>
          <TimelineBridge />
        </section>

        <section className="team-section section-space" id="team">
          <div className="container">
            <div className="team-heading reveal">
              <SectionHeading number="03" label="OUR TEAM">
                {pageCopy.teamHeading}
              </SectionHeading>
              <p>
                {pageCopy.teamIntroduction}
              </p>
            </div>
            <div className="team-grid">
              {members.map((member, index) => (
                <article
                  className={`member-card reveal${member.leader ? " leader-card" : ""}`}
                  key={member.name}
                >
                  <div className="member-card-top">
                    <span className="tiny-label">
                      {member.leader
                        ? "TEAM LEADER"
                        : `TEAM MEMBER / 0${index + 1}`}
                    </span>
                    <span className="member-index">0{index + 1}</span>
                  </div>
                  <div className="member-card-content">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-summary">{member.responsibility}</p>
                    <div className="skill-tags">
                      {member.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="member-profile-button"
                    onClick={(event) => {
                      profileTrigger.current = event.currentTarget;
                      setSelectedMember(member);
                    }}
                    aria-label={`View profile of ${member.name}`}
                  >
                    <span>View profile</span>
                    <Arrow diagonal />
                  </button>
                </article>
              ))}
            </div>
            <p className="team-footnote">
              {pageCopy.teamwork}
              <br />
              {pageCopy.reviewProcess}
            </p>
          </div>
        </section>

        <section className="team-fit-section container section-space" id="why-us" aria-labelledby="team-fit-title">
          <div className="section-heading reveal">
            <div className="section-kicker">
              <span>04</span>
              <span>TEAM EXPERIENCE</span>
            </div>
            <h2 id="team-fit-title">{pageCopy.teamFitHeading}</h2>
          </div>
          <ol className="team-fit-list">
            {teamFit.map((reason, index) => (
              <li className="team-fit-item reveal" key={reason.title}>
                <span className="team-fit-number" aria-hidden="true">0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </li>
            ))}
          </ol>
        </section>
        <Prototype />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a className="footer-wordmark" href="#top">
                {project.team}
              </a>
              <p>
                {project.institution}
                <br />
                Computer Science · Group Research Project
              </p>
            </div>
            <div className="footer-links">
              <a href="#project">Our project</a>
              <a href="#plan">Our plan</a>
              <a href="#team">Our team</a>
              <a href="#timeline">Our schedule</a>
              <a href="#why-us">Team fit</a>
              <a href="#prototype">Prototype</a>
            </div>
            <div className="footer-contact">
              <span>CONTACT</span>
              <a href="mailto:scyzx7@nottingham.edu.cn">
                scyzx7@nottingham.edu.cn <Arrow diagonal />
              </a>
              <a
                href="https://qqqqqprofile.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Team leader’s website <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 {project.team}. P21 project proposal.</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
      {selectedMember && (
        <MemberDialog
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
          returnFocus={profileTrigger.current}
        />
      )}
    </>
  );
}
