'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import Navigation from './Navigation';

const StickyNav = () => {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = navbarRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div>
      <div ref={navbarRef} className="h-0"></div>
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 hidden md:block ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        } shadow-md bg-white dark:bg-black border-b-[1px] dark:border-gray-800`}
      >
        <div className="mx-auto py-4 px-8 w-full max-w-screen-xl flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">/{pathname.split('/')[1]}</h1>
            <div className="text-gray-500 text-sm mt-1">© Arief Daffa 2024</div>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
