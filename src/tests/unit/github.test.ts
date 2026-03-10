import { describe, it, expect, vi } from 'vitest';
import { fetchGitHubRepos, getLanguageColor } from '../../services/github';

describe('fetchGitHubRepos', () => {
  it('returns fallback repos when fetch fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(
      new Error('Network error'),
    );

    const repos = await fetchGitHubRepos({ username: 'testuser' });
    expect(repos.length).toBeGreaterThan(0);
    expect(repos[0]).toHaveProperty('name');
    expect(repos[0]).toHaveProperty('stargazers_count');

    vi.restoreAllMocks();
  });

  it('returns fallback repos on non-200 response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(null, { status: 403 }),
    );

    const repos = await fetchGitHubRepos({ username: 'testuser' });
    expect(repos.length).toBeGreaterThan(0);

    vi.restoreAllMocks();
  });

  it('filters out forks and archived repos', async () => {
    const mockRepos = [
      { id: 1, name: 'repo1', fork: false, archived: false, topics: [] },
      { id: 2, name: 'fork-repo', fork: true, archived: false, topics: [] },
      { id: 3, name: 'archived-repo', fork: false, archived: true, topics: [] },
    ];

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify(mockRepos), { status: 200 }),
    );

    const repos = await fetchGitHubRepos({ username: 'testuser' });
    expect(repos.length).toBe(1);
    expect(repos[0].name).toBe('repo1');

    vi.restoreAllMocks();
  });
});

describe('getLanguageColor', () => {
  it('returns correct color for known languages', () => {
    expect(getLanguageColor('TypeScript')).toBe('#3178c6');
    expect(getLanguageColor('Python')).toBe('#3572A5');
    expect(getLanguageColor('Go')).toBe('#00ADD8');
  });

  it('returns default color for unknown languages', () => {
    expect(getLanguageColor('UnknownLang')).toBe('#8b949e');
  });
});
