'use client';

import Astronaut from '@/components/Astronaut';
// import Stars from '@/components/Stars';
import { Canvas } from '@react-three/fiber';
import { type FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className=" h-screen">
      <Canvas camera={{ position: [0, 0, 4] }}>
        {/* <Stars /> */}
        <Astronaut />
      </Canvas>
    </div>
  );
};

export default HomePage;
