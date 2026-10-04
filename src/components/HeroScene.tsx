import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, OrbitControls, Sparkles, TorusKnot } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function HeroObject(){
  const mesh=useRef<THREE.Mesh>(null);
  const { pointer }=useThree();
  useFrame((state,delta)=>{
    if(!mesh.current) return;
    mesh.current.rotation.x += delta*.11;
    mesh.current.rotation.y += delta*.17;
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, pointer.x*.22, .035);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, pointer.y*.16, .035);
  });
  return <Float speed={1.2} rotationIntensity={.18} floatIntensity={.55}>
    <mesh ref={mesh} scale={2.05}>
      <icosahedronGeometry args={[1,5]}/>
      <MeshTransmissionMaterial backside samples={6} thickness={.75} roughness={.06} transmission={1} ior={1.34} chromaticAberration={.06} anisotropy={.15}/>
    </mesh>
    <TorusKnot args={[1.45,.018,180,10,2,3]} rotation={[.5,0,0]}>
      <meshStandardMaterial color="#8f8f8a" metalness={.75} roughness={.2}/>
    </TorusKnot>
  </Float>
}
function Scene(){
  return <><ambientLight intensity={1.5}/><directionalLight position={[4,5,6]} intensity={3}/><pointLight position={[-4,-2,3]} intensity={7}/><HeroObject/><Sparkles count={90} scale={7} size={1.1} speed={.25} opacity={.35}/><Environment preset="studio"/></>;
}
export function HeroScene(){return <Canvas camera={{position:[0,0,7],fov:38}} dpr={[1,1.5]} gl={{antialias:true,powerPreference:'high-performance'}}><Suspense fallback={null}><Scene/></Suspense><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.22} rotateSpeed={.55}/></Canvas>}