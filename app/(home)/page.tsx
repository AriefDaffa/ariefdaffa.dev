'use client';

import Image from 'next/image';
import { motion, useAnimate } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Stars from './_components/Stars';

const Page = () => {
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const delay = (ms: number) => {
    return new Promise((res) => setTimeout(res, ms));
  };

  const textAnimate = async () => {
    await animate(scope.current, { y: 0, opacity: 1 }, { bounce: 0 });
    await delay(500);
    await animate(scope.current, { y: -100, opacity: 0, display: 'none' });
    await animate2(scope2.current, { y: 0, opacity: 1 }, { bounce: 0 });
    await delay(500);
  };

  useEffect(() => {
    textAnimate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-full items-center justify-center overflow-hidden">
      <div className="absolute z-10 size-full flex items-center justify-center">
        <motion.div
          ref={scope}
          initial={{ y: 100, opacity: 0 }}
          className="text-8xl font-semibold absolute m-auto"
        >
          Welcome, traveler
        </motion.div>

        <motion.div
          ref={scope2}
          initial={{ y: 100, opacity: 0 }}
          className="flex gap-6 relative w-full max-w-screen-lg justify-center items-center flex-col lg:flex-row"
        >
          <Image
            src={`/images/logo/logo-${theme ?? 'light'}.png`}
            alt=""
            height={220}
            width={220}
            className="rounded-3xl cursor-pointer z-10"
            style={{
              boxShadow: '0px 0px 30px 10px #F52B1D',
            }}
            onClick={() => setShowMenu(!showMenu)}
          />
          {/* <motion.div
            initial={{ y: -50, opacity: 0 }}
            ref={scope3}
            className="font-bold text-5xl lg:hidden"
          >
            Arief Daffa
          </motion.div>
          <motion.div
            ref={scope4}
            initial={{ x: -100, opacity: 0, width: 0 }}
            className="font-bold text-9xl hidden lg:block"
          >
            Arief Daffa
          </motion.div> */}
          {/* <motion.div className="flex flex-col justify-center">
            <AnimatePresence>
              {!showMenu && (
                <motion.div key="profile" exit={{ opacity: 0 }}>
                  <div className="font-bold text-8xl">Arief Daffa</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div> */}
        </motion.div>
      </div>
      <div className="absolute size-full blur">
        <Stars />
      </div>
    </div>
  );
};

export default Page;
