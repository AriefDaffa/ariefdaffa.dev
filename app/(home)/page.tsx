'use client';
import { Canvas } from '@react-three/fiber';
import Stars from './_components/Stars';

const Page = () => {
  return (
    <div className="relative h-full items-center justify-center overflow-hidden">
      <div className="absolute z-10 size-full flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
    </div>
  );
};

export default Page;
