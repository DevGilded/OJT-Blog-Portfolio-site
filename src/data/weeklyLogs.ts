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
      "Established the project's version control by initializing the Git repository and focused heavily on UI/UX development using Figma[cite: 3]. Completed the ICQ self-assessment module and initiated Administrator interface wireframing[cite: 3].",
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
      "This week marked the beginning of our structured development phase. I established the project's version control by initializing the Git repository[cite: 3]. The team then heavily focused on UI/UX wireframe development, integrating our initial team design drafts from Magic Pattern and migrating them into the Figma desktop application to leverage its full interactive capabilities[cite: 3].",
      "By mid-week, our primary objective was the Internal Control Questionnaire (ICQ) module. I completed the user interface design for the self-assessment module and refined the form with interactive elements[cite: 3]. Once the user-facing side was stabilized, we conducted a workflow review and prioritized drafting the Administrator interfaces to accelerate overall development progress[cite: 3].",
      "We wrapped up the week by finalizing the user-facing UI designs for both the ICQ and Baseline Assessment Result (BAR) modules[cite: 3]. I also prepared our bi-weekly practicum progress reports for advisor approval and initiated the Administrator interface wireframing (dashboard and form creator) while strategically scheduling a supervisor review for the following week to ensure full team alignment[cite: 3].",
    ],
    tasks: [
      "Initialized the project's Git repository for version control[cite: 3]",
      "Migrated and refined UI/UX wireframes using the Figma desktop application and Magic Pattern[cite: 3]",
      "Completed user interface designs for the ICQ and BAR self-assessment modules[cite: 3]",
      "Initiated wireframing for the Administrator dashboard and form creator interfaces[cite: 3]",
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
          "Day 6 — Initializing our Git repository and starting UI/UX wireframing using Figma and Magic Pattern[cite: 3].",
        date: "Jun 22, 2026",
        category: "Development",
      },
      {
        id: "monday3",
        src: "/week-2/monday3.jpg",
        alt: "Close up of an intern designing system layouts on a laptop",
        caption:
          "Day 6 — Translating initial concepts and Magic Pattern drafts into digital wireframes[cite: 3].",
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
          "Day 7 — Migrating our project assets to the Figma desktop app to utilize its cost-free interactive design capabilities[cite: 3].",
        date: "Jun 23, 2026",
        category: "Development",
      },
      {
        id: "tuesday2",
        src: "/week-2/tuesday2.jpg",
        alt: "Team members reviewing Figma wireframes on multiple laptop screens",
        caption:
          "Day 7 — Reviewing interactive elements and refining the user experience workflow[cite: 3].",
        date: "Jun 23, 2026",
        category: "Development",
      },
      {
        id: "wednesday1",
        src: "/week-2/wednesday1.jpg",
        alt: "Intern focused on designing the ICQ self-assessment module in Figma",
        caption:
          "Day 8 — Focusing strictly on the user interface for the Internal Control Questionnaire (ICQ) self-assessment module[cite: 3].",
        date: "Jun 24, 2026",
        category: "Development",
      },
      {
        id: "wednesday2",
        src: "/week-2/wednesday2.jpg",
        alt: "Software team working quietly at their designated workstations on frontend designs",
        caption:
          "Day 8 — Deep work session to complete the ICQ self-assessment UI components[cite: 3].",
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
          "Day 9 — Refining the ICQ form and adding interactive design elements to simulate user flow[cite: 3].",
        date: "Jun 25, 2026",
        category: "Development",
      },
      {
        id: "thursday2",
        src: "/week-2/thursday2.jpg",
        alt: "Intern drafting the Administrator dashboard wireframes on a laptop",
        caption:
          "Day 9 — Shifting priority to draft the Administrator dashboard and form creator interfaces to accelerate progress[cite: 3].",
        date: "Jun 25, 2026",
        category: "Development",
      },
      {
        id: "thursday3",
        src: "/week-2/thursday3.jpg",
        alt: "Team continuing Administrator interface development",
        caption:
          "Day 9 — Finalizing the Administrator workflow designs and conducting a workflow review[cite: 3].",
        date: "Jun 25, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "",
        alt: "Placeholder for Friday documentation",
        caption:
          "Day 10 — Prepared bi-weekly practicum progress reports and scheduled supervisor reviews[cite: 3]. (No photos taken)",
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
      "Finalized the local Arch Linux development environments and successfully initialized the foundational Laravel and Vue.js application on a local server[cite: 4]. Established strict Git version control workflows and advanced backend programming with a focus on system middleware and authentication[cite: 4].",
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
      "The week began with optimizing our local Arch Linux development environments following an OS migration, alongside advancing our administrative UI/UX wireframes[cite: 4]. I presented our deferred weekly progress report to the department staff to gather critical feedback, which guided our official transition into the development phase[cite: 4]. By Tuesday, we successfully initialized and deployed the foundational Laravel and Vue.js application on a local server[cite: 4].",
      "Mid-week, I focused on establishing the team's Git version control workflow, defining strict branching conventions and implementing a mandatory pull request and code review process for repository management[cite: 4]. I also initiated backend development, specifically focusing on Laravel authentication, while adjusting the project workload to maintain momentum despite some team staffing shortages[cite: 4].",
      "On Friday, we took a slight detour from the main project to provide logistical and technical support during the institutional Student Information System (SIS) program coordinators' meeting at the iLab, which involved configuring Mac workstations[cite: 4]. We wrapped up the week by advancing backend programming for system middleware integration and decided to defer our scheduled weekly presentation to target a fully functional local build for the following week[cite: 4].",
    ],
    tasks: [
      "Configured local Arch Linux development environments and deployed the foundational Laravel/Vue.js application[cite: 4].",
      "Established a strict Git workflow with branching conventions and mandatory pull requests[cite: 4].",
      "Initiated backend development focusing on Laravel authentication and system middleware integration[cite: 4].",
      "Provided technical and logistical support by configuring Mac workstations at the iLab for the SIS coordinators' meeting[cite: 4].",
    ],
    reflection:
      "Establishing strict version control rules like mandatory pull requests early on prevents a lot of merge conflicts later. It forces the team to review each other's code and maintain a clean repository.",
    photos: [
      {
        id: "monday1",
        src: "/week-3/monday1.jpg",
        alt: "Interns taking a group photo outside the building after the assembly",
        caption:
          "Day 11 — Attending the weekly institutional assembly before heading to the office[cite: 4].",
        date: "Jun 29, 2026",
        category: "Event",
      },
      {
        id: "monday2",
        src: "/week-3/monday2.jpg",
        alt: "Intern presenting the iAudit system progress on a large screen",
        caption:
          "Day 11 — Presenting the deferred weekly progress report to department staff to gather critical feedback[cite: 4].",
        date: "Jun 29, 2026",
        category: "Presentation",
      },
      {
        id: "tuesday1",
        src: "/week-3/tuesday1.jpg",
        alt: "Software team working on their laptops at the workstation",
        caption:
          "Day 12 — Configuring the local Arch Linux development environments to ensure operational readiness[cite: 4].",
        date: "Jun 30, 2026",
        category: "Development",
      },
      {
        id: "tuesday2",
        src: "/week-3/tuesday2.jpg",
        alt: "Intern taking a selfie with teammates in the ICT office",
        caption:
          "Day 12 — Supporting the team in deploying the foundational Laravel and Vue.js application on a local server[cite: 4].",
        date: "Jun 30, 2026",
        category: "Workplace",
      },
      {
        id: "wednesday1",
        src: "/week-3/wednesday1.jpg",
        alt: "Team members smiling for a group selfie at their desks",
        caption:
          "Day 13 — Finalizing local development environment configurations and beginning backend development[cite: 4].",
        date: "Jul 1, 2026",
        category: "Workplace",
      },
      {
        id: "wednesday2",
        src: "/week-3/wednesday2.jpg",
        alt: "Laptop screen showing a GitHub pull request for the iAudit repository",
        caption:
          "Day 13 — Establishing the team's Git version control workflow with mandatory pull requests and code reviews[cite: 4].",
        date: "Jul 1, 2026",
        category: "Development",
      },
      {
        id: "thursday1",
        src: "/week-3/thursday1.jpg",
        alt: "Interns focused on coding at their shared desk",
        caption:
          "Day 14 — Adjusting the project workload and monitoring development progress despite team staffing shortages[cite: 4].",
        date: "Jul 2, 2026",
        category: "Development",
      },
      {
        id: "thursday2",
        src: "/week-3/thursday2.jpg",
        alt: "Team collaborating and writing code together",
        caption:
          "Day 14 — Continuing essential configurations on the Linux development environments to maintain project continuity[cite: 4].",
        date: "Jul 2, 2026",
        category: "Development",
      },
      {
        id: "friday1",
        src: "/week-3/friday1.jpg",
        alt: "iLab room with Mac workstations prepared for the SIS meeting",
        caption:
          "Day 15 — Providing logistical and technical support at the iLab for the Student Information System (SIS) program coordinators' meeting[cite: 4].",
        date: "Jul 3, 2026",
        category: "Support",
      },
      {
        id: "friday2",
        src: "/week-3/friday2.jpg",
        alt: "Interns debugging code on their laptops",
        caption:
          "Day 15 — Advancing backend programming with a focus on system middleware integration[cite: 4].",
        date: "Jul 3, 2026",
        category: "Development",
      },
      {
        id: "friday3",
        src: "/week-3/friday3.jpg",
        alt: "Team members working closely to finish the weekly deliverables",
        caption:
          "Day 15 — Deferring the scheduled weekly presentation to target a fully functional local build for the subsequent week[cite: 4].",
        date: "Jul 3, 2026",
        category: "Development",
      },
    ],
  },

  // Week 4
  {
    week: 4,
    slug: "week-4-frontend-ui-and-first-demo",
    title: "Dynamic UI, AI Assistance, and the First Internal Audit Demo",
    dateRange: "Aug 3 – Aug 7, 2026",
    startDate: "2026-08-03",
    minutes: 2461,
    readTime: "5 min read",
    summary:
      "Built dynamic frontend navigation and a carousel-style ICQ form UI. Used AI tools to meet a strict deadline for the first Internal Audit presentation, resulting in a thesis recommendation.",
    highlights: [
      "Dynamic Breadcrumbs",
      "ICQ Carousel UI",
      "Internal Audit Demo",
    ],
    tags: ["Vue 3", "Frontend", "UI/UX", "AI Tools"],
    // milestone: "Presented the initial build to the Internal Audit department.",
    thumbnailUrl: "/thumbnails/week-4.jpg",
    thumbnailAlt: "A modern web navigation app bar with dynamic breadcrumbs",
    body: [
      "This week was all about pushing the frontend. I built a modern navigation app bar with dynamic breadcrumbs so users always know where they are (e.g., Overview > Settings > Profile). I also designed a multi-stage carousel interface for the ICQ forms to make answering assessments more intuitive.",
      "As the Friday deadline approached, I had to rely heavily on AI to rapidly build out the admin portal. I implemented role-based middleware, a dashboard with status cards, and the ICQ management tables just in time.",
      "During the 2-hour presentation to Ma'am Cara and the Internal Audit team, there was a lot of back-and-forth feedback. Because of the system's complexity and potential, they officially suggested turning iAudit into my academic thesis, which was a huge win.",
    ],
    tasks: [
      "Designed dynamic breadcrumb routing for the user portal",
      "Engineered a multi-stage carousel card UI for ICQ assessments",
      "Used AI to rapidly prototype the admin dashboard and form management CRUD",
      "Presented the functional build to the Internal Audit department",
    ],
    reflection:
      "Relying on AI crunch time gets the job done for strict deadlines, but it introduces technical debt. However, delivering a working prototype opened the door for this project to become my actual thesis.",
  },
  {
    week: 5,
    slug: "week-5-code-refactoring-and-database",
    title: "Code Refactoring, Generalization, and Scope Creep",
    dateRange: "Aug 10 – Aug 14, 2026",
    startDate: "2026-08-10",
    minutes: 1968,
    readTime: "4 min read",
    summary:
      "Dedicated to cleaning up the frontend codebase, unifying the navigation bar, and transitioning to backend Laravel database configurations before falling sick.",
    highlights: ["Codebase Clean-up", "Unified Appbar", "Laravel Artisan"],
    tags: ["Refactoring", "Laravel", "Database"],
    thumbnailUrl: "/thumbnails/week-5.jpg",
    thumbnailAlt:
      "A code editor showing generalized Vue components and a unified app bar",
    body: [
      "After the rush of last week, I needed to clean up the code. I spent the first few days refactoring the frontend architecture to make components more reusable. I combined the user and admin navigation bars into a single, role-based component.",
      "Mid-week, I transitioned to backend database configuration, learning how to use php artisan to manage schema modifications. However, I got hit hard by scope creep while trying to implement a custom user login system, which distracted me from the core forms.",
      "By Friday, I caught a bad cold and had to take a sick leave, missing the day completely and pushing my critical database tasks to the following week.",
    ],
    tasks: [
      "Refactored the frontend architecture for reusability",
      "Created a unified, role-based navigation appbar",
      "Configured database schemas using php artisan",
      "Navigated and documented project scope creep regarding authentication",
    ],
    reflection:
      "Scope creep is dangerous. I need to focus strictly on foundational requirements before adding nice-to-have features like custom authentication.",
  },
  {
    week: 6,
    slug: "week-6-system-revamp",
    title: "The Great Revamp: Reducing AI Reliance",
    dateRange: "Aug 17 – Aug 21, 2026",
    startDate: "2026-08-17",
    minutes: 2090,
    readTime: "5 min read",
    summary:
      "Executed a complete manual migration and architectural revamp of the system to reduce reliance on AI-generated code and improve personal comprehension.",
    highlights: ["Project Revamp", "Manual Code Migration", "Organization UI"],
    tags: ["Architecture", "Refactoring", "System Design"],
    milestone:
      "Successfully completed the system structural revamp without AI crutches.",
    thumbnailUrl: "/thumbnails/week-6.jpg",
    thumbnailAlt:
      "Flowchart showing database schemas for organization, user, and forms",
    body: [
      "I realized that relying too much on AI-generated code last week made the system difficult for me to understand and maintain. I made the tough decision to create a completely new project folder and slowly migrate the code over manually.",
      "This took the entire week. While it felt like I wasn't adding new features, I was fundamentally restructuring the project architecture, cleaning up the backend, and mapping out the vital form, organization, and user schemas.",
      "By Friday, the revamp was mostly finished. The miscellaneous pages were working perfectly, allowing admins to dynamically create campuses, assign multiple units, and map user roles accurately.",
    ],
    tasks: [
      "Created a new repository to migrate codebase manually",
      "Designed and mapped the Form, Organization, and User table schemas",
      "Rebuilt the UI/UX for the administrative miscellaneous pages",
      "Implemented dynamic campus and unit assignments",
    ],
    reflection:
      "Rebuilding from scratch without AI crutches is painful and slow, but it is absolutely necessary for long-term maintainability and deep technical understanding.",
  },
  {
    week: 7,
    slug: "week-7-form-crud-and-rescheduling",
    title: "Laravel CRUD Battles and Managing Expectations",
    dateRange: "Aug 24 – Aug 29, 2026",
    startDate: "2026-08-24",
    minutes: 2015,
    readTime: "4 min read",
    summary:
      "Focused entirely on backend Laravel CRUD operations for the form module. Encountered major bugs leading to a presentation reschedule and a cancelled overtime shift.",
    highlights: ["Form CRUD", "Backend Debugging", "Stakeholder Communication"],
    tags: ["Laravel", "CRUD", "Backend", "Debugging"],
    thumbnailUrl: "/thumbnails/week-7.jpg",
    thumbnailAlt: "A Laravel backend code snippet showing form creation logic",
    body: [
      "The focus this week was strictly on the Form CRUD (Create, Read, Update, Delete) operations. I started the week working remotely due to a lingering illness, pushing through Laravel backend documentation to get the logic working.",
      "The UI was looking great, but the backend integration was a mess of bugs. With another presentation scheduled for Thursday, I had to make the difficult call to ask Ma'am Cara to postpone the demo with Internal Audit to next week.",
      "I planned to do a Saturday overtime shift to catch up, but a facility blackout forced me to cancel. Sometimes things just don't go as planned.",
    ],
    tasks: [
      "Initiated core Form CRUD operations in Laravel",
      "Finalized visual design for form creation UI components",
      "Debugged persistent backend data integration issues",
      "Coordinated with supervisors to reschedule the stakeholder presentation",
    ],
    reflection:
      "It is better to be transparent about technical blockers and ask for an extension than to present a broken system to stakeholders.",
  },
  {
    week: 8,
    slug: "week-8-cross-campus-testing-demo",
    title: "Cross-Campus Testing Prep and the Thesis Transition",
    dateRange: "Aug 31 – Sep 4, 2026",
    startDate: "2026-08-31",
    minutes: 2200,
    readTime: "6 min read",
    summary:
      "Finalized the Internal Audit form interfaces, successfully presented the system, solidified the transition to an academic thesis, and completed the unit head portal.",
    highlights: ["Successful Demo", "Thesis Transition", "Unit Head Portal"],
    tags: ["Presentation", "Milestone", "Full Stack"],
    milestone:
      "Approved to transition iAudit into an academic thesis with a target date for cross-campus testing.",
    thumbnailUrl: "/thumbnails/week-8.jpg",
    thumbnailAlt:
      "A successful presentation slide showing the iAudit system architecture",
    body: [
      "Monday was the big day. We presented the current state of the system to Internal Audit. We transparently explained the development delays and the reason for the codebase revamp. They were highly receptive and agreed to our proposal to officially transition the project into our academic thesis.",
      "We left that meeting with a solid milestone: a fully functional, cross-campus testable build by the 25th of the month. ",
      "With renewed energy, I tackled the Form module. Having rebuilt the foundation in Week 6, I finally understood the data flow perfectly. By Friday, I had completed both the internal auditor interface and the unit head portal, allowing end-users to actually answer and submit assigned forms.",
    ],
    tasks: [
      "Presented refactored system architecture to Internal Audit stakeholders",
      "Transitioned the OJT project into an official academic thesis",
      "Finalized backend functionality for Internal Audit form creation",
      "Developed the Unit Head portal for answering and submitting assessments",
    ],
    reflection:
      "Clear communication about technical debt builds stakeholder trust. Securing this system as my thesis gives all the late nights and refactoring a long-term purpose.",
  },
  {
    week: 9,
    slug: "week-9-final-hours-and-graduation",
    title: "UI Polish, Extra Hours, and the Finish Line",
    dateRange: "Sep 7 – Sep 11, 2026",
    startDate: "2026-09-07",
    minutes: 2467,
    readTime: "3 min read",
    summary:
      "Refined UI/UX designs as OJT hours concluded, volunteered extra time to ensure system stability, and attended the ICT-sponsored practicum completion party.",
    highlights: ["UI/UX Polish", "Hours Completed", "Graduation Party"],
    tags: ["UI/UX", "Completion", "Culture"],
    milestone: "Officially completed mandatory OJT practicum hours.",
    thumbnailUrl: "/thumbnails/week-9.jpg",
    thumbnailAlt:
      "A group of student interns celebrating completion at a graduation party",
    body: [
      "This week was all about crossing the finish line. With my mandatory OJT hours nearly complete, I spent my time refining the UI/UX of the form creation module to make sure the final deliverable was as polished as possible.",
      "By Thursday, I officially hit my required hour mark. However, to ensure the system was stable for the upcoming cross-campus testing, I stayed the full day voluntarily.",
      "Friday was a celebration. The ICT department threw a graduation party for all the completing interns. We coordinated logistics, brought food, and celebrated the end of a grueling but incredibly rewarding practicum.",
    ],
    tasks: [
      "Polished UI/UX for the form creation and submission modules",
      "Maintained system stability ahead of upcoming cross-campus testing",
      "Volunteered an additional full-day shift beyond required hours",
      "Organized and attended the ICT intern graduation celebration",
    ],
    reflection:
      "Wrapping up a major project requires just as much dedication as starting one. Seeing the system stabilize as my required hours ended was the perfect conclusion.",
  },
];
