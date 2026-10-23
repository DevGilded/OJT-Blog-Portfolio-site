export type WeeklyLog = {
  week: number;
  slug: string;
  title: string;
  dateRange: string;
  startDate: string;
  minutes: number;
  readTime: string;
  summary: string;
  highlights: string[];
  tags: string[];
  milestone?: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  body: string[];
  tasks: string[];
  reflection: string;
};

export type Photo = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  date?: string;
  category?: string;
};

export type NavLink = {
  label: string;
  href: string;
};