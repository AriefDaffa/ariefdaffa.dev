import { Metadata } from 'next';
import type { FC } from 'react';

import { getAllProjects } from '@/app/_lib/projectApi';
import ProjectLists from './_components/ProjectList';

export const metadata: Metadata = {
  title: 'Project List | Arief Daffa Personal Website',
  description: 'Created by using Next.js and Tailwindcss',
};

const Page: FC = () => {
  const projects = getAllProjects();

  return (
    <div className="w-full flex">
      <div className={`w-full max-w-screen-xl mx-auto px-4 `}>
        <ProjectLists projects={projects} />
      </div>
    </div>
  );
};

export default Page;
