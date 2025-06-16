'use client';

import { PointMaterial, Points } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Points as PointTypes } from 'three';

const Stars = () => {
  const { theme, resolvedTheme } = useTheme();
  const ref = useRef<PointTypes>(null);

  const randomInSphere = (array: Float32Array<ArrayBuffer>, radius: number) => {
    const length = array.length / 3;

    for (let i = 0; i < length; i++) {
      let x, y, z, magnitude;
      do {
        x = (Math.random() * 2 - 1) * radius;
        y = (Math.random() * 2 - 1) * radius;
        z = (Math.random() * 2 - 1) * radius;
        magnitude = Math.sqrt(x * x + y * y + z * z);
      } while (magnitude > radius);

      array[i * 3] = x;
      array[i * 3 + 1] = y;
      array[i * 3 + 2] = z;
    }

    return array;
  };

  const [sphere] = useState(() => {
    const positions = new Float32Array(9000);
    return randomInSphere(positions, 1.5);
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  useEffect(() => {}, [theme, resolvedTheme]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={theme === 'light' ? '#000' : '#fff'}
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
