import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillsGrid from '../../components/skills/SkillsGrid';

const mockSkills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python'],
  },
];

describe('SkillsGrid', () => {
  it('renders all skill categories', () => {
    render(<SkillsGrid skills={mockSkills} />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('renders all skills within categories', () => {
    render(<SkillsGrid skills={mockSkills} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('TailwindCSS')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  it('displays skill count', () => {
    render(<SkillsGrid skills={mockSkills} />);
    expect(screen.getByText('3 skills')).toBeInTheDocument();
    expect(screen.getByText('2 skills')).toBeInTheDocument();
  });
});
