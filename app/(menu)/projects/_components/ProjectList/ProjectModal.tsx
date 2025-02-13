import Image from 'next/image';
import type { FC } from 'react';

import type { IBlog } from '@/app/_types/IBlog';
import { formatDate } from '@/app/_utils/formatDate';
import StackIcon from './ProjectCard/StackIcon';
import { FaGithub } from 'react-icons/fa';

interface ProjectModalProps {
  selectedProject?: IBlog;
}

const ProjectModal: FC<ProjectModalProps> = ({ selectedProject }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-[500px] w-full">
        <Image
          src={selectedProject?.imageSrc || ''}
          alt=""
          width={800}
          height={500}
          className="w-full rounded-t-md overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4 px-4">
        <div className="text-4xl font-bold">{selectedProject?.title}</div>
        <div className="text-gray-600 text-sm">
          <a
            href={selectedProject?.url}
            target="_blank"
            className="hover:text-primary"
          >
            {selectedProject?.url}
          </a>{' '}
          | {formatDate(selectedProject?.date)}
        </div>
        <div className="text-center flex gap-2">
          {selectedProject?.tags.map((item, idx) => (
            <div className="" key={idx}>
              <StackIcon type={item} />
            </div>
          ))}
        </div>
        <div className="">{selectedProject?.desc}</div>
        {selectedProject?.repo && (
          <a
            href={selectedProject?.repo}
            target="_blank"
            className="text-white flex gap-2 items-center px-4 py-2 rounded-lg bg-gray-800 cursor-pointer w-full max-w-[200px] hover:brightness-75"
          >
            <FaGithub />
            Github Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
