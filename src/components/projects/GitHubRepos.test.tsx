import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GitHubRepos from '../../components/projects/GitHubRepos';
import type { GitHubRepo } from '../../services/github';

const mockRepos: GitHubRepo[] = [
  {
    id: 1,
    name: 'test-repo',
    full_name: 'user/test-repo',
    description: 'A test repository',
    html_url: 'https://github.com/user/test-repo',
    homepage: null,
    stargazers_count: 42,
    forks_count: 5,
    language: 'TypeScript',
    topics: ['react', 'typescript'],
    updated_at: new Date().toISOString(),
    created_at: '2024-01-01T00:00:00Z',
    fork: false,
    archived: false,
  },
  {
    id: 2,
    name: 'another-repo',
    full_name: 'user/another-repo',
    description: 'Another project',
    html_url: 'https://github.com/user/another-repo',
    homepage: 'https://example.com',
    stargazers_count: 128,
    forks_count: 10,
    language: 'Python',
    topics: ['python', 'api'],
    updated_at: new Date().toISOString(),
    created_at: '2024-06-01T00:00:00Z',
    fork: false,
    archived: false,
  },
];

describe('GitHubRepos', () => {
  it('renders repository names', () => {
    render(<GitHubRepos repos={mockRepos} />);
    expect(screen.getByText('test-repo')).toBeInTheDocument();
    expect(screen.getByText('another-repo')).toBeInTheDocument();
  });

  it('renders repository descriptions', () => {
    render(<GitHubRepos repos={mockRepos} />);
    expect(screen.getByText('A test repository')).toBeInTheDocument();
    expect(screen.getByText('Another project')).toBeInTheDocument();
  });

  it('renders language labels', () => {
    render(<GitHubRepos repos={mockRepos} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  it('renders star counts', () => {
    render(<GitHubRepos repos={mockRepos} />);
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('128')).toBeInTheDocument();
  });

  it('renders topics', () => {
    render(<GitHubRepos repos={mockRepos} />);
    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('typescript')).toBeInTheDocument();
  });

  it('links to GitHub repositories', () => {
    render(<GitHubRepos repos={mockRepos} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute(
      'href',
      'https://github.com/user/test-repo',
    );
  });
});
