import type { FC } from 'react';

import { OrbitControls, PointMaterial, Points } from '@react-three/drei';
import { useRef, useState } from 'react';

const Stars: FC = () => {
  function randomInSphere(
    array: Float32Array<ArrayBuffer>,
    options: { radius: number }
  ) {
    const { radius = 1 } = options;
    const length = array.length / 3;

    for (let i = 0; i < length; i++) {
      let x, y, z, magnitude;
      do {
        x = (Math.random() - 1) * radius;
        y = (Math.random() - 1) * radius;
        z = (Math.random() - 1) * radius;
        magnitude = Math.sqrt(x * x + y * y + z * z);
      } while (magnitude > radius);

      array[i * 3] = x;
      array[i * 3 + 1] = y;
      array[i * 3 + 2] = z;
    }

    return array;
  }

  const ref = useRef(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(9000);
    return randomInSphere(positions, { radius: 2 });
  });

  //   useFrame((state, delta) => {
  // ref.current.rotation.x -= delta / 10;
  // ref.current.rotation.y -= delta / 15;
  //   });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <OrbitControls />
    </group>
  );
};

export default Stars;
