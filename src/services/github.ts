export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
  fork: boolean;
  archived: boolean;
}

export interface GitHubServiceOptions {
  username: string;
  perPage?: number;
  sort?: 'updated' | 'created' | 'pushed' | 'full_name';
}

const GITHUB_API = 'https://api.github.com';

export async function fetchGitHubRepos(
  options: GitHubServiceOptions,
): Promise<GitHubRepo[]> {
  const { username, perPage = 30, sort = 'updated' } = options;

  try {
    const response = await fetch(
      `${GITHUB_API}/users/${username}/repos?per_page=${perPage}&sort=${sort}&type=owner`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'ariefdaffa.dev',
        },
      },
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return getFallbackRepos();
    }

    const repos: GitHubRepo[] = await response.json();
    return repos.filter((repo) => !repo.fork && !repo.archived);
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return getFallbackRepos();
  }
}

function getFallbackRepos(): GitHubRepo[] {
  return [
    {
      id: 1,
      name: 'ariefdaffa.dev',
      full_name: 'AriefDaffa/ariefdaffa.dev',
      description:
        'My personal developer portfolio built with Astro, Three.js, and TailwindCSS',
      html_url: 'https://github.com/AriefDaffa/ariefdaffa.dev',
      homepage: 'https://ariefdaffa.dev',
      stargazers_count: 0,
      forks_count: 0,
      language: 'TypeScript',
      topics: ['portfolio', 'astro', 'threejs', 'tailwindcss'],
      updated_at: new Date().toISOString(),
      created_at: '2024-01-01T00:00:00Z',
      fork: false,
      archived: false,
    },
    {
      id: 2,
      name: 'byakuya',
      full_name: 'AriefDaffa/byakuya',
      description:
        'A messaging app created using Nextjs and integrated with Elysiajs and websocket',
      html_url: 'https://github.com/AriefDaffa/byakuya',
      homepage: 'https://byakuya.ariefdaffa.dev',
      stargazers_count: 0,
      forks_count: 0,
      language: 'TypeScript',
      topics: ['nextjs', 'elysiajs', 'websocket', 'messaging'],
      updated_at: new Date().toISOString(),
      created_at: '2025-05-10T00:00:00Z',
      fork: false,
      archived: false,
    },
    {
      id: 3,
      name: 'hoshi',
      full_name: 'AriefDaffa/hoshi',
      description:
        'A streaming platform crafted to cater to the appetite of anime enthusiasts worldwide',
      html_url: 'https://github.com/AriefDaffa/hoshi',
      homepage: 'https://hoshi.ariefdaffa.dev',
      stargazers_count: 0,
      forks_count: 0,
      language: 'TypeScript',
      topics: ['react', 'streaming', 'anime', 'shadcn'],
      updated_at: new Date().toISOString(),
      created_at: '2024-10-11T00:00:00Z',
      fork: false,
      archived: false,
    },
    {
      id: 4,
      name: 'si-miku',
      full_name: 'AriefDaffa/si-miku',
      description:
        'A monitoring dashboard for FILKOM UB Management to observe student progress',
      html_url: 'https://github.com/AriefDaffa/si-miku',
      homepage: null,
      stargazers_count: 0,
      forks_count: 0,
      language: 'TypeScript',
      topics: ['react', 'express', 'mysql', 'dashboard'],
      updated_at: new Date().toISOString(),
      created_at: '2024-10-12T00:00:00Z',
      fork: false,
      archived: false,
    },
    {
      id: 5,
      name: 'Lagalio',
      full_name: 'AriefDaffa/Lagalio',
      description:
        'Create the Spotify playlist with a song that the user chooses using the Spotify API',
      html_url: 'https://github.com/AriefDaffa/Lagalio',
      homepage: 'https://lagalio.vercel.app/',
      stargazers_count: 0,
      forks_count: 0,
      language: 'TypeScript',
      topics: ['react', 'spotify', 'playlist', 'api'],
      updated_at: new Date().toISOString(),
      created_at: '2024-10-11T00:00:00Z',
      fork: false,
      archived: false,
    },
    {
      id: 6,
      name: 'pokedex',
      full_name: 'AriefDaffa/pokedex',
      description: 'A Pokedex application built with React and TypeScript',
      html_url: 'https://github.com/AriefDaffa/pokedex',
      homepage: 'https://pokedex.ariefdaffa.dev',
      stargazers_count: 0,
      forks_count: 0,
      language: 'TypeScript',
      topics: ['react', 'typescript', 'pokedex', 'tailwindcss'],
      updated_at: new Date().toISOString(),
      created_at: '2024-10-11T00:00:00Z',
      fork: false,
      archived: false,
    },
  ];
}

export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Go: '#00ADD8',
    Rust: '#dea584',
    Java: '#b07219',
    'C++': '#f34b7d',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Lua: '#000080',
    Shell: '#89e051',
    HTML: '#e34c26',
    CSS: '#663399',
    Vue: '#41b883',
    Svelte: '#ff3e00',
  };
  return colors[language] || '#8b949e';
}
