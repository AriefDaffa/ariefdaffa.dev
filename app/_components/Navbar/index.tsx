'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import type { FC } from 'react';

import TitleNav from './TitleNav';
import Navigation from './Navigation';
import DarkTheme from './DarkTheme';

const Navbar: FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleOpenNav = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="screen-full border-b-[1px] dark:border-gray-800 flex-col bg-white dark:bg-black sticky top-0 z-50 md:static md:flex-row md:max-h-1/4">
        <div className="mx-auto flex flex-row z-40">
          <TitleNav />
          <div
            className="px-8 py-6 flex items-center md:hidden"
            onClick={handleOpenNav}
          >
            <GiHamburgerMenu size={20} />
          </div>
          <div className="hidden md:w-1/3 border-t-[1px] md:border-t-0 border-l-[1px] md:flex flex-col dark:border-gray-800">
            <Navigation />
            <DarkTheme />
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: clicked ? 92 : -400 }}
        className="absolute  top-0 border-y-[1px] dark:border-gray-800 z-10 w-full bg-white dark:bg-black md:hidden"
      >
        <Navigation />
        <DarkTheme />
      </motion.div>
    </>
  );
};

export default Navbar;
