import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
function HeroObject(){const mesh=useRef<THREE.Mesh>(null);useFrame((_,d)=>{if(mesh.current){mesh.current.rotation.x+=d*.12;mesh.current.rotation.y+=d*.2;}});return <Float speed={1.3} rotationIntensity={.25} floatIntensity={.65}><mesh ref={mesh} scale={2.15}><icosahedronGeometry args={[1,5]}/><MeshTransmissionMaterial backside samples={8} thickness={.8} roughness={.08} transmission={1} ior={1.35} chromaticAberration={.08}/></mesh></Float>}
export function HeroScene(){return <Canvas camera={{position:[0,0,7],fov:38}} dpr={[1,1.75]}><ambientLight intensity={1.6}/><directionalLight position={[4,5,6]} intensity={3}/><pointLight position={[-4,-2,3]} intensity={8}/><HeroObject/><Environment preset="studio"/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.25}/></Canvas>}
