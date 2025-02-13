/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useTheme } from 'next-themes';

function randomInSphere(array, options = {}) {
  const { radius = 1 } = options;
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
}

const Model = () => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const positions = new Float32Array(9000); // 5000 points, 3 coordinates each
    return randomInSphere(positions, { radius: 1.5 });
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Force a repaint on theme change
  }, [theme]);

  if (!resolvedTheme) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={theme === 'dark' ? '#fff' : '#000'}
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Stars = () => {
  return (
    <div className="relative w-full h-screen ">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Model />
      </Canvas>
    </div>
  );
};

export default Stars;
