import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Float } from '@react-three/drei'
import * as THREE from 'three'

function IceCream3D() {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 50; i++) {
      temp.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ])
    }
    return temp
  }, [])

  return (
    <group ref={groupRef}>
      {/* Sorvete principal */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 1, 0]}>
          <meshStandardMaterial
            color="#f97d63"
            roughness={0.2}
            metalness={0.1}
          />
        </Sphere>
      </Float>

      {/* Cone */}
      <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[1.2, 2, 8]} />
        <meshStandardMaterial color="#d4a574" roughness={0.8} />
      </mesh>

      {/* Partículas flutuantes */}
      {particles.map((position, i) => (
        <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={0.2} floatIntensity={0.3}>
          <Sphere args={[0.05, 8, 8]} position={position as [number, number, number]}>
            <meshStandardMaterial color="#6b8e7f" opacity={0.6} transparent />
          </Sphere>
        </Float>
      ))}

      {/* Iluminação */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97d63" />
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <IceCream3D />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}