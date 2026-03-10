import { motion } from 'framer-motion';
import type { Experience } from '../../services/linkedin';
import {
  formatExperiencePeriod,
  calculateDuration,
} from '../../services/linkedin';

interface Props {
  experiences: Experience[];
}

export default function Timeline({ experiences }: Props) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-neon-blue/30 to-transparent" />

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${exp.startDate}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative pl-12 md:pl-20"
          >
            {/* Timeline dot */}
            <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-midnight-950 shadow-lg shadow-violet-500/30" />

            {/* Card */}
            <div className="group glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-500">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {exp.title}
                  </h3>
                  <p className="text-violet-400 font-medium text-sm">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span className="text-midnight-300 text-xs font-mono">
                    {formatExperiencePeriod(exp.startDate, exp.endDate)}
                  </span>
                  <span className="text-midnight-400 text-xs">
                    {calculateDuration(exp.startDate, exp.endDate)} ·{' '}
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-midnight-200 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
