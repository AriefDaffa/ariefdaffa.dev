import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Timeline from '../../components/timeline/Timeline';
import type { Experience } from '../../services/linkedin';

const mockExperiences: Experience[] = [
  {
    company: 'Acme Corp',
    title: 'Senior Developer',
    location: 'Remote',
    startDate: '2023-01',
    endDate: null,
    description: 'Building amazing things.',
    technologies: ['React', 'TypeScript'],
  },
  {
    company: 'Startup Inc',
    title: 'Full Stack Developer',
    location: 'New York',
    startDate: '2021-06',
    endDate: '2022-12',
    description: 'Built web applications.',
    technologies: ['Vue.js', 'Node.js'],
  },
];

describe('Timeline', () => {
  it('renders all experience entries', () => {
    render(<Timeline experiences={mockExperiences} />);
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  });

  it('renders company names', () => {
    render(<Timeline experiences={mockExperiences} />);
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
    expect(screen.getByText('Startup Inc')).toBeInTheDocument();
  });

  it('renders descriptions', () => {
    render(<Timeline experiences={mockExperiences} />);
    expect(screen.getByText('Building amazing things.')).toBeInTheDocument();
    expect(screen.getByText('Built web applications.')).toBeInTheDocument();
  });

  it('renders technology tags', () => {
    render(<Timeline experiences={mockExperiences} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });
});
