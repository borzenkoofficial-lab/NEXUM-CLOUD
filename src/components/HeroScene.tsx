import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, OrbitControls, Sparkles, TorusKnot } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function HeroObject(){
  const mesh=useRef<THREE.Mesh>(null);
  const { pointer }=useThree();
  useFrame((state,delta)=>{
    if(!mesh.current) return;
    mesh.current.rotation.x += delta*.10;
    mesh.current.rotation.y += delta*.14;
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, pointer.x*.26, .04);
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, pointer.x*.18, .035);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, pointer.y*.18, .035);
  });
  return <Float speed={1} rotationIntensity={.16} floatIntensity={.48}>
    <mesh ref={mesh} scale={2.05}>
      <icosahedronGeometry args={[1,5]}/>
      <MeshTransmissionMaterial backside samples={8} thickness={.82} roughness={.035} transmission={1} ior={1.36} chromaticAberration={.045} anisotropy={.2} distortion={.08} distortionScale={.16}/>
    </mesh>
    <TorusKnot args={[1.48,.016,220,12,2,3]} rotation={[.5,0,0]}>
      <meshStandardMaterial color="#b6b6b0" metalness={.82} roughness={.16}/>
    </TorusKnot>
  </Float>
}
function Scene(){
  return <>
    <ambientLight intensity={1.25}/>
    <directionalLight position={[4,5,6]} intensity={3.4}/>
    <directionalLight position={[-4,-2,-2]} intensity={1.8}/>
    <pointLight position={[-4,-2,3]} intensity={5}/>
    <HeroObject/>
    <Sparkles count={55} scale={7} size={.8} speed={.18} opacity={.22}/>
    <Environment preset="studio"/>
  </>;
}
export function HeroScene(){
  return <Canvas camera={{position:[0,0,7],fov:38}} dpr={[1,1.5]} gl={{antialias:true,powerPreference:'high-performance'}}>
    <Suspense fallback={null}><Scene/></Suspense>
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.18} rotateSpeed={.5}/>
  </Canvas>;
}
