import type { Photo } from "../types/content";

export const galleryCategories = [
  "All",
  "Workplace",
  "Team",
  "Design",
  "Milestones",
];

export const galleryPhotos: Photo[] = [
  {
    id: "orientation",
    src: "/flag-1",
    alt: "Holding my new company ID on orientation day",
    caption: "Day one — company ID and a very full welcome folder",
    date: "Jun 15, 2026",
    category: "Milestones",
  },
  {
    id: "desk",
    src: "/4d388260-12cd-44a4-8c84-bbbb8bfcfd26.jpg",
    alt: "My desk with the ICQ codebase open on the laptop",
    caption: "Where I spent week two reading the ICQ codebase",
    date: "Jun 23, 2026",
    category: "Workplace",
  },
  {
    id: "pairprog",
    src: "/fe1985e2-e23e-4e76-8fc1-6a03716ee463.jpg",
    alt: "Working through my first Laravel fix",
    caption: "Working through my first Laravel fix at the ICT Unit",
    date: "Jul 1, 2026",
    category: "Team",
  },
  {
    id: "laptop",
    src: "/bfff54dd-aeef-4fa7-a468-fac08df84e54.jpg",
    alt: "Git history on screen during the first deploy",
    caption: "My commits going out in the Thursday release",
    date: "Jul 9, 2026",
    category: "Milestones",
  },
  {
    id: "figma",
    src: "/6269a85b-642c-4184-9784-61ef4a7ab895.jpg",
    alt: "Working on the ICQ form wireframes in Figma",
    caption: "Matching the new ICQ form to the Figma mockups",
    date: "Jul 14, 2026",
    category: "Design",
  },
  {
    id: "whiteboard",
    src: "/c3967119-c5c6-4e47-a781-337912c49b2d.jpg",
    alt: "Mapping validation rules on the office whiteboard",
    caption: "Mapping every validation rule before refactoring by hand",
    date: "Jul 21, 2026",
    category: "Design",
  },
  {
    id: "demo",
    src: "/dbef5f3d-a5a5-436a-a7fb-84d91d07b824.jpg",
    alt: "Presenting the rebuilt ICQ form to the team",
    caption: "Demoing the rebuilt form at my mid-term review",
    date: "Jul 30, 2026",
    category: "Team",
  },
  {
    id: "team",
    src: "/cd5bdf74-6088-4422-a1ef-8c20c4fffb40.jpg",
    alt: "Group photo at the NEMSU ICT Building",
    caption: "Last-day photo at the NEMSU ICT Building / Unit",
    date: "Aug 14, 2026",
    category: "Team",
  },
  {
    id: "certificate",
    src: "/certificate.jpg",
    alt: "Certificate of Completion",
    caption: "Certificate of Completion — 333h 58m rendered",
    date: "Aug 14, 2026",
    category: "Milestones",
  },
];

