import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  Sparkles,
  Stars,
  Float,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

function VillaModel() {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.06;
    }
  });

  const windowPositions = [];
  for (let i = 0; i < 5; i++) {
    windowPositions.push(-2 + i * 1);
  }

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* Main structure */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 1.6, 2.4]} />
        <meshStandardMaterial color="#1a1a1e" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* Upper floor, offset */}
      <mesh position={[0.6, 1.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 0.9, 2.4]} />
        <meshStandardMaterial color="#232328" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* Roof slab */}
      <mesh position={[0.6, 2.28, 0]}>
        <boxGeometry args={[3.9, 0.12, 2.7]} />
        <meshStandardMaterial color="#0d0d10" roughness={0.4} metalness={0.4} />
      </mesh>
      <mesh position={[0, 1.42, 0]}>
        <boxGeometry args={[6.3, 0.12, 2.7]} />
        <meshStandardMaterial color="#0d0d10" roughness={0.4} metalness={0.4} />
      </mesh>

      {/* Ground floor glowing windows */}
      {windowPositions.map((x, idx) => (
        <mesh key={idx} position={[x, 0.6, 1.21]}>
          <boxGeometry args={[0.55, 0.85, 0.02]} />
          <meshStandardMaterial
            color="#c9a227"
            emissive="#e6b84e"
            emissiveIntensity={2.2}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* Upper floor windows */}
      {[-0.4, 0.6, 1.6].map((x, idx) => (
        <mesh key={idx} position={[x, 1.75, 1.21]}>
          <boxGeometry args={[0.5, 0.55, 0.02]} />
          <meshStandardMaterial
            color="#c9a227"
            emissive="#e6b84e"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* Pool-side lights */}
      {[-3.2, 3.2].map((x, idx) => (
        <group key={idx} position={[x, -0.15, 2.6]}>
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#ffd98e"
              emissive="#ffd98e"
              emissiveIntensity={3}
              toneMapped={false}
            />
          </mesh>
          <pointLight color="#e6b84e" intensity={2.2} distance={4} decay={2} />
        </group>
      ))}
    </group>
  );
}

function ReflectivePool() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.42, 0]}>
      <planeGeometry args={[60, 60]} />
      <MeshReflectorMaterial
        blur={[400, 120]}
        resolution={1024}
        mixBlur={1}
        mixStrength={45}
        roughness={1}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050506"
        metalness={0.6}
        mirror={0.4}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#08080a"]} />
      <fog attach="fog" args={["#08080a", 8, 26]} />

      <ambientLight intensity={0.15} />
      <directionalLight
        position={[-6, 5, -4]}
        intensity={0.35}
        color="#8fb3ff"
      />
      <directionalLight
        position={[4, 4, 5]}
        intensity={0.6}
        color="#e6b84e"
      />

      <Stars
        radius={60}
        depth={30}
        count={2200}
        factor={2.5}
        saturation={0}
        fade
        speed={0.4}
      />

      <Float speed={1} rotationIntensity={0} floatIntensity={0.6}>
        <VillaModel />
      </Float>

      <Sparkles
        count={80}
        scale={[10, 4, 10]}
        size={2.5}
        speed={0.3}
        color="#e6b84e"
        position={[0, 0.5, 0]}
      />

      <ReflectivePool />

      <Environment preset="night" />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [7, 2.4, 8], fov: 40 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
