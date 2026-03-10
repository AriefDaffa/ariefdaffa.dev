import { motion } from 'framer-motion';
import { getLanguageColor, type GitHubRepo } from '../../services/github';
import { getRelativeTime } from '../../lib/utils';

interface Props {
  repos: GitHubRepo[];
}

export default function GitHubRepos({ repos }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, idx) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="group p-5 rounded-xl glass hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-0.5"
        >
          {/* Repo name */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <svg
                className="w-4 h-4 text-midnight-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <h3 className="text-white font-semibold text-sm truncate group-hover:text-violet-400 transition-colors">
                {repo.name}
              </h3>
            </div>
            <svg
              className="w-4 h-4 text-midnight-400 group-hover:text-violet-400 shrink-0 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>

          {/* Description */}
          <p className="text-midnight-300 text-xs leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
            {repo.description || 'No description provided.'}
          </p>

          {/* Topics */}
          {repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {repo.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-300 text-[10px] font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          {/* Bottom stats */}
          <div className="flex items-center gap-4 text-midnight-400 text-xs">
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                />
                <span>{repo.language}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span>{repo.stargazers_count}</span>
            </div>
            <span className="ml-auto text-midnight-500">
              {getRelativeTime(new Date(repo.updated_at))}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
