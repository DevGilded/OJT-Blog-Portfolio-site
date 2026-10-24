import type { WeeklyLog } from "../types/content";

export const weeklyLogs: WeeklyLog[] = [
  // Week 1
  {
    week: 1,
    slug: "week-1-orientation-and-setup",
    title: "Orientation, Environment Setup, and Requirements Gathering",
    dateRange: "Jun 15 – Jun 19, 2026",
    startDate: "2026-06-15",
    minutes: 2007,
    readTime: "4 min read",
    summary:
      "Commenced the OJT by attending the institutional assembly and ICT orientation. Focused on technical onboarding, workstation setup, and requirements gathering with the Internal Audit office to lay the groundwork for the iAudit system.",
    highlights: [
      "ICT Orientation",
      "Requirements Gathering",
      "ERD & Flow Diagrams",
      "Workstation Setup",
    ],
    tags: ["Onboarding", "Laravel", "Vue 3", "System Design"],
    thumbnailUrl: "/week-1/tuesday1.jpg",
    thumbnailAlt:
      "Initial requirements gathering meeting with the Internal Audit office",
    body: [
      "The practicum officially began on Monday with the weekly institutional assembly. Afterward, we focused on organizing our designated software team workstations and kicking off our technical onboarding. Since I use Arch Linux, configuring the local development environment—specifically getting Laravel and Vue.js running smoothly across our machines—took some dedicated effort.",
      "Tuesday and Wednesday were heavily focused on understanding the client's needs. We had a formal orientation with the ICT Department Head and our supervisors (Ma'am Cara and Sir Tuga) before formalizing our development team. We then conducted our first requirements-gathering interview with the Internal Audit office. After analyzing their Baseline Assessment Result (BAR) and Internal Control Questionnaire (ICQ) templates, I started drafting the system's Entity-Relationship Diagram (ERD).",
      "By Thursday, I finalized the ERD and presented it alongside our Level 0 and Level 2 flow diagrams to our supervisor. We received great actionable feedback to iterate on before the long weekend, as Friday was an observed regional holiday.",
    ],
    tasks: [
      "Prepared software team workstations and completed technical onboarding for Laravel and Vue.js",
      "Attended the institutional assembly and formal ICT Department orientation",
      "Conducted requirements gathering and analyzed BAR/ICQ documentation with Internal Audit",
      "Designed and presented the system's ERD and Level 0/2 flow diagrams for preliminary review",
    ],
    reflection:
      "Understanding the exact requirements and modeling the database (ERD) before writing a single line of code provides a clear roadmap. The initial planning phases are just as important as the development itself.",
    photos: [
      {
        id: "monday1",
        src: "/week-1/flag1.jpg",
        alt: "NEMSU Main Campus students and interns attending the Monday morning flag ceremony",
        caption:
          "Day 1 — Officially starting the practicum by attending the weekly institutional assembly and flag ceremony.",
        date: "Jun 15, 2026",
        category: "Event",
      },
      {
        id: "monday2",
        src: "/week-1/flag2.jpg",
        alt: "Interns lined up during the institutional assembly at NEMSU",
        caption:
          "Day 1 — Gathering with fellow students and interns before heading to the ICT department to prepare our workstations.",
        date: "Jun 15, 2026",
        category: "Event",
      },
      {
        id: "tuesday1",
        src: "/week-1/tuesday1.jpg",
        alt: "Interns meeting with the Internal Audit staff in their office",
        caption:
          "Day 2 — Conducting our first requirements-gathering interview with the Internal Audit office to define system functionalities.",
        date: "Jun 16, 2026",
        category: "Meeting",
      },
      {
        id: "tuesday2",
        src: "/week-1/tuesday2.jpg",
        alt: "Discussion between the software development team and the Internal Audit staff",
        caption:
          "Day 2 — Listening to the client explain their current workflow to understand how we can best automate the auditing process.",
        date: "Jun 16, 2026",
        category: "Meeting",
      },
      {
        id: "tuesday3",
        src: "/week-1/tuesday3.jpg",
        alt: "Interns taking notes during the system requirements briefing",
        caption:
          "Day 2 — Taking detailed notes on the project scope and client expectations.",
        date: "Jun 16, 2026",
        category: "Meeting",
      },
      {
        id: "tuesday4",
        src: "/week-1/tuesday4.jpg",
        alt: "Laptop screen displaying a Google Sheets timeline for the ICQ Tracking System",
        caption:
          "Day 2 — Reviewing the project timeline and development milestones established by our immediate supervisor.",
        date: "Jun 16, 2026",
        category: "Planning",
      },
      {
        id: "wednesday1",
        src: "/week-1/wednesday1.jpg",
        alt: "Intern working on a laptop displaying database relationship diagrams",
        caption:
          "Day 3 — Drafting the initial Entity-Relationship Diagram (ERD) based on the Baseline Assessment Result (BAR) and ICQ templates.",
        date: "Jun 17, 2026",
        category: "Development",
      },
      {
        id: "wednesday2",
        src: "/week-1/wednesday2.jpg",
        alt: "Software development interns collaborating on the system's database schema",
        caption:
          "Day 3 — Collaborating with the team to properly structure the database and integrate the Laravel backend with Vue.js.",
        date: "Jun 17, 2026",
        category: "Development",
      },
      {
        id: "thursday1",
        src: "/week-1/thursday1.jpg",
        alt: "Intern presenting the completed ERD to the immediate supervisor",
        caption:
          "Day 4 — Presenting the finalized ERD and Level 0/2 flow diagrams to the supervisor for preliminary review and feedback.",
        date: "Jun 18, 2026",
        category: "Presentation",
      },
      {
        id: "thursday2",
        src: "/week-1/thursday2.jpg",
        alt: "Intern finalizing system flow diagrams on a laptop before the presentation",
        caption:
          "Day 4 — Making final adjustments to the system process flows based on actionable feedback from the supervisors.",
        date: "Jun 18, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "/week-1/friday1.jpg",
        alt: "Placeholder representing the regional holiday",
        caption:
          "Day 5 — Official regional holiday. No practicum hours were rendered to close out the first week.",
        date: "Jun 19, 2026",
        category: "Holiday",
      },
    ],
  },

  // Week 2
  {
    week: 2,
    slug: "week-2-initial-prototyping-and-middleware",
    title: "Git Initialization, UI/UX Wireframing, and ICQ Prototyping",
    dateRange: "Jun 22 – Jun 26, 2026",
    startDate: "2026-06-22",
    minutes: 2417,
    readTime: "4 min read",
    summary:
      "Established the project's version control by initializing the Git repository and focused heavily on UI/UX development using Figma. Completed the ICQ self-assessment module and initiated Administrator interface wireframing.",
    highlights: [
      "Git Initialization",
      "Figma Wireframing",
      "ICQ Module UI",
      "Admin Interface",
    ],
    tags: ["UI/UX", "Figma", "Git", "Prototyping"],
    thumbnailUrl: "/week-2/monday2.jpg",
    thumbnailAlt: "Software development team collaborating on UI/UX wireframes",
    body: [
      "This week marked the beginning of our structured development phase. I established the project's version control by initializing the Git repository. The team then heavily focused on UI/UX wireframe development, integrating our initial team design drafts from Magic Pattern and migrating them into the Figma desktop application to leverage its full interactive capabilities.",
      "By mid-week, our primary objective was the Internal Control Questionnaire (ICQ) module. I completed the user interface design for the self-assessment module and refined the form with interactive elements. Once the user-facing side was stabilized, we conducted a workflow review and prioritized drafting the Administrator interfaces to accelerate overall development progress.",
      "We wrapped up the week by finalizing the user-facing UI designs for both the ICQ and Baseline Assessment Result (BAR) modules. I also prepared our bi-weekly practicum progress reports for advisor approval and initiated the Administrator interface wireframing (dashboard and form creator) while strategically scheduling a supervisor review for the following week to ensure full team alignment.",
    ],
    tasks: [
      "Initialized the project's Git repository for version control",
      "Migrated and refined UI/UX wireframes using the Figma desktop application and Magic Pattern",
      "Completed user interface designs for the ICQ and BAR self-assessment modules",
      "Initiated wireframing for the Administrator dashboard and form creator interfaces",
    ],
    reflection:
      "Transitioning from rough drafts to interactive Figma prototypes early on ensures the whole team shares a unified vision before writing the complex backend logic.",
    photos: [
      {
        id: "monday1",
        src: "/week-2/monday1.jpg",
        alt: "NEMSU Main Campus flag ceremony for the second week of practicum",
        caption:
          "Day 6 — Starting the second week by attending the Monday morning flag ceremony.",
        date: "Jun 22, 2026",
        category: "Event",
      },
      {
        id: "monday2",
        src: "/week-2/monday2.jpg",
        alt: "Interns setting up their Git repository and opening Figma on their laptops",
        caption:
          "Day 6 — Initializing our Git repository and starting UI/UX wireframing using Figma and Magic Pattern.",
        date: "Jun 22, 2026",
        category: "Development",
      },
      {
        id: "monday3",
        src: "/week-2/monday3.jpg",
        alt: "Close up of an intern designing system layouts on a laptop",
        caption:
          "Day 6 — Translating initial concepts and Magic Pattern drafts into digital wireframes.",
        date: "Jun 22, 2026",
        category: "Development",
      },
      {
        id: "monday4",
        src: "/week-2/monday4.jpg",
        alt: "The software development team collaborating on UI/UX interfaces at their workstation",
        caption:
          "Day 6 — Discussing the layout and user flow for the primary system components.",
        date: "Jun 22, 2026",
        category: "Collaboration",
      },
      {
        id: "tuesday1",
        src: "/week-2/tuesday1.jpg",
        alt: "Interns migrating design assets to the Figma desktop application",
        caption:
          "Day 7 — Migrating our project assets to the Figma desktop app to utilize its cost-free interactive design capabilities.",
        date: "Jun 23, 2026",
        category: "Development",
      },
      {
        id: "tuesday2",
        src: "/week-2/tuesday2.jpg",
        alt: "Team members reviewing Figma wireframes on multiple laptop screens",
        caption:
          "Day 7 — Reviewing interactive elements and refining the user experience workflow.",
        date: "Jun 23, 2026",
        category: "Development",
      },
      {
        id: "wednesday1",
        src: "/week-2/wednesday1.jpg",
        alt: "Intern focused on designing the ICQ self-assessment module in Figma",
        caption:
          "Day 8 — Focusing strictly on the user interface for the Internal Control Questionnaire (ICQ) self-assessment module.",
        date: "Jun 24, 2026",
        category: "Development",
      },
      {
        id: "wednesday2",
        src: "/week-2/wednesday2.jpg",
        alt: "Software team working quietly at their designated workstations on frontend designs",
        caption:
          "Day 8 — Deep work session to complete the ICQ self-assessment UI components.",
        date: "Jun 24, 2026",
        category: "Workplace",
      },
      {
        id: "wednesday3",
        src: "/week-2/wednesday3.jpg",
        alt: "Interns discussing the layout of the UI elements",
        caption:
          "Day 8 — Aligning the frontend Figma wireframes with our previously established ERD.",
        date: "Jun 24, 2026",
        category: "Collaboration",
      },
      {
        id: "thursday1",
        src: "/week-2/thursday1.jpg",
        alt: "Team refining the interactive design elements of the ICQ forms",
        caption:
          "Day 9 — Refining the ICQ form and adding interactive design elements to simulate user flow.",
        date: "Jun 25, 2026",
        category: "Development",
      },
      {
        id: "thursday2",
        src: "/week-2/thursday2.jpg",
        alt: "Intern drafting the Administrator dashboard wireframes on a laptop",
        caption:
          "Day 9 — Shifting priority to draft the Administrator dashboard and form creator interfaces to accelerate progress.",
        date: "Jun 25, 2026",
        category: "Development",
      },
      {
        id: "thursday3",
        src: "/week-2/thursday3.jpg",
        alt: "Team continuing Administrator interface development",
        caption:
          "Day 9 — Finalizing the Administrator workflow designs and conducting a workflow review.",
        date: "Jun 25, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "",
        alt: "Placeholder for Friday documentation",
        caption:
          "Day 10 — Prepared bi-weekly practicum progress reports and scheduled supervisor reviews. (No photos taken)",
        date: "Jun 26, 2026",
        category: "Documentation",
      },
    ],
  },

  // Week 3
  {
    week: 3,
    slug: "week-3-core-features-and-form-foundations",
    title: "Environment Initialization, Git Workflow, and iLab Support",
    dateRange: "Jun 29 – Jul 03, 2026",
    startDate: "2026-06-29",
    minutes: 2413,
    readTime: "5 min read",
    summary:
      "Finalized the local Arch Linux development environments and successfully initialized the foundational Laravel and Vue.js application on a local server. Established strict Git version control workflows and advanced backend programming with a focus on system middleware and authentication.",
    highlights: [
      "Arch Linux Setup",
      "Git Workflow Integration",
      "Backend Authentication",
      "iLab Technical Support",
    ],
    tags: ["Laravel", "Arch Linux", "Git", "Backend"],
    thumbnailUrl: "/week-3/monday2.jpg",
    thumbnailAlt:
      "Intern presenting the deferred weekly progress report to department staff",
    body: [
      "The week began with optimizing our local Arch Linux development environments following an OS migration, alongside advancing our administrative UI/UX wireframes. I presented our deferred weekly progress report to the department staff to gather critical feedback, which guided our official transition into the development phase. By Tuesday, we successfully initialized and deployed the foundational Laravel and Vue.js application on a local server.",
      "Mid-week, I focused on establishing the team's Git version control workflow, defining strict branching conventions and implementing a mandatory pull request and code review process for repository management. I also initiated backend development, specifically focusing on Laravel authentication, while adjusting the project workload to maintain momentum despite some team staffing shortages.",
      "On Friday, we took a slight detour from the main project to provide logistical and technical support during the institutional Student Information System (SIS) program coordinators' meeting at the iLab, which involved configuring Mac workstations. We wrapped up the week by advancing backend programming for system middleware integration and decided to defer our scheduled weekly presentation to target a fully functional local build for the following week.",
    ],
    tasks: [
      "Configured local Arch Linux development environments and deployed the foundational Laravel/Vue.js application.",
      "Established a strict Git workflow with branching conventions and mandatory pull requests.",
      "Initiated backend development focusing on Laravel authentication and system middleware integration.",
      "Provided technical and logistical support by configuring Mac workstations at the iLab for the SIS coordinators' meeting.",
    ],
    reflection:
      "Establishing strict version control rules like mandatory pull requests early on prevents a lot of merge conflicts later. It forces the team to review each other's code and maintain a clean repository.",
    photos: [
      {
        id: "monday1",
        src: "/week-3/monday1.jpg",
        alt: "Interns taking a group photo outside the building after the assembly",
        caption:
          "Day 11 — Attending the weekly institutional assembly before heading to the office.",
        date: "Jun 29, 2026",
        category: "Event",
      },
      {
        id: "monday2",
        src: "/week-3/monday2.jpg",
        alt: "Intern presenting the iAudit system progress on a large screen",
        caption:
          "Day 11 — Presenting the deferred weekly progress report to department staff to gather critical feedback.",
        date: "Jun 29, 2026",
        category: "Presentation",
      },
      {
        id: "tuesday1",
        src: "/week-3/tuesday1.jpg",
        alt: "Software team working on their laptops at the workstation",
        caption:
          "Day 12 — Configuring the local Arch Linux development environments to ensure operational readiness.",
        date: "Jun 30, 2026",
        category: "Development",
      },
      {
        id: "tuesday2",
        src: "/week-3/tuesday2.jpg",
        alt: "Intern taking a selfie with teammates in the ICT office",
        caption:
          "Day 12 — Supporting the team in deploying the foundational Laravel and Vue.js application on a local server.",
        date: "Jun 30, 2026",
        category: "Workplace",
      },
      {
        id: "wednesday1",
        src: "/week-3/wednesday1.jpg",
        alt: "Team members smiling for a group selfie at their desks",
        caption:
          "Day 13 — Finalizing local development environment configurations and beginning backend development.",
        date: "Jul 1, 2026",
        category: "Workplace",
      },
      {
        id: "wednesday2",
        src: "/week-3/wednesday2.jpg",
        alt: "Laptop screen showing a GitHub pull request for the iAudit repository",
        caption:
          "Day 13 — Establishing the team's Git version control workflow with mandatory pull requests and code reviews.",
        date: "Jul 1, 2026",
        category: "Development",
      },
      {
        id: "thursday1",
        src: "/week-3/thursday1.jpg",
        alt: "Interns focused on coding at their shared desk",
        caption:
          "Day 14 — Adjusting the project workload and monitoring development progress despite team staffing shortages.",
        date: "Jul 2, 2026",
        category: "Development",
      },
      {
        id: "thursday2",
        src: "/week-3/thursday2.jpg",
        alt: "Team collaborating and writing code together",
        caption:
          "Day 14 — Continuing essential configurations on the Linux development environments to maintain project continuity.",
        date: "Jul 2, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "/week-3/friday1.jpg",
        alt: "iLab room with Mac workstations prepared for the SIS meeting",
        caption:
          "Day 15 — Providing logistical and technical support at the iLab for the Student Information System (SIS) program coordinators' meeting.",
        date: "Jul 3, 2026",
        category: "Support",
      },
      {
        id: "friday2",
        src: "/week-3/friday2.jpg",
        alt: "Interns debugging code on their laptops",
        caption:
          "Day 15 — Advancing backend programming with a focus on system middleware integration.",
        date: "Jul 3, 2026",
        category: "Development",
      },
      {
        id: "friday3",
        src: "/week-3/friday3.jpg",
        alt: "Team members working closely to finish the weekly deliverables",
        caption:
          "Day 15 — Deferring the scheduled weekly presentation to target a fully functional local build for the subsequent week.",
        date: "Jul 3, 2026",
        category: "Development",
      },
    ],
  },

  // Week 4
  {
    week: 4,
    slug: "week-4-frontend-ui-and-first-demo",
    title: "Frontend Navigation, AI Assistance, and the Internal Audit Demo",
    dateRange: "Jul 06 – Jul 10, 2026",
    startDate: "2026-07-06",
    minutes: 2461,
    readTime: "5 min read",
    summary:
      "Developed dynamic frontend navigation and a multi-stage ICQ carousel UI. Leveraged AI tools to rapidly build the administrative portal, culminating in a successful system demonstration that secured a recommendation to scale the project into an academic thesis.",
    highlights: [
      "Dynamic Breadcrumbs",
      "ICQ Carousel UI",
      "Admin Portal",
      "Thesis Recommendation",
    ],
    tags: ["Vue 3", "Frontend", "UI/UX", "AI Tools"],
    milestone:
      "Secured a formal recommendation to transition the system into an academic thesis.",
    thumbnailUrl: "/week-4/friday1.jpg",
    thumbnailAlt:
      "Intern presenting the functional system build to the Internal Audit department",
    body: [
      "This week focused heavily on frontend UI/UX development. I designed a modern navigation app bar with dynamic breadcrumbs and replaced the standard dashboard with a streamlined 'Overview' landing page. Despite some team members being reassigned to support the institution's freshman enrollment operations, I maintained project momentum by engineering a dynamic, multi-stage carousel interface for the ICQ forms to track assessment progress.",
      "As Friday's presentation deadline approached, I utilized AI-assisted tools to expedite the development of the administrative portal. This allowed me to successfully implement role-based middleware, a comprehensive analytics dashboard, and an ICQ management module featuring dynamic drag-and-drop form creation and cross-campus publishing.",
      "The week concluded with a critical two-hour system demonstration for the Internal Audit department. After presenting the functional build, we received strategic stakeholder feedback and a formal recommendation to scale the iAudit system into an academic thesis, marking a massive milestone for the project",
    ],
    tasks: [
      "Designed dynamic breadcrumb routing and a streamlined 'Overview' landing page for the user portal",
      "Engineered a multi-stage carousel interface for ICQ assessments with an expandable search function",
      "Utilized AI tools to expedite the development of the admin dashboard, role-based middleware, and ICQ management CRUD",
      "Co-facilitated a two-hour system demonstration for Internal Audit, resulting in a thesis recommendation",
    ],
    reflection:
      "Relying on AI crunch time gets the job done for strict deadlines, but it introduces technical debt. However, delivering a working prototype opened the door for this project to become my actual thesis.",
    photos: [
      {
        id: "monday1",
        src: "/week-4/monday1.jpg",
        alt: "Interns reviewing the system interface on a large presentation screen",
        caption:
          "Day 16 — Presenting a frontend progress update to the immediate supervisor to secure actionable UI/UX feedback before the main demo",
        date: "Jul 06, 2026",
        category: "Presentation",
      },
      {
        id: "monday2",
        src: "/week-4/monday2.jpg",
        alt: "Interns taking a group selfie at their workstation",
        caption:
          "Day 16 — Taking a quick team photo while beginning our frontend codebase refactoring for the end-user navigation bar.",
        date: "Jul 06, 2026",
        category: "Workplace",
      },
      {
        id: "monday3",
        src: "/week-4/monday3.jpg",
        alt: "Team focused on coding and debugging on their laptops",
        caption:
          "Day 16 — Deep work session designing the modern navigation app bar and integrating user-access controls.",
        date: "Jul 06, 2026",
        category: "Development",
      },
      {
        id: "tuesday1",
        src: "/week-4/tuesday1.jpg",
        alt: "Team members working at the desk while others assist with enrollment",
        caption:
          "Day 17 — Maintaining continuous project momentum on the UI placeholders while team members were reassigned to support freshman enrollment.",
        date: "Jul 07, 2026",
        category: "Development",
      },
      {
        id: "wednesday1",
        src: "/week-4/wednesday1.jpg",
        alt: "Laptop displaying a code editor with an intern working in the background",
        caption:
          "Day 18 — Implementing dynamic breadcrumb navigation and the 'ICQ Folder' module for managing previous submissions.",
        date: "Jul 08, 2026",
        category: "Development",
      },
      {
        id: "thursday1",
        src: "",
        alt: "Placeholder for Thursday documentation",
        caption:
          "Day 19 — Engineered a multi-stage carousel interface for the ICQ to track assessment progress and provided enrollment support. (No photos taken)",
        date: "Jul 09, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "/week-4/friday1.jpg",
        alt: "Interns presenting the iAudit system to the Internal Audit staff",
        caption:
          "Day 20 — Co-facilitating the critical two-hour system demonstration for the Internal Audit department, resulting in the thesis recommendation.",
        date: "Jul 10, 2026",
        category: "Presentation",
      },
      {
        id: "friday2",
        src: "/week-4/friday2.jpg",
        alt: "Intern presenting the functional system build at a desk",
        caption:
          "Day 20 — Presenting the functional build to the immediate supervisor for rapid UI adjustments prior to the stakeholder presentation.",
        date: "Jul 10, 2026",
        category: "Presentation",
      },
    ],
  },

  // Week 5
  {
    week: 5,
    slug: "week-5-code-refactoring-and-database",
    title: "Frontend Refactoring, Database Configuration, and Scope Creep",
    dateRange: "Jul 13 – Jul 17, 2026",
    startDate: "2026-07-13",
    minutes: 1968,
    readTime: "4 min read",
    summary:
      "Executed comprehensive frontend refactoring to unify the navigation app bar and optimize UI components. Transitioned to backend database configuration and successfully mitigated scope creep regarding user authentication before taking a sick leave.",
    highlights: ["Codebase Clean-up", "Unified Appbar", "Laravel Artisan"],
    tags: ["Refactoring", "Laravel", "Database"],
    thumbnailUrl: "/week-5/tuesday2.jpg",
    thumbnailAlt:
      "Intern taking a selfie with the team working in the background",
    body: [
      "The week began with a comprehensive refactoring of the frontend architecture. I focused on optimizing the end-user interface components for improved reusability and scalability in preparation for the upcoming administrative portal updates. By Tuesday, I committed these updates to the repository and engineered a unified, role-based navigation app bar. I also generalized existing UI elements into reusable data tables using Vue.js starter-kit components and AI development tools.",
      "Mid-week, I finalized the administrative form interfaces and transitioned to backend database configuration. I utilized `php artisan` commands to manage schema modifications and prepare the form-specific tables. While initiating backend development for the user authentication module, I encountered project scope creep; however, I actively mitigated it to maintain alignment with our core system requirements and re-prioritized the workflow strictly on foundational database configurations.",
      "By Friday, I fell ill with a cold and had to report absent, rendering zero practicum hours for the day. I submitted a sick leave notification to our OJT Advisor, Mr. Tuga, acknowledging the critical need to resume project development promptly for the following week's system demonstration.",
    ],
    tasks: [
      "Refactored the frontend architecture to optimize end-user UI components for reusability",
      "Engineered a unified, role-based navigation app bar and reusable data tables",
      "Configured backend databases and managed schema modifications using php artisan",
      "Mitigated scope creep in the authentication module and submitted a formal sick leave notification",
    ],
    reflection:
      "Scope creep is dangerous. I need to focus strictly on foundational requirements before adding nice-to-have features like custom authentication.",
    photos: [
      {
        id: "monday1",
        src: "/week-5/monday1.jpg",
        alt: "Interns smiling for a photo outside the campus building",
        caption:
          "Day 21 — Attending the mandatory weekly flag-raising ceremony before starting the comprehensive codebase refactor.",
        date: "Jul 13, 2026",
        category: "Event",
      },
      {
        id: "tuesday1",
        src: "/week-5/tuesday1.jpg",
        alt: "Software team working together at their workstation desk",
        caption:
          "Day 22 — Working on the administrative portal refactor and engineering a unified, role-based navigation app bar.",
        date: "Jul 14, 2026",
        category: "Development",
      },
      {
        id: "tuesday2",
        src: "/week-5/tuesday2.jpg",
        alt: "Intern taking a selfie while teammates focus on their laptops",
        caption:
          "Day 22 — Utilizing Vue.js starter-kit components to optimize UI consistency across the dashboard.",
        date: "Jul 14, 2026",
        category: "Development",
      },
      {
        id: "tuesday3",
        src: "/week-5/tuesday3.jpg",
        alt: "Team focused on coding and debugging on their laptop screens",
        caption:
          "Day 22 — Generalizing existing UI elements into reusable data tables with the assistance of AI development tools.",
        date: "Jul 14, 2026",
        category: "Development",
      },
      {
        id: "wednesday1",
        src: "",
        alt: "Placeholder for Wednesday documentation",
        caption:
          "Day 23 — Transitioned to backend configuration, utilizing php artisan commands to manage schema modifications. (No photos taken)",
        date: "Jul 15, 2026",
        category: "Development",
      },
      {
        id: "thursday1",
        src: "",
        alt: "Placeholder for Thursday documentation",
        caption:
          "Day 24 — Mitigated project scope creep regarding the authentication module and re-prioritized foundational database configurations. (No photos taken)",
        date: "Jul 16, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "",
        alt: "Placeholder for Friday documentation",
        caption:
          "Day 25 — Reported absent due to illness (cold) and submitted a sick leave notification to OJT Advisor Mr. Tuga. (No photos taken)",
        date: "Jul 17, 2026",
        category: "Leave",
      },
    ],
  },

  // Week 6
  {
    week: 6,
    slug: "week-6-system-revamp",
    title: "The Great Revamp: Manual Code Migration and Organization UI",
    dateRange: "Jul 20 – Jul 24, 2026",
    startDate: "2026-07-20",
    minutes: 2090,
    readTime: "5 min read",
    summary:
      "Executed a complete manual migration and architectural revamp of the system to reduce reliance on AI-generated code. Finalized UI/UX optimizations for administrative interfaces and engineered a robust organization management module.",
    highlights: [
      "Project Revamp",
      "Manual Code Migration",
      "Organization UI",
      "Role Assignment",
    ],
    tags: ["Architecture", "Refactoring", "System Design"],
    milestone:
      "Successfully completed the system structural revamp and eliminated reliance on AI-generated crutches.",
    thumbnailUrl: "/week-6/wednesday4.jpg",
    thumbnailAlt:
      "Team reviewing the refactored system architecture on a large presentation screen",
    body: [
      "The week started by establishing a comprehensive development backlog prioritizing critical database schemas and the end-to-end ICQ assessment workflow. I made the decision to initiate a full architectural revamp by manually migrating and refactoring the codebase. This was crucial to reduce our reliance on AI-generated solutions and significantly improve our own code comprehension and system maintainability.",
      "Tuesday through Thursday were dedicated entirely to this restructuring process. We prioritized architectural integrity over introducing new features, working intensively to solidify the system's foundational structure. While it felt like we weren't adding visible features, this foundational refactoring phase was brought to near completion by Thursday afternoon.",
      "By Friday, the revamp was highly successful. We finalized the setup and UI/UX optimizations for the miscellaneous administrative interfaces. I engineered a robust organization management module enabling the dynamic creation of campuses and the assignment of multiple units. We also implemented user-role assignment workflows to map personnel accurately, perfectly setting the stage for core form module development next week.",
    ],
    tasks: [
      "Established a comprehensive development backlog for critical schemas and ICQ workflows",
      "Executed a full manual codebase migration to reduce AI reliance and improve maintainability",
      "Finalized setup and UI/UX optimizations for miscellaneous administrative interfaces",
      "Engineered an organization management module for dynamic campus and unit assignments",
      "Implemented user-role assignment workflows for newly registered personnel",
    ],
    reflection:
      "Rebuilding from scratch without AI crutches is painful and slow, but it is absolutely necessary for long-term maintainability and deep technical understanding.",
    photos: [
      {
        id: "monday1",
        src: "/week-6/monday1.jpg",
        alt: "Interns taking a group selfie while working on their laptops",
        caption:
          "Day 26 — Initiating the full architectural revamp and manually migrating the codebase to reduce reliance on AI tools.",
        date: "Jul 20, 2026",
        category: "Development",
      },
      {
        id: "monday2",
        src: "/week-6/monday2.jpg",
        alt: "Team members smiling at their desk during the codebase refactoring phase",
        caption:
          "Day 26 — Establishing our development backlog and prioritizing critical database schemas for the ICQ workflow.",
        date: "Jul 20, 2026",
        category: "Planning",
      },
      {
        id: "tuesday1",
        src: "/week-6/tuesday1.jpg",
        alt: "Interns working at their desks to restructure the project architecture",
        caption:
          "Day 27 — Dedicating the entire shift to restructuring the project architecture without introducing any new functionalities.",
        date: "Jul 21, 2026",
        category: "Development",
      },
      {
        id: "tuesday2",
        src: "/week-6/tuesday2.jpg",
        alt: "Software team coding and reviewing files on multiple monitors",
        caption:
          "Day 27 — Continuing the manual migration process to improve overall code clarity and system maintainability.",
        date: "Jul 21, 2026",
        category: "Development",
      },
      {
        id: "wednesday1",
        src: "/week-6/wednesday1.jpg",
        alt: "Intern wearing headphones typing code into a Linux terminal",
        caption:
          "Day 28 — Sustaining intensive efforts in project refactoring and repository optimization.",
        date: "Jul 22, 2026",
        category: "Development",
      },
      {
        id: "wednesday2",
        src: "/week-6/wednesday2.jpg",
        alt: "Team members focused on their laptops during a deep work session",
        caption:
          "Day 28 — Prioritizing architectural integrity to solidify the system's foundational structure over new feature development.",
        date: "Jul 22, 2026",
        category: "Development",
      },
      {
        id: "wednesday3",
        src: "/week-6/wednesday3.jpg",
        alt: "Team reviewing the refactored system architecture on a large presentation screen",
        caption:
          "Day 28 — Reviewing the refactored backend logic and database schemas together on the main display.",
        date: "Jul 22, 2026",
        category: "Review",
      },
      {
        id: "wednesday4",
        src: "/week-6/wednesday4.jpg",
        alt: "Interns discussing structural changes in front of a presentation monitor",
        caption:
          "Day 28 — Discussing the structural changes to ensure team alignment during the architectural revamp.",
        date: "Jul 22, 2026",
        category: "Collaboration",
      },
      {
        id: "thursday1",
        src: "",
        alt: "Placeholder for Thursday documentation",
        caption:
          "Day 29 — Continued intensive work on the system revamp, bringing the foundational refactoring phase to near completion. (No photos taken)",
        date: "Jul 23, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "",
        alt: "Placeholder for Friday documentation",
        caption:
          "Day 30 — Finalized UI/UX optimizations for administrative interfaces and engineered the organization management module. (No photos taken)",
        date: "Jul 24, 2026",
        category: "Development",
      },
    ],
  },

  // Week 7
  {
    week: 7,
    slug: "week-7-form-crud-and-rescheduling",
    title: "Laravel CRUD Battles and Managing Expectations",
    dateRange: "Jul 27 – Jul 31, 2026",
    startDate: "2026-07-27",
    minutes: 2015,
    readTime: "4 min read",
    summary:
      "Focused entirely on backend Laravel CRUD operations for the form module. Encountered major bugs leading to a presentation reschedule and a cancelled overtime shift due to a power outage.",
    highlights: ["Form CRUD", "Backend Debugging", "Stakeholder Communication"],
    tags: ["Laravel", "CRUD", "Backend", "Debugging"],
    thumbnailUrl: "/week-7/wednesday1.jpg",
    thumbnailAlt: "A Laravel backend code snippet showing form creation logic",
    body: [
      "The focus this week was strictly on the Form CRUD (Create, Read, Update, Delete) operations. I started the week working remotely due to an unnotified sick leave, pushing through preliminary development tasks to establish the core form management module. On Tuesday and Wednesday, I concentrated heavily on backend development, researching and implementing the CRUD operations within the Laravel framework while actively debugging technical challenges during integration.",
      "The UI for the form module was looking great, but the persistent backend data integration issues were a mess of bugs. In light of the impending system presentation scheduled for Thursday, I evaluated our current development progress and made the difficult call to coordinate with my supervisor to formally request the Internal Audit department to postpone the demo to next week.",
      "To ensure a fully functional and stable build, I proactively requested and secured approval for a Saturday overtime shift to expedite the resolution of the pending technical integrations. However, an unforeseen facility power outage forced me to cancel, resulting in zero practicum hours for the day and deferring all pending tasks to the following work week. Sometimes things just don't go as planned.",
    ],
    tasks: [
      "Initiated preliminary development tasks for core Form CRUD operations while operating remotely",
      "Finalized the visual design and frontend UI components for the form module",
      "Actively debugged persistent backend data integration issues within the Laravel framework",
      "Coordinated with supervisors to reschedule the stakeholder presentation to ensure a stable build",
    ],
    reflection:
      "It is better to be transparent about technical blockers and ask for an extension than to present a broken system to stakeholders.",
    photos: [
      {
        id: "monday1",
        src: "",
        alt: "Placeholder for Monday documentation",
        caption:
          "Day 31 — Operated remotely due to illness, focusing on preliminary CRUD operations for the form module. (No photos taken)",
        date: "Jul 27, 2026",
        category: "Remote Work",
      },
      {
        id: "tuesday1",
        src: "",
        alt: "Placeholder for Tuesday documentation",
        caption:
          "Day 32 — Concentrated on implementing Laravel CRUD operations but encountered technical integration challenges. (No photos taken)",
        date: "Jul 28, 2026",
        category: "Development",
      },
      {
        id: "wednesday1",
        src: "/week-7/wednesday1.jpg",
        alt: "Intern wearing headphones, actively coding and debugging at the workstation",
        caption:
          "Day 33 — Dedicated the shift to actively debugging and refining the backend Laravel form CRUD operations.",
        date: "Jul 29, 2026",
        category: "Debugging",
      },
      {
        id: "thursday1",
        src: "",
        alt: "Placeholder for Thursday documentation",
        caption:
          "Day 34 — Finalized frontend UI components while evaluating project readiness ahead of the impending presentation. (No photos taken)",
        date: "Jul 30, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "/week-7/friday1.jpg",
        alt: "Team members working on their laptops in a quiet office environment",
        caption:
          "Day 35 — Coordinated with supervisors to postpone the system demonstration and secured approval for weekend overtime.",
        date: "Jul 31, 2026",
        category: "Planning",
      },
      {
        id: "saturday1",
        src: "",
        alt: "Placeholder for Saturday documentation",
        caption:
          "Day 36 — Unable to render planned overtime due to a facility power outage, deferring pending tasks to the next week. (No photos taken)",
        date: "Aug 01, 2026",
        category: "Event",
      },
    ],
  },

  // Week 8
  {
    week: 8,
    slug: "week-8-cross-campus-testing-demo",
    title: "Cross-Campus Testing Prep and the Thesis Transition",
    dateRange: "Aug 03 – Aug 07, 2026",
    startDate: "2026-08-03",
    minutes: 2200,
    readTime: "5 min read",
    summary:
      "Successfully presented the rescheduled system demonstration to the Internal Audit department and proposed transitioning iAudit into an academic thesis. Finalized the Internal Audit administrative interface and advanced the unit head portal for upcoming cross-campus testing.",
    highlights: ["Successful Demo", "Thesis Transition", "Unit Head Portal"],
    tags: ["Presentation", "Milestone", "Full Stack"],
    milestone:
      "Successfully proposed transitioning the iAudit system into a formal academic thesis project with a target milestone to deliver a cross-campus testable build by August 25th.",
    thumbnailUrl: "/week-8/monday1.jpg",
    thumbnailAlt:
      "Intern presenting the system to the Internal Audit staff in their office",
    body: [
      "Monday was a pivotal day as we proceeded with the rescheduled system demonstration for the Internal Audit department. We transparently communicated our development timelines and current technical limitations, which successfully led to proposing the transition of the iAudit system into a formal academic thesis project. We established a firm milestone to deliver a fully functional, test-ready build for multi-campus evaluation by the 25th of the month.",
      "With the milestone solidified alongside our supervisor (Ma'am Cara), I dedicated the middle of the week to rigorous backend debugging of the core form module. Leveraging an improved technical understanding of the backend architecture, I was able to resolve persistent technical challenges and significantly accelerate the development workflow.",
      "By Thursday, I successfully finalized the functional integration for the Internal Audit administrative interface and transitioned my focus to building the unit head portal. The week concluded on Friday with a joint system demonstration where we presented the newly refactored architecture and the end-user form submission functionalities, transparently discussing the technical complexities and codebase migration with stakeholders.",
    ],
    tasks: [
      "Conducted the rescheduled system demonstration for the Internal Audit department",
      "Successfully proposed transitioning the iAudit project into a formal academic thesis",
      "Finalized the functional integration for the Internal Audit administrative interface",
      "Developed the unit head portal to allow end-users to answer and submit assigned forms",
    ],
    reflection:
      "Clear communication about technical debt builds stakeholder trust. Securing this system as my thesis gives all the late nights and refactoring a long-term purpose.",
    photos: [
      {
        id: "monday1",
        src: "/week-8/monday1.jpg",
        alt: "Intern presenting the iAudit system on a large screen to the Internal Audit staff",
        caption:
          "Day 36 — Proceeding with the rescheduled system demonstration for the Internal Audit department to communicate current development progress.",
        date: "Aug 03, 2026",
        category: "Presentation",
      },
      {
        id: "monday2",
        src: "/week-8/monday2.jpg",
        alt: "Interns listening to stakeholder feedback during the Internal Audit presentation",
        caption:
          "Day 36 — Documenting actionable stakeholder feedback and successfully proposing the transition of iAudit into an academic thesis.",
        date: "Aug 03, 2026",
        category: "Presentation",
      },
      {
        id: "tuesday1",
        src: "",
        alt: "Placeholder for Tuesday documentation",
        caption:
          "Day 37 — Aligned with the project team and Ma'am Cara to solidify the cross-campus testing milestone and resumed rigorous debugging. (No photos taken)",
        date: "Aug 04, 2026",
        category: "Development",
      },
      {
        id: "wednesday1",
        src: "/week-8/wednesday1.jpg",
        alt: "Intern focused on typing and actively debugging the core form module",
        caption:
          "Day 38 — Dedicating the entire shift to the continued development and rigorous troubleshooting of the core form module.",
        date: "Aug 05, 2026",
        category: "Debugging",
      },
      {
        id: "wednesday2",
        src: "/week-8/wednesday2.jpg",
        alt: "Software team working collaboratively at a shared desk with multiple laptops",
        caption:
          "Day 38 — Actively working alongside the team to resolve persistent technical challenges required for the cross-campus testing phase.",
        date: "Aug 05, 2026",
        category: "Development",
      },
      {
        id: "thursday1",
        src: "/week-8/thursday1.jpg",
        alt: "Laptop screen displaying backend troubleshooting steps for Laravel cache clearing",
        caption:
          "Day 39 — Finalizing the functional integration for the administrative interface and transitioning focus to building the unit head portal.",
        date: "Aug 06, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "/week-8/friday1.jpg",
        alt: "Intern presenting the refactored system architecture to a stakeholder at his desk",
        caption:
          "Day 40 — Concluding the week with a joint system demonstration, presenting the refactored architecture and discussing technical complexities.",
        date: "Aug 07, 2026",
        category: "Presentation",
      },
    ],
  },

  // Week 9
  {
    week: 9,
    slug: "week-9-final-hours-and-graduation",
    title: "UI Polish, Extra Hours, and the Finish Line",
    dateRange: "Aug 10 – Aug 14, 2026",
    startDate: "2026-08-10",
    minutes: 2467,
    readTime: "4 min read",
    summary:
      "Refined UI/UX designs as the mandatory OJT hours concluded, volunteered extra time to ensure system stability, and attended the ICT-sponsored practicum completion party.",
    highlights: ["UI/UX Polish", "Hours Completed", "Graduation Party"],
    tags: ["UI/UX", "Completion", "Culture"],
    milestone:
      "Officially fulfilled the mandatory OJT practicum requirements with an excess of 10 hours and 3 minutes.",
    thumbnailUrl: "/week-9/friday1.jpg",
    thumbnailAlt:
      "Interns sitting at their workstation on the final day of the practicum",
    body: [
      "This week was all about crossing the finish line and polishing our deliverables. With my mandatory OJT hours nearing completion, I spent the first couple of days refining and optimizing the UI/UX design of the form creation module to ensure the final deliverable was as polished as possible.",
      "Mid-week, alongside steady system refinements, we held an intra-team coordination meeting with fellow interns to plan logistics and organize contributions for an upcoming ICT-sponsored practicum completion celebration. By Thursday, I officially hit my required hour mark; however, I voluntarily elected to render a full-day shift to maintain project momentum and secure the overall stability of the ongoing system deliverables.",
      "Friday was purely a celebration. We attended the ICT-sponsored practicum completion party alongside department staff and fellow interns to formally conclude the on-the-job training program. It served as a rewarding ceremonial conclusion to the internship, acknowledging that the time spent on-site was voluntary and well beyond the already fulfilled mandatory requirements.",
    ],
    tasks: [
      "Refined and optimized the UI/UX design of the form creation module for a polished final deliverable",
      "Maintained system stability and continuous development momentum as required hours concluded",
      "Coordinated logistics and contributions with fellow interns for the completion celebration",
      "Voluntarily rendered an additional full-day shift beyond the mandatory practicum requirements",
    ],
    reflection:
      "Wrapping up a major project requires just as much dedication as starting one. Seeing the system stabilize as my required hours ended was the perfect conclusion.",
    photos: [
      {
        id: "monday1",
        src: "",
        alt: "Placeholder for Monday documentation",
        caption:
          "Day 41 — Dedicated the shift to refining and optimizing the UI/UX design of the form creation module. (No photos taken)",
        date: "Aug 10, 2026",
        category: "Development",
      },
      {
        id: "tuesday1",
        src: "",
        alt: "Placeholder for Tuesday documentation",
        caption:
          "Day 42 — Maintained steady momentum on project development and system refinements nearing the completion of mandatory hours. (No photos taken)",
        date: "Aug 11, 2026",
        category: "Development",
      },
      {
        id: "wednesday1",
        src: "",
        alt: "Placeholder for Wednesday documentation",
        caption:
          "Day 43 — Participated in an intra-team coordination meeting to plan logistics for the upcoming practicum completion celebration. (No photos taken)",
        date: "Aug 12, 2026",
        category: "Planning",
      },
      {
        id: "thursday1",
        src: "",
        alt: "Placeholder for Thursday documentation",
        caption:
          "Day 44 — Voluntarily rendered a full-day shift beyond required hours to secure overall stability of the system deliverables. (No photos taken)",
        date: "Aug 13, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "/week-9/friday1.jpg",
        alt: "Interns sitting together at their workstation on graduation day",
        caption:
          "Day 45 — Attending the ICT-sponsored practicum completion celebration to formally and ceremonially conclude the on-the-job training program.",
        date: "Aug 14, 2026",
        category: "Event",
      },
    ],
  },
];
