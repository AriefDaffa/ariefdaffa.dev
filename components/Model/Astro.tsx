'use client';
import * as THREE from 'three';
import React, { useMemo, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF, SkeletonUtils } from 'three-stdlib';

type ActionName = 'floating' | 'idle' | 'wave' | 'moon_walk';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.SkinnedMesh;
    mesh_1: THREE.SkinnedMesh;
    mesh_2: THREE.SkinnedMesh;
    Root4: THREE.Bone;
  };
  materials: {};
  animations: GLTFAction[];
};

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(
    '/model/source/Astronaut-transformed.glb'
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="skeletal3" scale={0.01}>
          <primitive object={nodes.Root4} />
        </group>
        <skinnedMesh
          name="mesh_0"
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          skeleton={nodes.mesh_0.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="mesh_1"
          geometry={nodes.mesh_1.geometry}
          material={nodes.mesh_1.material}
          skeleton={nodes.mesh_1.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="mesh_2"
          geometry={nodes.mesh_2.geometry}
          material={nodes.mesh_2.material}
          skeleton={nodes.mesh_2.skeleton}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/model/source/Astronaut-transformed.glb');
