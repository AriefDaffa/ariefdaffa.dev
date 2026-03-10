export interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string | null;
  image?: string;
  featured?: boolean;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  category: string;
  year: number;
}
