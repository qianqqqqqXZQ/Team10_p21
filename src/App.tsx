import { useEffect, useRef, useState } from "react";
import type { Experience, Member } from "./data";
import { project, members, workflow, designDetails, pageCopy } from "./data";
import TimelineBridge from "./TimelineBridge";

/** Decorative, invented market-style series; it carries no financial data. */
function MarketBackground() {
  const curve = "M-20 492 L16 479 34 492 55 462 73 471 91 439 112 452 132 421 154 435 177 406 198 426 222 398 243 414 263 389 282 405 304 373 325 386 346 355 367 377 390 346 412 365 433 325 454 340 476 313 495 336 516 304 538 326 558 295 581 311 604 280 623 306 644 292 663 325 682 310 704 349 724 371 744 354 766 391 785 373 806 407 825 387 845 362 865 378 885 338 904 352 925 310 945 328 964 292 983 304 1004 270 1024 289 1045 251 1066 268 1086 230 1107 244 1126 205 1147 219 1167 185 1188 203 1208 166 1228 185 1248 148 1269 165 1290 131 1310 146 1331 110 1352 128 1372 93 1393 108 1420 72";
  return (
    <svg className="market-background" viewBox="0 0 1400 650" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="market-gold" x1="0" x2="1">
          <stop offset="0" stopColor="#bc963e" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#c8a64e" stopOpacity="0.14" />
          <stop offset="1" stopColor="#ab7d1e" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="market-wash" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#d7b456" stopOpacity="0.1" />
          <stop offset="1" stopColor="#d7b456" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="#b99a49" strokeWidth="0.7" opacity="0.09">
        <path d="M0 170H1400 M0 290H1400 M0 410H1400 M0 530H1400" />
        <path d="M160 100V650 M340 100V650 M520 100V650 M700 100V650 M880 100V650 M1060 100V650 M1240 100V650" />
      </g>
      <path d={`${curve} L1420 650 H-20 Z`} fill="url(#market-wash)" />
      <path d={curve} fill="none" stroke="url(#market-gold)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
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
            aria-label="UNNC GRP Team 10 home"
          >
            <strong>
              TEAM 10<span> / </span>
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
              <p className="script-line">Our P21 proposal</p>
              <h1 id="hero-title">
                Quarterly reports.
                <br />
                <span>Analysis you can check.</span>
              </h1>
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
                <span className="tiny-label">THE PROJECT</span>
                <p>{project.name}</p>
              </div>
              <a
                className="scroll-cue"
                href="#project"
                aria-label="Scroll to our project"
              >
                <span>SCROLL TO EXPLORE</span>
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
              From quarterly reports
              <br />
              <span>to reviewed analysis.</span>
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
              Our schedule.
              <br />
              <span>October to April.</span>
            </SectionHeading>
            <div className="timeline-range">
              <span>21 OCT 2026</span>
              <span className="range-line" />
              <span>01 APR 2027</span>
            </div>
          </div>
          <TimelineBridge />
        </section>

        <section className="team-section section-space" id="team">
          <div className="container">
            <div className="team-heading reveal">
              <SectionHeading number="03" label="OUR TEAM">
                Our team.
                <br />
                <span>Who will do what.</span>
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

        <section className="closing container reveal">
          <h2>Discuss the P21 proposal.</h2>
          <p>Contact Ziqian XIONG, our team leader.</p>
          <a
            className="button button-gold"
            href="mailto:scyzx7@nottingham.edu.cn"
          >
            Get in touch <Arrow diagonal />
          </a>
          <span className="closing-label">
            P21 · PROJECT PROPOSAL · 2026–2027
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a className="footer-wordmark" href="#top">
                UNNC GRP Team 10
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
            </div>
            <div className="footer-contact">
              <span>LET’S CONNECT</span>
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
            <span>© 2026 UNNC GRP Team 10. P21 project proposal.</span>
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
