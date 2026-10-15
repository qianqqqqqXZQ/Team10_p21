/** Public editorial content. No student IDs or private source documents are imported. */
export const sources = {
  bid: "reference/bid-materials/revisions/2026-10-16-latest/bid_P21.tex",
  plan: "reference/bid-materials/revisions/2026-10-16-latest/project_plan_P21.md",
  profiles: "reference/bid-materials/docs/character/",
  revision: "15 October 2026 bid · synchronised 16 October 2026",
  bidSha256: "cd59da554360f9b0f6b44c2e160447527de4e1acc54ccd21fcfa4b092e713708",
} as const;

export const project = {
  name: "AI-Driven Post-Investment Quarterly Report Analysis for Private Equity Portfolios",
  team: "UNNC GRP Team202610",
  institution: "University of Nottingham Ningbo China",
  summary:
    "We plan to extract and verify information from portfolio companies’ quarterly reports, compare performance across quarters and peers, and generate standardised reports for analyst review.",
  source: sources.bid,
};

export const pageCopy = {
  projectHeading: "Project overview",
  scheduleHeading: "Timeline & workflow",
  teamHeading: "Team & work distribution",
  teamFitHeading: "Why Our Team Fits This Project",
  heroDescription: "A proposal for AI-assisted quarterly report analysis in private equity.",
  proposalIntroduction: "We will connect PDF and Word extraction with company and industry analysis, peer comparisons, graded risks, and report generation. Key figures and findings will link to source evidence.",
  planIntroduction: "Start with one company across multiple quarters, then extend the analysis and reporting coverage.",
  teamIntroduction: "Our seven members bring experience in document extraction, model evaluation, LLM research, application development, and data annotation.",
  teamwork: "We will divide tasks by experience and interests, help one another learn unfamiliar methods, and adjust the work through progress discussions and supervisor feedback.",
  reviewProcess: "Weekly integration reviews during concentrated development; brief asynchronous check-ins during the low-workload period. Financial definitions and risk interpretations will be checked with the supervisor or a domain reviewer.",
  scheduleIntroduction: "First demonstrable workflow by 15 December. Light review in January and February. Integration, evaluation, and delivery in March.",
};

/** From the five points in the English bid's identically titled subsection. */
export const teamFit = [
  {
    title: "Strong motivation to connect AI with finance",
    text: "Our shared interest in AI and financial analysis motivates us to engage closely with the business questions behind the software. We will turn this interest into regular discussion of authorised report examples, shared learning on financial indicators and post-investment workflows, and iterative refinement following supervisor or domain-reviewer feedback.",
    source: sources.bid,
  },
  {
    title: "PDF extraction and model selection",
    text: "Yun Xin NG’s PDF data extraction and benchmark-based document-model comparisons are directly relevant to the first stage of P21. Together with Ziqian XIONG’s model implementation and comparative experiments, they provide a basis for testing parsing and extraction candidates on authorised quarterly reports.",
    source: sources.bid,
  },
  {
    title: "Checkable analysis and evaluation",
    text: "Ziqian ZHANG’s annotation and JSON data-preparation experience can support field-and-source reference samples. Yue WU’s programming and technical-analysis background can support implementing quarterly comparisons and risk rules against domain-reviewed examples. This connects data-quality checks with reproducible analytical results.",
    source: sources.bid,
  },
  {
    title: "Structured storage and a complete reporting application",
    text: "Yun Xin NG’s MySQL-backed management system, Ziqian XIONG’s Flask and React/TypeScript projects, Xinyun HU’s SQL and web foundations, and Oswald Yiwen CHONG’s application-development and CI/CD skills support the database, verification interface, integration, and deployment. Jinyao LU’s LLM-related research and writing provide a basis for investigating report-generation methods and documenting template and review criteria.",
    source: sources.bid,
  },
  {
    title: "A defined route to financial-domain validation",
    text: "We will agree indicator definitions, reporting bases, peer criteria, and risk rules with the supervisor or domain reviewer, then implement them as checked examples, calculations, and evidence-linked outputs. This gives our existing software and AI experience a concrete route into the project’s investment-analysis requirements.",
    source: sources.bid,
  },
];

export const scheduleNotes = [
  {
    title: "Document review & earlier tasks",
    dates: "16 Dec 2026 – 5 Jan 2027",
    text: "Review documents, collect feedback, and finish earlier tasks as needed. This remains a flexible team buffer, with no critical work or participant trials scheduled.",
  },
  {
    title: "Low-workload period",
    dates: "6 Jan – 28 Feb 2027",
    text: "At most one small asynchronous task per member per week, adjusted to availability. No critical integration, required training runs, or participant trials.",
  },
  {
    title: "Submission checks",
    dates: "31 Mar – 1 Apr 2027",
    text: "Check the release, final report, documentation, filenames, access, and receipts. Final report and software due 1 April; course dates remain tentative.",
  },
];

export interface Experience {
  title: string;
  description: string;
  url?: string;
}
export interface Member {
  name: string;
  role: string;
  leader?: boolean;
  email: string;
  website?: string;
  summary: string;
  introduction: string;
  skills: string[];
  skillDetails: string[];
  responsibility: string;
  internships?: Experience[];
  projects?: Experience[];
  research?: Experience[];
  source: string;
}

export const members: Member[] = [
  {
    name: "Ziqian XIONG",
    role: "Team coordination & LLM integration",
    leader: true,
    email: "scyzx7@nottingham.edu.cn",
    website: "https://qqqqqprofile.vercel.app/",
    summary:
      "Model experiments, a Flask-based 4DGS tool, and React/TypeScript application development.",
    introduction:
      "A Computer Science undergraduate at UNNC and our team leader. His medical image segmentation research involves model implementation, dataset checking, and comparative evaluation. His 4DGS tool and MomoFocus application add Python/Flask backend and React/TypeScript interface experience, supporting extraction-method comparison and an interactive verification and reporting application.",
    skills: ["PyTorch", "React / TypeScript", "Flask", "Model evaluation"],
    skillDetails: [
      "Python, C/C++, Java, Haskell, JavaScript, TypeScript, Lean, and Verilog.",
      "MySQL databases.",
      "PyTorch; OpenMMLab (MMSegmentation, MMCV, MMEngine); CNN–Transformer models; data preprocessing, comparative evaluation, and RAG.",
      "HTML, CSS, React, Electron, Vite, Flask, Three.js/WebGL, NumPy, and SciPy.",
      "Docker, electron-builder, and technical documentation for agent-assisted development, including harness and loop engineering.",
    ],
    responsibility:
      "Coordinate the team and supervisor discussions; guide system design, compare extraction and LLM methods, and connect structured data with report generation.",
    internships: [
      {
        title: "Pony.ai · Algorithm internship",
        description:
          "July–September 2026. Investigated VGGT-related 3D/4D reconstruction in the AI department and compared multi-view geometry and depth estimation against an existing DA3/3D Gaussian Splatting pipeline. Completed feasibility validation and engineering integration, replacing the original reconstruction workflow. Wrote documentation on agent-assisted development.",
      },
    ],
    projects: [
      {
        title: "4DGS-Edit-and-Compare",
        description:
          "July–September 2026. Independently developed a 4D Gaussian Splatting point-cloud editing and comparison tool during the Pony.ai internship. Supports selected-region rotation, translation and deletion, multi-point-cloud comparison, and quantitative evaluation. Uses Python/Flask, JavaScript/Three.js/WebGL, NumPy/SciPy, PyTorch/plyfile, and Docker. His personal website reports company use.",
        url: "https://github.com/qianqqqqqXZQ/4DGS-Edit-and-Compare",
      },
      {
        title: "MomoFocus",
        description:
          "September–October 2026. A personal productivity application combining tasks, notes, and a Pomodoro timer. Built with React, TypeScript, CSS, Electron, Vite, and electron-builder, with localStorage persistence and dnd-kit sortable lists.",
        url: "https://github.com/qianqqqqqXZQ/MomoFocus",
      },
    ],
    research: [
      {
        title: "Medical image segmentation",
        description:
          "Implemented and debugged CNN–Transformer components, prepared and checked datasets, and evaluated Dice, IoU, and inference speed using Python, PyTorch, and OpenMMLab. A related paper is under submission to CVIU with him as second author.",
      },
      {
        title: "Dynamic dual-branch neural network",
        description:
          "Investigating a multi-task network for keyword spotting and speaker verification with early-exit scheduling and FPGA resource reallocation. Network design, scheduling, and resource-allocation strategies remain under evaluation.",
      },
    ],
    source: sources.bid,
  },
  {
    name: "Yun Xin NG",
    role: "Document extraction & evaluation",
    email: "efyyn8@nottingham.edu.cn",
    summary:
      "PDF extraction and vision-language model evaluation at YTL AI Labs, plus MySQL application experience.",
    introduction:
      "A second-year Computer Science student on a one-year exchange at UNNC after her first year at the University of Nottingham Malaysia. At YTL AI Labs, she extracted data from websites and PDFs and compared open-source vision-language models using existing benchmarks. Her machine-learning work and MySQL-backed course application support evaluation-sample preparation and structured storage.",
    skills: ["PDF extraction", "VLM evaluation", "MySQL", "RAG"],
    skillDetails: [
      "Python, Java, and C/C++; HTML, CSS, and MySQL.",
      "Web/PDF extraction, dataset preparation, training/test splitting, and RAG.",
      "Model training and benchmark-based vision-language model evaluation and selection.",
    ],
    responsibility:
      "Develop PDF/Word text and table extraction, compare OCR and document models, and retain source locations, drawing on her document-extraction and model-evaluation experience.",
    internships: [
      {
        title: "YTL AI Labs · Data-engineering internship",
        description:
          "Extracted web-page and PDF data, shortlisted open-source vision-language models against application needs, and compared document understanding and text extraction using existing benchmarks. Selected a model considering benchmark results and practical suitability.",
      },
    ],
    projects: [
      {
        title: "Machine learning project",
        description:
          "Prepared training/test splits and trained models, gaining dataset-preparation and experimental-workflow experience.",
      },
      {
        title: "Internship Management System",
        description:
          "A first-year course application built with HTML, CSS, Java, and MySQL, connecting page development with application logic and persistent data.",
      },
    ],
    source: sources.bid,
  },
  {
    name: "Jinyao LU",
    role: "Report generation & documentation",
    email: "scyl@nottingham.edu.cn",
    summary:
      "LLM-related research, academic writing, and Python/NumPy foundations for report generation and documentation.",
    introduction:
      "A Computer Science and Artificial Intelligence undergraduate at UNNC with LLM-related research and academic-writing experience. This background supports investigating evidence-grounded report generation, translating agreed requirements into templates and review criteria, and communicating evaluation results. Python/NumPy and software-engineering foundations support implementation and testing.",
    skills: ["LLM research", "Python / NumPy", "Technical writing"],
    skillDetails: [
      "Python, Java, C/C++, MySQL, and NumPy data processing.",
      "Basic web development, data structures, algorithms, and software engineering.",
      "Environment setup and basic C/Java tool use; Excel charts and PowerPoint.",
      "Academic writing and research presentation.",
    ],
    responsibility:
      "Study reporting requirements and templates, contribute to report generation, and prepare review examples and documentation, drawing on his LLM research and writing experience.",
    internships: [
      {
        title: "Zhejiang Dishi Information Technology · R&D internship",
        description:
          "July–August 2024. Learned software-development workflows and platform business logic; investigated VR/AR applications in the water sector.",
      },
      {
        title: "Zhejiang Zhongkong Information Industry · Internship",
        description:
          "June–August 2025. Monitored train status, participated in routine maintenance of an information-publishing platform and operational data recording, and learned to operate the dispatch system.",
      },
    ],
    projects: [
      {
        title: "Douyin AI hackathon · Campus organisation",
        description:
          "March–April 2026. Served on the campus core organising team, coordinating participating teams and event processes. This was an organising role.",
      },
    ],
    research: [
      {
        title: "LLMs and autonomous driving",
        description:
          "First author of a paper on LLMs and autonomous driving accepted by an international journal.",
      },
    ],
    source: sources.bid,
  },
  {
    name: "Oswald Yiwen CHONG",
    role: "Backend, storage & integration",
    email: "hcyoc1@nottingham.edu.cn",
    summary:
      "Application development through a bouldering social app, with GitHub collaboration and CI/CD skills.",
    introduction:
      "From Malaysia, studying Computer Science with Artificial Intelligence at the University of Nottingham. He enjoys building practical software and learning through technical challenges and teamwork. His blockchain-based bouldering social application, GitHub collaboration, and CI/CD skills support the upload-to-export application and repeatable deployment.",
    skills: ["Application development", "GitHub", "CI/CD"],
    skillDetails: [
      "Python, Java, C/C++, and MySQL.",
      "Application development, blockchain, and decentralised technologies.",
      "Proficient GitHub version control and team collaboration.",
      "CI/CD pipelines supporting code reliability and rapid software delivery.",
    ],
    responsibility:
      "Develop backend services, database storage, and report export; connect application modules and support automated checks and deployment.",
    projects: [
      {
        title: "Blockchain-based bouldering social application",
        description:
          "Developed a Strava-like social application for bouldering, using blockchain to award user badges and incorporating NFT-related functionality. This provided practical experience in applying decentralised technology to a user-facing application.",
      },
    ],
    source: sources.bid,
  },
  {
    name: "Ziqian ZHANG",
    role: "Reference data & quality assurance",
    email: "scyzz23@nottingham.edu.cn",
    summary:
      "Research experience in image annotation and data preparation, using Labelme and JSON records.",
    introduction:
      "A third-year Computer Science student with research experience in image annotation and data preparation, and skills in Labelme and JSON annotation/data management. For P21, this experience will be adapted to report-field and source annotations, with a second reviewer checking financial values, units, and reporting periods.",
    skills: ["Data annotation", "Labelme", "JSON", "Dataset preparation"],
    skillDetails: [
      "Foundational Python, Java, and C/C++; MySQL databases.",
      "Labelme, JSON annotation and data management, image annotation, and dataset preparation.",
    ],
    responsibility:
      "Prepare checked field and source samples, organise annotations, and record extraction and report errors, building on her research data-preparation experience.",
    research: [
      {
        title: "AI-driven Analysis and Optimization of Performance on Magnets",
        description:
          "Contributed image annotation and data preparation. Her Labelme and JSON data-management skills provide a foundation for organising labels and structured annotation records, maintaining consistency between source images and annotations.",
      },
    ],
    source: sources.bid,
  },
  {
    name: "Yue WU",
    role: "Calculations, comparisons & risk rules",
    email: "sgyyw10@nottingham.edu.cn",
    summary:
      "Programming, technical analysis, and CCN research and writing, with Python, Java, and SQLite skills.",
    introduction:
      "Studies Computer Science at UNNC. Her CCN research and paper writing involve literature review and technical analysis, complemented by Python, Java, and SQLite. This provides a basis for researching analytical methods, implementing reviewed calculations and risk rules, and documenting their assumptions.",
    skills: ["Python / Java", "SQLite", "Technical analysis"],
    skillDetails: [
      "Java, Python, Haskell, C/C++, and JavaScript.",
      "HTML, CSS, MySQL, and SQLite.",
      "IntelliJ IDEA, Anaconda, Visual Paradigm, LaTeX, and MATLAB.",
      "Algorithm analysis, technical literature review, and academic writing.",
    ],
    responsibility:
      "Implement agreed quarterly calculations, industry and peer comparisons, and risk rules; check examples and explain the methods with supervisor or domain-reviewer guidance.",
    projects: [
      {
        title: "Coursework development",
        description:
          "Applied programming and algorithmic problem-solving in software-related course projects, translating computing concepts into implementations.",
      },
    ],
    research: [
      {
        title: "CCN research and technical writing",
        description:
          "Worked on research and paper writing concerning “The softwarization and interoperability of CCN”, developing literature-review, technical-analysis, and academic-writing experience.",
      },
    ],
    source: sources.bid,
  },
  {
    name: "Xinyun HU",
    role: "Upload, verification & report-review pages",
    email: "scyxh8@nottingham.edu.cn",
    summary:
      "SQL, SQLite, and web-development foundations, alongside an AI-enabled Connect Four project.",
    introduction:
      "A third-year Computer Science student with programming, SQL, SQLite, and web-technology foundations and an AI-enabled Connect Four project. These skills support forms connecting extracted indicators to database records, and views presenting quarterly comparisons, missing data, and review status.",
    skills: ["SQL / SQLite", "Web development", "Python", "Java"],
    skillDetails: [
      "Java, Python, C/C++, Haskell, SQL, MATLAB, and MIPS Assembly.",
      "HTML, CSS, MySQL, and SQLite.",
      "Git, VS Code, Eclipse, and Visual Paradigm.",
    ],
    responsibility:
      "Build upload, source-verification, comparison, and report-review pages; connect them to backend data and show missing information and review status.",
    projects: [
      {
        title: "Connect Four Game with AI",
        description:
          "July 2025. An AI-enabled Connect Four game, providing a practical setting for discussing algorithmic behaviour and interactive applications.",
      },
    ],
    source: sources.bid,
  },
];

export const workflow = [
  {
    title: "Import & extract",
    text: "Read PDF and Word reports. Extract text and tables, with OCR only where needed.",
    icon: "document",
  },
  {
    title: "Structure & verify",
    text: "Organise financial and business information. Keep units, periods, and source evidence.",
    icon: "scan",
  },
  {
    title: "Analyse & compare",
    text: "Compare company and industry performance across quarters and peers. Assess operational, compliance, team-change, and VAM risks.",
    icon: "chart",
  },
  {
    title: "Generate & review",
    text: "Assemble a standardised report with checkable figures and analyst approval.",
    icon: "report",
  },
];

export const designDetails = [
  {
    title: "First-version scope",
    text: "One company, multiple quarters: import, extract, structure, verify, store, calculate QoQ/YoY, and generate a standardised report. Corrections create new versions and update affected analyses and drafts.",
  },
  {
    title: "Analysis & risk coverage",
    text: "Add company and industry quarterly analysis, anomaly attribution, sector/stage peer matching, relative positions and ranking movements. Grade operational, compliance, team-change, and performance-bet (VAM) risks. Hold/exit/impairment indications and value-creation suggestions remain subject to analyst review.",
  },
  {
    title: "Technology & system design",
    text: "React interfaces, Python/FastAPI APIs, and MySQL structured records. Evaluate PyMuPDF/pdfplumber and python-docx, use PaddleOCR as needed, and preserve monetary precision with Decimal. LLMs structure extracted information and assemble evidence-grounded reports; calculations and risk thresholds use programmatic rules. Docker Compose supports reproducible deployment. BGE-M3/FAISS retrieval is an optional later enhancement, after the core workflow is stable.",
  },
  {
    title: "Evaluation",
    text: "Agree authorised samples, indicator definitions, templates, and validation criteria with the supervisor. Compare baseline parsing with LLM extraction on held-out companies and periods. Check extraction and source accuracy, calculations, risk errors, and report consistency; record missing evidence explicitly. Reviewer evaluation will follow the required approval.",
  },
  {
    title: "Deliverables",
    text: "A parsing and report-generation prototype, an adaptable standard report template, quarterly monitoring indicators, and a risk-rule library, together with evaluation results, deployment documentation, and a user guide. Financial definitions, peer criteria, and risk rules will be validated with a supervisor or domain reviewer.",
  },
];

export interface Phase {
  id: number;
  title: string;
  shortTitle: string;
  dates: string;
  periodLabel: string;
  summary: string;
  tasks: string[];
  deliverable: string;
  cells: string[];
  lowWorkload?: boolean;
}

export const phases: Phase[] = [
  {
    id: 1,
    title: "Requirements & samples",
    shortTitle: "Define",
    dates: "21 Oct – 3 Nov 2026",
    periodLabel: "OCT–NOV",
    summary:
      "Agree requirements and acceptance criteria with the supervisor, and audit the available report samples.",
    tasks: [
      "Agree analyst journeys, report templates, indicator definitions, and acceptance criteria.",
      "Confirm access to multi-quarter company reports and industry, peer, and VAM evidence; parse a sample and record its source locations.",
      "Prepare resource requests and ethics documentation before participant-related work.",
    ],
    deliverable:
      "Requirements, authorised sample inventory, initial indicator dictionary, and source-reference design.",
    cells: ["21–31", "1–3", "", "", "", "", ""],
  },
  {
    id: 2,
    title: "Parsing & verification",
    shortTitle: "Extract",
    dates: "4 – 24 Nov 2026",
    periodLabel: "NOVEMBER",
    summary:
      "Build document extraction, source-linked verification, and the first checked reference set.",
    tasks: [
      "Implement PDF/Word text and table extraction, OCR, and LLM structuring.",
      "Build source-linked verification and MySQL records with unit and period checks.",
      "Publish the team website, freeze indicator definitions, and prepare interface skeletons and reusable evaluation fixtures.",
    ],
    deliverable:
      "Parsing baseline, manually checked reference set, and verification interface.",
    cells: ["", "4–24", "", "", "", "", ""],
  },
  {
    id: 3,
    title: "First report & rule pilots",
    shortTitle: "Analyse",
    dates: "25 Nov – 15 Dec 2026",
    periodLabel: "NOV–DEC",
    summary:
      "Demonstrate the complete workflow for one company across multiple quarters by 15 December.",
    tasks: [
      "Implement QoQ/YoY calculations on comparable reporting bases, handle missing periods, and add initial anomaly rules.",
      "By 15 December, demonstrate upload, verification, storage, calculation, and LLM report generation/export for one company across multiple quarters. Check that correcting a source figure updates the affected analysis and report.",
      "In parallel, pilot sourced industry/peer examples and all four risk categories; prepare charts, approval interfaces, and reusable comparison scripts. Submit interim evidence by 10 December.",
    ],
    deliverable:
      "Demonstrable first workflow, standardised report draft, pilot rules, interface skeletons, and preserved evaluation fixtures.",
    cells: ["", "25–30", "1–15", "", "", "", ""],
  },
  {
    id: 4,
    title: "Light review & documentation",
    shortTitle: "Maintain",
    dates: "6 Jan – 28 Feb 2027",
    periodLabel: "JAN–FEB",
    lowWorkload: true,
    summary:
      "A deliberately lighter period for small independent tasks, adjusted to each member’s availability.",
    tasks: [
      "At most one small asynchronous task per member per week; review existing indicators, sources, industry/peer metadata, and saved risk examples.",
      "Draft template, rule-library, and user documentation; maintain extraction-error records and prepare March priorities from existing materials.",
      "No critical integration, required training runs, participant trials, or new analysis modules. No full-application delivery commitment in January or February.",
    ],
    deliverable:
      "Reviewed existing references, draft documentation, prepared test materials, and March integration priorities. Concentrated development resumes on 1 March.",
    cells: ["", "", "", "6–31", "1–28", "", ""],
  },
  {
    id: 5,
    title: "Industry, peers & risk integration",
    shortTitle: "Connect",
    dates: "1 – 9 Mar 2027",
    periodLabel: "01–09 MAR",
    summary:
      "Integrate the industry, peer, and risk pilots with the upload-to-export application by 9 March.",
    tasks: [
      "Connect the piloted industry analysis and sector/stage peer comparisons, showing relative positions and quarterly ranking changes.",
      "Add the tested operational, compliance, team-change, and VAM risk rules, with source evidence and clear missing-data states.",
      "By 9 March, connect upload/progress, source verification, charts, risk review, and report approval/export. Defer optional retrieval and valuation extensions.",
    ],
    deliverable:
      "Integrated prototype, four-category risk-rule library, and reviewable reporting workflow.",
    cells: ["", "", "", "", "", "1–9", ""],
  },
  {
    id: 6,
    title: "Evaluation & domain review",
    shortTitle: "Validate",
    dates: "10 – 16 Mar 2027",
    periodLabel: "10–16 MAR",
    summary:
      "Evaluate extraction, calculations, risk findings, and reports against prepared samples and reviewer feedback.",
    tasks: [
      "Use prepared held-out companies/periods and reference samples to compare baseline parsing with LLM extraction.",
      "Check sources, units, reporting bases, calculations, risk errors, and report consistency.",
      "Run approved analyst or domain review and reliability tests in parallel. Check access isolation, updates after corrections, missing evidence, and task recovery; complete the evaluation report and essential fixes by 16 March.",
    ],
    deliverable:
      "Evaluation findings, domain-review records, and prioritised reliability improvements.",
    cells: ["", "", "", "", "", "10–16", ""],
  },
  {
    id: 7,
    title: "Deployment & delivery",
    shortTitle: "Deliver",
    dates: "17 – 30 Mar 2027",
    periodLabel: "17–30 MAR",
    summary:
      "Freeze features and rules on 17 March, verify deployment by 23 March, and rehearse during 24–30 March.",
    tasks: [
      "Freeze features and rules on 17 March; regress the import-to-export workflow and risk cases.",
      "Verify Docker Compose deployment in a fresh environment by 23 March and complete operational documentation.",
      "Use 24–30 March to rehearse source verification, comparisons, graded risks, and reviewed report export.",
    ],
    deliverable:
      "Release version, final report, adaptable templates, rule library, and user guide.",
    cells: ["", "", "", "", "", "17–30", ""],
  },
];

export const milestones = [
  {
    date: "21 Oct 2026",
    title: "Resource requests open",
    text: "Record compute, model, and storage needs.",
  },
  {
    date: "28 Oct 2026",
    title: "Ethics submission",
    text: "Participant work follows the required approval.",
  },
  {
    date: "5 Nov 2026",
    title: "Team website",
    text: "Project information and non-confidential examples.",
  },
  {
    date: "10 Dec 2026",
    title: "Interim report",
    text: "Baseline evidence, architecture, risks, and next steps.",
  },
  {
    date: "15 Dec 2026",
    title: "First workflow demonstration",
    text: "One company, multiple quarters: upload, verify, calculate, and export.",
  },
  {
    date: "17 Mar 2027",
    title: "Feature & rule freeze",
    text: "Begin release regression checks and deployment verification.",
  },
  {
    date: "23 Mar 2027",
    title: "Deployment verified",
    text: "Verify Docker Compose deployment in a fresh environment.",
  },
  {
    date: "30 Mar 2027",
    title: "Development complete",
    text: "Release, final report, documentation, and demo ready.",
  },
  {
    date: "1 Apr 2027",
    title: "Final submission",
    text: "Team final report and software; verify access and receipts.",
  },
];
