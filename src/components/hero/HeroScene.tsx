import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 800;
const GEOMETRY_COUNT = 6;

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05060f, 0.08);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ─── Particles ─────────────────────────
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);

    const violet = new THREE.Color(0x7c3aed);
    const cyan = new THREE.Color(0x22d3ee);
    const pink = new THREE.Color(0xec4899);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const color = [violet, cyan, pink][Math.floor(Math.random() * 3)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 0.5;
      speeds[i] = Math.random() * 0.5 + 0.2;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3),
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3),
    );
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ─── Floating geometries ─────────────────
    const geometries: THREE.Mesh[] = [];
    const geoGroup = new THREE.Group();

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x7c3aed,
      metalness: 0.1,
      roughness: 0.1,
      transparent: true,
      opacity: 0.15,
      transmission: 0.6,
      thickness: 0.5,
      wireframe: false,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x9f67ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });

    const shapes = [
      new THREE.IcosahedronGeometry(0.6, 1),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.TorusGeometry(0.4, 0.15, 8, 16),
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.DodecahedronGeometry(0.4, 0),
      new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8),
    ];

    for (let i = 0; i < GEOMETRY_COUNT; i++) {
      const mat =
        i % 2 === 0 ? glassMaterial.clone() : wireframeMaterial.clone();
      const mesh = new THREE.Mesh(shapes[i % shapes.length], mat);

      const angle = (i / GEOMETRY_COUNT) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1.5;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 3,
        Math.sin(angle) * radius - 2,
      );

      mesh.userData = {
        rotSpeed: {
          x: Math.random() * 0.01,
          y: Math.random() * 0.01,
          z: Math.random() * 0.005,
        },
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.3 + Math.random() * 0.4,
        floatAmplitude: 0.3 + Math.random() * 0.4,
      };

      geoGroup.add(mesh);
      geometries.push(mesh);
    }

    scene.add(geoGroup);

    // ─── Lights ─────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x7c3aed, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x7c3aed, 2, 15);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x22d3ee, 1.5, 15);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xec4899, 1, 10);
    pointLight3.position.set(0, 4, -3);
    scene.add(pointLight3);

    // ─── Mouse interaction ──────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / width - 0.5) * 2;
      mouseY = (event.clientY / height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ─── Animation loop ─────────────────────
    const clock = new THREE.Clock();

    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera rotation following mouse
      targetRotX += (mouseY * 0.3 - targetRotX) * 0.02;
      targetRotY += (mouseX * 0.3 - targetRotY) * 0.02;
      camera.rotation.x = targetRotX * 0.1;
      camera.rotation.y = targetRotY * 0.1;

      // Animate particles
      const posArray = particleGeometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        posArray[i * 3 + 1] += Math.sin(elapsed * speeds[i] + i) * 0.001;
        posArray[i * 3] += Math.cos(elapsed * speeds[i] * 0.5 + i) * 0.0005;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Animate floating geometries
      geometries.forEach((mesh) => {
        const { rotSpeed, floatOffset, floatSpeed, floatAmplitude } =
          mesh.userData;
        mesh.rotation.x += rotSpeed.x;
        mesh.rotation.y += rotSpeed.y;
        mesh.rotation.z += rotSpeed.z;
        mesh.position.y +=
          Math.sin(elapsed * floatSpeed + floatOffset) * 0.003 * floatAmplitude;
      });

      // Slowly rotate the geometry group
      geoGroup.rotation.y = elapsed * 0.05;

      // Animate lights
      pointLight1.position.x = Math.sin(elapsed * 0.3) * 4;
      pointLight1.position.z = Math.cos(elapsed * 0.3) * 4;
      pointLight2.position.x = Math.cos(elapsed * 0.2) * 3;

      renderer.render(scene, camera);
    }

    animate();
    setIsLoaded(true);

    // ─── Resize handler ─────────────────────
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // ─── Cleanup ────────────────────────────
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      shapes.forEach((g) => g.dispose());
      glassMaterial.dispose();
      wireframeMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    />
  );
}
