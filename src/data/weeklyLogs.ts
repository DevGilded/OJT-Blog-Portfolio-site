import type { WeeklyLog } from "../types/content";

export const weeklyLogs: WeeklyLog[] = [
  {
    week: 1,
    slug: "week-1-orientation-and-setup",
    title: "Orientation, Environment Setup, and iAudit Introduction",
    dateRange: "Jul 13 – Jul 17, 2026",
    startDate: "2026-07-13",
    minutes: 2400,
    readTime: "4 min read",
    summary:
      "Began the OJT at the university ICT department. Focused on orientation, setting up the local development environment, and getting introduced to the iAudit project scope.",
    highlights: [
      "OJT Orientation",
      "Dev Environment Setup",
      "Project Briefing",
    ],
    tags: ["Onboarding", "Laravel", "Vue 3", "Setup"],
    thumbnailUrl: "/thumbnails/week-1.jpg",
    thumbnailAlt:
      "Initial setup of a dual-monitor coding environment running Arch Linux",
    body: [
      "The first week was all about getting integrated into the ICT department. We had our orientation with Ma'am Cara and Sir Tuga, who laid out the expectations and requirements for our OJT hours.",
      "I spent a significant portion of the week setting up my local development environment. Because I use Arch Linux, getting the exact stack configured with Docker and ensuring compatibility for Laravel, Vue 3, and Inertia.js took some tinkering.",
      "We were officially introduced to the iAudit system—an internal control questionnaire and auditing management tool. My teammates (Seth, Joemar, and Aljon) and I divided the initial research and discussed how to structure the database.",
    ],
    tasks: [
      "Completed ICT department onboarding and OJT orientation",
      "Configured local Linux development environment for Laravel and Vue 3",
      "Reviewed the project scope and requirements for the iAudit system",
      "Held initial planning meetings with teammates Seth, Joemar, and Aljon",
    ],
    reflection:
      "Setting up the environment properly from day one saves hours of headaches later. It’s exciting to finally start working on a real-world system for the university.",
  },
  {
    week: 2,
    slug: "week-2-initial-prototyping-and-middleware",
    title: "Diving into Code: Prototyping and Role-Based Middleware",
    dateRange: "Jul 20 – Jul 24, 2026",
    startDate: "2026-07-20",
    minutes: 2400,
    readTime: "4 min read",
    summary:
      "Started writing the actual application code, focusing on the initial prototype, establishing role-based middleware, and separating the admin and user portals.",
    highlights: ["Prototyping", "Role-Based Middleware", "Portal Separation"],
    tags: ["Development", "Inertia.js", "Middleware", "Authentication"],
    thumbnailUrl: "/thumbnails/week-2.jpg",
    thumbnailAlt:
      "Code snippet demonstrating role-based middleware routing in Laravel",
    body: [
      "This week, development officially began. We hit the ground running by generating the foundational Laravel routes and setting up Inertia.js to connect our backend with the Vue 3 frontend.",
      "My primary task was establishing the role-based middleware. iAudit requires strict access control, so I had to ensure that internal auditors, unit heads, and standard users had completely separate portals and permissions.",
      "We relied quite a bit on AI tools during this phase to quickly scaffold the boilerplate code and get a working prototype up and running. It felt fast, but I started noticing some structural complexities.",
    ],
    tasks: [
      "Scaffolded the base Laravel and Vue 3/Inertia application",
      "Implemented role-based middleware for access control",
      "Created distinct routing for the Admin and User portals",
      "Utilized AI tools for rapid code scaffolding and prototyping",
    ],
    reflection:
      "Using AI to generate boilerplate is incredibly fast, but I need to make sure I actually understand the underlying architecture it creates.",
  },
  {
    week: 3,
    slug: "week-3-core-features-and-form-foundations",
    title: "Building Out Core Features and Form Foundations",
    dateRange: "Jul 27 – Jul 31, 2026",
    startDate: "2026-07-27",
    minutes: 2400,
    readTime: "5 min read",
    summary:
      "Expanded the application's core administrative features, designed the preliminary database schemas for the forms, and prepared for the first system demonstration.",
    highlights: ["Core Features", "Database Schema", "Demo Preparation"],
    tags: ["Backend", "Database", "CRUD", "UI/UX"],
    thumbnailUrl: "/thumbnails/week-3.jpg",
    thumbnailAlt: "A wireframe of the internal control questionnaire layout",
    body: [
      "Week 3 was heavily focused on the core administrative and user-side features. We needed to show tangible progress, so I started building out the basic UI elements for the organization and campus management modules.",
      "The hardest part was visualizing how the multi-stage ICQ forms would actually map to the database. I drafted the preliminary schemas for how questions, categories, and answers would be stored.",
      "By Friday, we were rushing to stitch the frontend UI components together with our backend logic to prepare for our first major demonstration with the Internal Audit department scheduled for the following week.",
    ],
    tasks: [
      "Developed initial administrative UI components",
      "Drafted preliminary database schemas for the ICQ forms",
      "Integrated frontend form components with backend controllers",
      "Prepared the staging environment for the upcoming stakeholder demo",
    ],
    reflection:
      "Building features quickly is good, but doing it under a time crunch is starting to reveal cracks in the AI-generated code structure. A refactor might be necessary soon.",
  },
  {
    week: 4,
    slug: "week-4-frontend-ui-and-first-demo",
    title: "Dynamic UI, AI Assistance, and the First Internal Audit Demo",
    dateRange: "Aug 3 – Aug 7, 2026",
    startDate: "2026-08-03",
    minutes: 2400,
    readTime: "5 min read",
    summary:
      "Built dynamic frontend navigation and a carousel-style ICQ form UI. Used AI tools to meet a strict deadline for the first Internal Audit presentation, resulting in a thesis recommendation.",
    highlights: [
      "Dynamic Breadcrumbs",
      "ICQ Carousel UI",
      "Internal Audit Demo",
    ],
    tags: ["Vue 3", "Frontend", "UI/UX", "AI Tools"],
    milestone: "Presented the initial build to the Internal Audit department.",
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
    minutes: 1920,
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
    minutes: 2400,
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
    minutes: 1920,
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
    minutes: 2400,
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
    minutes: 2400,
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
