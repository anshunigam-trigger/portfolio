"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, Stars } from "@react-three/drei";
import * as THREE from "three";

function NeuralProcessor() {
  const group = useRef(null);
  const core = useRef(null);
  const particles = useRef(null);
  const lines = useMemo(() => {
    const pts = [];
    const count = 74;
    for (let i = 0; i < count; i += 1) {
      const radius = 1.65 + (i % 9) * 0.13;
      const angle = i * 2.399963;
      const y = ((i % 17) - 8) * 0.13;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
    }
    const segments = [];
    pts.forEach((point, index) => {
      const next = pts[(index * 7 + 11) % pts.length];
      if (point.distanceTo(next) < 2.2) segments.push(point, next);
    });
    return { pts, segments };
  }, []);

  const particlePositions = useMemo(() => new Float32Array(lines.pts.flatMap((point) => [point.x, point.y, point.z])), [lines.pts]);
  const segmentPositions = useMemo(() => new Float32Array(lines.segments.flatMap((point) => [point.x, point.y, point.z])), [lines.segments]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;
    if (group.current) {
      group.current.rotation.y = t * 0.12 + pointerX * 0.32;
      group.current.rotation.x = -0.12 + pointerY * 0.16;
    }
    if (core.current) {
      core.current.rotation.x = t * 0.34;
      core.current.rotation.y = t * 0.25;
      core.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.025);
    }
    if (particles.current) {
      particles.current.rotation.y = -t * 0.045;
    }
  });

  return (
    <group ref={group} position={[0.55, 0.03, 0]}>
      <Float speed={1.35} rotationIntensity={0.45} floatIntensity={0.45}>
        <mesh ref={core}>
          <icosahedronGeometry args={[0.82, 4]} />
          <meshPhysicalMaterial color="#64e8ff" emissive="#164dff" emissiveIntensity={0.72} roughness={0.21} metalness={0.52} transmission={0.18} thickness={0.5} transparent opacity={0.88} clearcoat={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2.1, 0.35, 0]}>
          <torusGeometry args={[1.42, 0.012, 12, 180]} />
          <meshBasicMaterial color="#8b5cff" transparent opacity={0.75} />
        </mesh>
        <mesh rotation={[1.1, Math.PI / 2.8, 0.2]}>
          <torusGeometry args={[1.82, 0.01, 12, 180]} />
          <meshBasicMaterial color="#00f5d4" transparent opacity={0.42} />
        </mesh>
        <mesh rotation={[0.2, 1.05, 1.25]}>
          <torusGeometry args={[2.2, 0.008, 12, 180]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </mesh>
      </Float>

      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particlePositions.length / 3} array={particlePositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#eaf7ff" size={0.035} transparent opacity={0.85} sizeAttenuation />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={segmentPositions.length / 3} array={segmentPositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#66e3ff" transparent opacity={0.22} />
      </lineSegments>

      {lines.pts.slice(0, 16).map((point, index) => (
        <Float key={index} speed={1.2 + index * 0.02} floatIntensity={0.25}>
          <mesh position={[point.x, point.y, point.z]}>
            <sphereGeometry args={[index % 3 === 0 ? 0.055 : 0.035, 16, 16]} />
            <meshBasicMaterial color={index % 3 === 0 ? "#8b5cff" : "#66e3ff"} transparent opacity={0.95} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function HeroSceneContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.2, 5.4]} fov={42} />
      <color attach="background" args={["#02040a"]} />
      <fog attach="fog" args={["#02040a", 4, 10]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[-4, 3, 3]} color="#66e3ff" intensity={9} />
      <pointLight position={[3, -2, 4]} color="#8b5cff" intensity={7} />
      <NeuralProcessor />
      <Stars radius={7} depth={4} count={700} factor={3.2} saturation={0} fade speed={0.55} />
      <Environment preset="city" />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas dpr={[1, 1.65]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} performance={{ min: 0.5 }}>
        <Suspense fallback={null}>
          <HeroSceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}


