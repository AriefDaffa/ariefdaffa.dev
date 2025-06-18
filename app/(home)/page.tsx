'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Stars from './_components/Stars';
import { MaskContainer } from '../_components/SvgMaskEffect';
import { TextHoverEffect } from '../_components/TextHoverEffect';

const CameraController = ({
  targetPosition,
}: {
  targetPosition: [number, number, number];
}) => {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(...targetPosition));

  if (!target.current.equals(new THREE.Vector3(...targetPosition))) {
    target.current.set(...targetPosition);
  }

  useFrame(() => {
    camera.position.lerp(target.current, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const HomePage = () => {
  const [cameraPos, setCameraPos] = useState<[number, number, number]>([
    0, 0, 150,
  ]);

  useEffect(() => {
    setCameraPos([0, 0, 1]);
  }, []);

  return (
    <div className="relative h-full items-center justify-center overflow-hidden">
      <div className="absolute z-10 size-full flex flex-col items-center justify-center">
        <Canvas camera={{ position: [0, 0, 150] }}>
          <Suspense>
            <Stars />
            <CameraController targetPosition={cameraPos} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute flex z-20 size-full w-full items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <div className="size-full py-8">
              <TextHoverEffect text="ArDaff" />
            </div>
          }
          className=" text-white dark:text-black"
        >
          <div className="md:text-4xl max-w-4xl">
            A <span className="text-primary font-semibold">Web Developer</span>{' '}
            who loves reading novel that it&apos;s become an obsession—almost to
            the point of getting sick of them!
          </div>
        </MaskContainer>
      </div>
    </div>
  );
};

export default HomePage;
