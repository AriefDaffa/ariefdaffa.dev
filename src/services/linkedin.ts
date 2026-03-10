import linkedInData from '../data/linkedin.json';

export interface Experience {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface LinkedInProfile {
  name: string;
  headline: string;
  summary: string;
  location: string;
  profileUrl: string;
  avatarUrl: string;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  certifications: { name: string; issuer: string; date: string }[];
}

export function getLinkedInProfile(): LinkedInProfile {
  return linkedInData as LinkedInProfile;
}

export function formatExperiencePeriod(
  start: string,
  end: string | null,
): string {
  const startDate = new Date(start + '-01');
  const startStr = startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  if (!end) return `${startStr} — Present`;

  const endDate = new Date(end + '-01');
  const endStr = endDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return `${startStr} — ${endStr}`;
}

export function calculateDuration(start: string, end: string | null): string {
  const startDate = new Date(start + '-01');
  const endDate = end ? new Date(end + '-01') : new Date();

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${remainingMonths} mo`;
  if (remainingMonths === 0) return `${years} yr`;
  return `${years} yr ${remainingMonths} mo`;
}
