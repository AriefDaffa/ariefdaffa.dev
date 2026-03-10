import { motion } from 'framer-motion';
import type { SkillCategory } from '../../services/linkedin';

interface Props {
  skills: SkillCategory[];
}

const categoryIcons: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  'DevOps & Cloud': '☁️',
  'Tools & Practices': '🛠️',
};

const categoryColors: Record<string, string> = {
  Frontend: 'from-violet-500/20 to-neon-pink/20',
  Backend: 'from-neon-blue/20 to-violet-500/20',
  'DevOps & Cloud': 'from-neon-cyan/20 to-neon-blue/20',
  'Tools & Practices': 'from-violet-400/20 to-neon-cyan/20',
};

const skillColors: Record<string, string> = {
  Frontend:
    'border-violet-500/30 hover:border-violet-400/60 hover:bg-violet-500/10',
  Backend:
    'border-neon-blue/30 hover:border-neon-blue/60 hover:bg-neon-blue/10',
  'DevOps & Cloud':
    'border-neon-cyan/30 hover:border-neon-cyan/60 hover:bg-neon-cyan/10',
  'Tools & Practices':
    'border-violet-400/30 hover:border-violet-300/60 hover:bg-violet-400/10',
};

export default function SkillsGrid({ skills }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((category, idx) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative rounded-2xl glass p-6 hover:bg-white/[0.07] transition-all duration-500"
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
              categoryColors[category.category] ||
              'from-violet-500/10 to-neon-blue/10'
            } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          <div className="relative z-10">
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">
                {categoryIcons[category.category] || '💡'}
              </span>
              <h3 className="text-white font-semibold text-lg">
                {category.category}
              </h3>
              <span className="ml-auto text-midnight-400 text-xs font-mono">
                {category.items.length} skills
              </span>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.1 + skillIdx * 0.05,
                  }}
                  className={`px-3 py-1.5 rounded-lg border text-sm text-midnight-100 transition-all duration-300 cursor-default ${
                    skillColors[category.category] ||
                    'border-glass-border hover:border-violet-400/60'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
