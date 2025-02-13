/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';

import StackIcon from './StackIcon';
import { cn } from '@/app/_lib/cn';
import { IBlog } from '../../../../../_types/IBlog';

interface ProjectCardProps {
  card: IBlog;
  index: number;
  hovered: number | null;
  setHovered: Dispatch<SetStateAction<number | null>>;
  handleOpenModal?: (data: IBlog) => void;
}

const ProjectCard = ({
  card,
  index,
  hovered,
  setHovered,
  handleOpenModal = () => {},
}: ProjectCardProps) => {
  const [isOpen, setOpen] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <Image
            src={card.imageSrc}
            width={200}
            height={125}
            quality={50}
            layout={'fixed'}
            priority={true}
            alt="hidden image"
          />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn('text-black dark:text-white')}
        >
          <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              'rounded-lg cursor-pointer relative border dark:border-gray-800 overflow-hidden h-60 md:h-80 w-full transition-all duration-300 ease-out flex items-center justify-center'
            )}
            onClick={() => handleOpenModal(card)}
          >
            <div className="flex flex-col gap-2 justify-center items-center">
              <div
                className={cn(
                  'text-xl text-center md:text-2xl font-bold',
                  hovered === index && 'text-primary'
                )}
              >
                {card.title}
              </div>
              <div className="text-center flex gap-2">
                {card.tags.map((item, idx) => (
                  <div className="" key={idx}>
                    <StackIcon type={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="z-[51] [transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                <div
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                >
                  <Image
                    src={card.imageSrc}
                    width={220}
                    height={145}
                    quality={50}
                    layout={'fixed'}
                    priority={true}
                    className="rounded-lg"
                    alt="preview image"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};

export default ProjectCard;
