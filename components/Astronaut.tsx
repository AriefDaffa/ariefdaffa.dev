import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import type { FC } from 'react';
import { useRef } from 'react';
import { Model } from './Model/Astro';

const Astronaut: FC = () => {
  // const group = useRef(null);
  // const meshRef = useRef<THREE.Mesh>(null!);
  // const texture = useLoader(THREE.TextureLoader, '/textures/texture1.png');

  // useFrame(({ clock }) => {
  //   const t = clock.getElapsedTime();
  //   meshRef.current.position.y = Math.sin(t) * 0.2; // Hover effect
  // });

  return (
    <>
      {/* Static starfield background */}
      {/* <Stars
        radius={100} // Size of the inner sphere with stars
        depth={50} // How far stars go in Z (not animated)
        count={5000} // Number of stars
        factor={4} // Star size factor
        saturation={0} // Greyscale
        fade
      /> */}

      {/* Hovering cube */}
      {/* <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color="skyblue" />
      </mesh> */}
      <Model />

      <ambientLight intensity={0.5} />

      <OrbitControls />
    </>
  );
};

export default Astronaut;
