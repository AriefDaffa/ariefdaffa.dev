'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Stars from './_components/Stars';

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
      <div className="absolute z-10 size-full flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 150] }}>
          <Suspense>
            <Stars />
            <CameraController targetPosition={cameraPos} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HomePage;
