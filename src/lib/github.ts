export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  topics: string[];
}

export interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    action?: string;
    ref?: string;
    ref_type?: string;
    commits?: Array<{ message: string }>;
  };
}

const GITHUB_USER = 'juandelaf1';

let cachedRepos: GitHubRepo[] | null = null;
let cachedEvents: GitHubEvent[] | null = null;

export async function fetchRepos(): Promise<GitHubRepo[]> {
  if (cachedRepos) return cachedRepos;

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=10&type=source`,
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    );

    if (!res.ok) return [];

    cachedRepos = await res.json();
    return cachedRepos;
  } catch {
    return [];
  }
}

export async function fetchEvents(): Promise<GitHubEvent[]> {
  if (cachedEvents) return cachedEvents;

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/events?per_page=10`,
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    );

    if (!res.ok) return [];

    cachedEvents = await res.json();
    return cachedEvents;
  } catch {
    return [];
  }
}
