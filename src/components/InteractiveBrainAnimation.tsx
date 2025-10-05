import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BrainSphere({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate based on time and mouse position
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mousePosition.y * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mousePosition.x * 0.5;
      
      // Subtle floating effect
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 100, 100]} 
      scale={hovered ? 1.15 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color="#a78bfa"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function ParticleField({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const radius = 1.5 + Math.random() * 1;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1 + mousePosition.x * 0.3;
      particlesRef.current.rotation.x = mousePosition.y * 0.3;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#5eead4"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export const InteractiveBrainAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-glow cursor-pointer group"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-sm" />
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a78bfa" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5eead4" />
        <spotLight position={[0, 5, 5]} angle={0.3} intensity={1} color="#ffffff" />
        
        <BrainSphere mousePosition={mousePosition} />
        <ParticleField mousePosition={mousePosition} />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm text-primary-foreground/80 bg-background/20 backdrop-blur-sm rounded-lg px-4 py-2">
          Move your mouse to interact with the neural network
        </p>
      </div>
    </div>
  );
};
