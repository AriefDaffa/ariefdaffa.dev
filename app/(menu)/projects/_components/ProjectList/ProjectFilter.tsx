'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Dispatch, FC, SetStateAction } from 'react';

import { cn } from '@/app/_lib/cn';

interface ProjectFilterProps {
  selectedTags: string;
  tags: string[];
  setSelectedTags: Dispatch<SetStateAction<string>>;
  handleSelectTags: (item: string) => void;
}

const ProjectFilter: FC<ProjectFilterProps> = ({
  tags,
  selectedTags,
  setSelectedTags,
  handleSelectTags,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center gap-4 py-8 flex-wrap relative">
      <div
        className={cn(
          'py-1 px-4 rounded-full cursor-pointer hover:bg-primary hover:text-white',
          selectedTags.length === 0 && 'bg-primary text-white'
        )}
        onClick={() => setSelectedTags('')}
      >
        Show all
      </div>
      {tags.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            'py-1 px-4 rounded-full cursor-pointer relative z-0',
            selectedTags.indexOf(item) > -1 && 'bg-primary text-white'
          )}
          onClick={() => handleSelectTags(item)}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 -z-10 h-full w-full bg-primary block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  // transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  // transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.span className="z-20">{item}</motion.span>
        </div>
      ))}
    </div>
  );
};

export default ProjectFilter;
