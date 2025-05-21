'use client';

import Astronaut from '@/components/Astronaut';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { type FC } from 'react';

const HomePage: FC = () => {
  console.log('hello world');
  return (
    <div className="bg-black h-screen">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <Astronaut />
        <Environment preset="apartment" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default HomePage;
