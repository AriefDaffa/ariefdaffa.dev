import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Group, SkinnedMesh } from 'three';

const Astronaut = () => {
  const modelRef = useRef<Group>(null);
  const { nodes, animations } = useGLTF('/model/source/Astronaut.glb');

  const { actions } = useAnimations(animations, modelRef);

  console.log(nodes);

  useEffect(() => {
    if (actions.floating) {
      actions?.floating.play();
    }
  }, [actions.floating]);

  return (
    <group ref={modelRef}>
      <group name="RootNode0" scale={0.01}>
        <group name="geo1">
          <group name="astronaut2">
            <skinnedMesh
              name="mesh_0"
              geometry={(nodes.mesh_0 as SkinnedMesh).geometry}
              material={(nodes.mesh_0 as SkinnedMesh).material}
              skeleton={(nodes.mesh_0 as SkinnedMesh).skeleton}
            />
            <skinnedMesh
              name="mesh_1"
              geometry={(nodes.mesh_1 as SkinnedMesh).geometry}
              material={(nodes.mesh_1 as SkinnedMesh).material}
              skeleton={(nodes.mesh_1 as SkinnedMesh).skeleton}
            />
            <skinnedMesh
              name="mesh_2"
              geometry={(nodes.mesh_2 as SkinnedMesh).geometry}
              material={(nodes.mesh_2 as SkinnedMesh).material}
              skeleton={(nodes.mesh_2 as SkinnedMesh).skeleton}
            />
          </group>
        </group>
        <group name="skeletal3">
          <primitive object={nodes.Root4} />
        </group>
      </group>
    </group>
  );
};

export default Astronaut;

useGLTF.preload('/model/source/Astronaut.glb');
