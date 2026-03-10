export interface BlogCardProps {
  title: string;
  description: string;
  pubDate: Date;
  tags: string[];
  slug: string;
  body?: string;
  featured?: boolean;
}
