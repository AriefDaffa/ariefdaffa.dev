import { SiMysql, SiSass, SiShadcnui, SiTypescript } from 'react-icons/si';
import { FaReact, FaNodeJs, FaLaravel, FaMarkdown } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from 'react-icons/ri';

import type { FC } from 'react';

interface StackIconProps {
  type: string;
}

const StackIcon: FC<StackIconProps> = ({ type }) => {
  switch (type) {
    case 'typescript':
      return <SiTypescript />;
    case 'reactjs':
      return <FaReact />;
    case 'react':
      return <FaReact />;
    case 'express':
      return <SiExpress />;
    case 'nodejs':
      return <FaNodeJs />;
    case 'tailwind':
      return <RiTailwindCssFill />;
    case 'tailwindcss':
      return <RiTailwindCssFill />;
    case 'laravel':
      return <FaLaravel />;
    case 'nextjs':
      return <RiNextjsFill />;
    case 'mysql':
      return <SiMysql />;
    case 'javascript':
      return <RiJavascriptFill />;
    case 'scss':
      return <SiSass />;
    case 'shadcn':
      return <SiShadcnui />;
    case 'mdx':
      return <FaMarkdown />;
    default:
      return <>{type}</>;
  }
};

export default StackIcon;
