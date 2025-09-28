import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralNode = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <Sphere ref={meshRef} position={position} args={[0.1, 16, 16]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </Sphere>
    </Float>
  );
};

const Connection = ({ start, end }: { start: [number, number, number], end: [number, number, number] }) => {
  const lineRef = useRef<THREE.BufferGeometry>(null);
  
  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...start),
      new THREE.Vector3(...end)
    ]);
    return curve.getPoints(20);
  }, [start, end]);

  return (
    <line>
      <bufferGeometry ref={lineRef} />
      <lineBasicMaterial color="#3b82f6" opacity={0.3} transparent />
      {points && (
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
      )}
    </line>
  );
};

const FloatingGeometry = ({ position, type }: { position: [number, number, number], type: 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      {type === 'box' ? (
        <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial 
            color="#10b981" 
            emissive="#10b981" 
            emissiveIntensity={0.1}
            wireframe
            transparent
            opacity={0.6}
          />
        </Box>
      ) : (
        <Torus ref={meshRef} position={position} args={[0.3, 0.1, 16, 32]}>
          <meshStandardMaterial 
            color="#6366f1" 
            emissive="#6366f1" 
            emissiveIntensity={0.1}
            wireframe
            transparent
            opacity={0.6}
          />
        </Torus>
      )}
    </Float>
  );
};

const NeuralNetwork = () => {
  // Generate random positions for neural nodes
  const nodes = useMemo(() => {
    const nodePositions: [number, number, number][] = [];
    for (let i = 0; i < 30; i++) {
      nodePositions.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 8
      ]);
    }
    return nodePositions;
  }, []);

  const geometries = useMemo(() => {
    const geoPositions: Array<{ position: [number, number, number], type: 'box' | 'torus' }> = [];
    for (let i = 0; i < 8; i++) {
      geoPositions.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 10
        ],
        type: Math.random() > 0.5 ? 'box' : 'torus'
      });
    }
    return geoPositions;
  }, []);

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#3b82f6" />
      
      {/* Neural nodes */}
      {nodes.map((position, i) => (
        <NeuralNode 
          key={i} 
          position={position} 
          color={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#10b981" : "#6366f1"}
        />
      ))}

      {/* Floating geometric shapes */}
      {geometries.map((geo, i) => (
        <FloatingGeometry 
          key={i} 
          position={geo.position} 
          type={geo.type}
        />
      ))}
    </>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <NeuralNetwork />
      </Canvas>
    </div>
  );
};