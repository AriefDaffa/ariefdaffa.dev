'use client';

import { useState, type FC } from 'react';

import ProjectCard from '@/app/(menu)/projects/_components/ProjectList/ProjectCard';
import Modal from '@/app/_components/Modal';
import ProjectFilter from './ProjectFilter';
import ProjectModal from './ProjectModal';
import type { IBlog } from '@/app/_types/IBlog';

interface ProjectListProps {
  projects: IBlog[];
}

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<IBlog>();
  const [selectedTags, setSelectedTags] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (data: IBlog) => {
    setSelectedProject(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectTags = (tags: string) => {
    if (!selectedTags.includes(tags.toLowerCase())) {
      setSelectedTags(tags);
    }
  };

  return (
    <div className="">
      <ProjectFilter
        tags={['ReactJS', 'NextJS', 'NodeJS', 'Laravel']}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        handleSelectTags={handleSelectTags}
      />
      <div className="grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-4">
        {projects
          .filter((item) =>
            item.tags.join(', ').includes(selectedTags.toLowerCase())
          )
          .map((item, idx) => (
            <ProjectCard
              key={idx}
              index={idx}
              card={item}
              hovered={hovered}
              setHovered={setHovered}
              handleOpenModal={handleOpenModal}
            />
          ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ProjectModal selectedProject={selectedProject} />
      </Modal>
    </div>
  );
};

export default ProjectList;
