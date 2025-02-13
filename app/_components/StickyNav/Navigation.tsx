'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

const Navigation: FC = () => {
  const { setTheme, theme } = useTheme();

  const pathname = usePathname();

  const menuArr = [
    { path: '/projects', name: 'Projects' },
    { path: '/blog', name: 'Blog' },
    { path: '/about', name: 'About' },
  ];

  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <>
      <div className="self-center text-right gap-8 hidden md:flex">
        <a
          href={'/'}
          className={`cursor-pointer hover:text-primary ${
            pathname === '/' && 'font-bold text-primary'
          }`}
        >
          Home
        </a>
        {menuArr.map((item, idx) => (
          <a
            href={item.path}
            key={idx}
            className={`cursor-pointer hover:text-primary ${
              pathname.includes(item.path) && 'font-bold text-primary'
            }`}
          >
            {item.name}
          </a>
        ))}
        <button id="theme-toggle" onClick={handleThemeChange}>
          <div className="dark:hidden">🌙</div>
          <div className="hidden dark:block">☀️</div>
        </button>
      </div>
    </>
  );
};

export default Navigation;
