/** Public editorial content. No student IDs or private source documents are imported. */
export const sources = {
  bid: "reference/bid-materials/results/bid_P21.tex",
  plan: "reference/bid-materials/results/project_plan_P21.md",
  profiles: "reference/bid-materials/docs/character/",
} as const;

export const project = {
  name: "AI-Driven Post-Investment Quarterly Report Analysis for Private Equity Portfolios",
  team: "UNNC GRP Team 10",
  institution: "University of Nottingham Ningbo China",
  summary:
    "An LLM-based system that turns portfolio companies’ quarterly reports into structured analysis, traceable evidence, and standardised reports for analyst review.",
  source: sources.bid,
};

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
    role: "Architecture & LLM integration",
    leader: true,
    email: "scyzx7@nottingham.edu.cn",
    website: "https://qqqqqprofile.vercel.app/",
    summary:
      "Connecting model research with interactive applications. Leading the architecture, model comparisons, and evidence-to-report integration.",
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
      "Lead architecture, extraction/LLM integration, and model comparisons; coordinate interfaces and review evidence-to-report consistency across modules.",
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
      "PDF extraction and benchmark-based document-model evaluation, backed by data engineering and database application experience.",
    introduction:
      "A second-year Computer Science student on a one-year exchange at UNNC after her first year at the University of Nottingham Malaysia. At YTL AI Labs, she extracted data from websites and PDFs and compared open-source vision-language models using existing benchmarks. Her machine-learning work and MySQL-backed course application support evaluation-sample preparation and structured storage.",
    skills: ["PDF extraction", "VLM evaluation", "MySQL", "RAG"],
    skillDetails: [
      "Python, Java, and C/C++; HTML, CSS, and MySQL.",
      "Web/PDF extraction, dataset preparation, training/test splitting, and RAG.",
      "Model training and benchmark-based vision-language model evaluation and selection.",
    ],
    responsibility:
      "Develop PDF/Word extraction, compare OCR and document models, and map extracted tables and fields to structured records with source locations.",
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
    role: "Report design & domain review",
    email: "scyl@nottingham.edu.cn",
    summary:
      "Bringing LLM-related research and technical writing to reporting requirements, template review, and user acceptance.",
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
      "Coordinate reporting requirements and template review, document agreed indicator definitions, organise user acceptance scenarios, and assemble demonstrations and the user guide.",
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
    role: "Application integration & delivery",
    email: "hcyoc1@nottingham.edu.cn",
    summary:
      "Turning separate components into a tested application, with GitHub collaboration, integration checks, and repeatable deployment.",
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
      "Integrate upload, background task status, analysis, and report export; maintain GitHub review, automated integration checks, and deployment.",
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
      "Carefully checked annotations and structured reference data to make extraction quality measurable and reproducible.",
    introduction:
      "A third-year Computer Science student with research experience in image annotation and data preparation, and skills in Labelme and JSON annotation/data management. For P21, this experience will be adapted to report-field and source annotations, with a second reviewer checking financial values, units, and reporting periods.",
    skills: ["Data annotation", "Labelme", "JSON", "Dataset preparation"],
    skillDetails: [
      "Foundational Python, Java, and C/C++; MySQL databases.",
      "Labelme, JSON annotation and data management, image annotation, and dataset preparation.",
    ],
    responsibility:
      "Prepare manually checked field-and-source annotations, record unit/period/table errors, and maintain held-out extraction evaluation samples with a second reviewer.",
    research: [
      {
        title: "AI-driven Analysis and Optimization of Performance on Magnets",
        description:
          "Contributed image annotation and data preparation. His Labelme and JSON data-management skills provide a foundation for organising labels and structured annotation records, maintaining consistency between source images and annotations.",
      },
    ],
    source: sources.bid,
  },
  {
    name: "Yue WU",
    role: "Quarterly analysis & risk rules",
    email: "sgyyw10@nottingham.edu.cn",
    summary:
      "Combining programming and technical analysis to implement documented calculations, risk rules, and checkable reference examples.",
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
      "Implement documented quarter-on-quarter/year-on-year calculations and configurable risk rules after domain review; prepare reference examples and technical descriptions.",
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
    role: "Verification interface & data views",
    email: "scyxh8@nottingham.edu.cn",
    summary:
      "Connecting database records with clear verification forms, quarterly comparisons, and visible review states.",
    introduction:
      "A third-year Computer Science student with programming, SQL, SQLite, and web-technology foundations and an AI-enabled Connect Four project. These skills support forms connecting extracted indicators to database records, and views presenting quarterly comparisons, missing data, and review status.",
    skills: ["SQL / SQLite", "Web development", "Python", "Java"],
    skillDetails: [
      "Java, Python, C/C++, Haskell, SQL, MATLAB, and MIPS Assembly.",
      "HTML, CSS, MySQL, and SQLite.",
      "Git, VS Code, Eclipse, and Visual Paradigm.",
    ],
    responsibility:
      "Implement verification forms, indicator storage/API integration, and company/quarter comparison views, including missing-data and review-status displays.",
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
    text: "Track quarterly changes, benchmark peers, and surface four dimensions of risk.",
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
    title: "A focused first version",
    text: "One company, multiple quarters: import, extract, structure, verify, store, calculate QoQ/YoY, and generate a standardised report. Corrections create new versions and update affected analyses and drafts.",
  },
  {
    title: "The complete project",
    text: "Add company and industry quarterly analysis, anomaly attribution, sector/stage peer matching, relative positions and ranking movements. Grade operational, compliance, team-change, and performance-bet (VAM) risks. Hold/exit/impairment indications and value-creation suggestions remain subject to analyst review.",
  },
  {
    title: "The proposed technology",
    text: "React interfaces, Python/FastAPI APIs, and MySQL structured records. Evaluate PyMuPDF/pdfplumber and python-docx, use PaddleOCR as needed, and preserve monetary precision with Decimal. LLMs structure extracted information and assemble evidence-grounded reports; calculations and risk thresholds use programmatic rules. Docker Compose supports reproducible deployment. BGE-M3/FAISS retrieval is an optional later enhancement, after the core workflow is stable.",
  },
  {
    title: "What we will deliver",
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
      "Start with the right questions, authorised evidence, and a shared definition of quality.",
    tasks: [
      "Agree analyst journeys, report templates, indicator definitions, and acceptance criteria.",
      "Inventory company, industry, peer, and VAM evidence; trial one sample and define source-location records.",
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
      "Turn documents into structured records without losing the path back to the original.",
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
      "Connect verified numbers to repeatable calculations and a first evidence-linked report.",
    tasks: [
      "Implement comparable-basis QoQ/YoY calculations, missing-period handling, and anomaly rules.",
      "By 15 December, demonstrate the one-company multi-quarter upload-to-export workflow, including updates after a source correction.",
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
      "Place company performance in context and make every risk finding reviewable.",
    tasks: [
      "Integrate piloted industry changes, sector/stage peer matching, positions, and ranking movements.",
      "Connect the four risk categories with explicit evidence requirements and missing-data states.",
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
      "Measure what is correct, understand what fails, and refine the experience with reviewers.",
    tasks: [
      "Use prepared held-out companies/periods and reference samples to compare baseline parsing with LLM extraction.",
      "Check sources, units, reporting bases, calculations, risk errors, and report consistency.",
      "Conduct approved reviewer evaluation in parallel with access-isolation, version-invalidation, and recovery tests. Complete essential fixes by 16 March.",
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
      "Freeze, verify, document, and demonstrate a complete and reproducible system.",
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
    date: "28 Oct 2026 · 15:00",
    title: "Ethics submission",
    text: "Participant work follows the required approval.",
  },
  {
    date: "5 Nov 2026 · 15:00",
    title: "Team website",
    text: "Project information and non-confidential examples.",
  },
  {
    date: "10 Dec 2026 · 15:00",
    title: "Interim report",
    text: "Baseline evidence, architecture, risks, and next steps.",
  },
  {
    date: "30 Mar 2027",
    title: "Development complete",
    text: "Release, final report, documentation, and demo ready.",
  },
  {
    date: "1 Apr 2027 · 15:00",
    title: "Final submission",
    text: "Team final report and software; verify access and receipts.",
  },
];

export const strengths = [
  {
    title: "Experience at the source.",
    text: "Yun Xin’s PDF extraction and benchmark-based document-model selection complement Ziqian XIONG’s model implementation and comparative experiments.",
    tags: ["Document understanding", "Model evaluation"],
  },
  {
    title: "Analysis you can check.",
    text: "Ziqian ZHANG’s annotation and JSON experience supports reference samples. Yue WU’s programming and technical analysis supports reviewed calculations and documented risk rules.",
    tags: ["Reference data", "Reproducibility"],
  },
  {
    title: "A connected application.",
    text: "Our React/Flask projects, MySQL application experience, SQL and web foundations, and CI/CD skills span verification interfaces, structured storage, integration, and deployment.",
    tags: ["Full-stack foundations", "Reliable delivery"],
  },
  {
    title: "Curiosity with a method.",
    text: "A shared interest in AI and finance is backed by weekly integration reviews during concentrated development, brief asynchronous check-ins during the lighter period, early demonstrations, and paired checks. Jinyao LU and Ziqian XIONG will coordinate domain feedback on definitions, templates, and interpretations.",
    tags: ["Domain validation", "Team ownership"],
  },
];
