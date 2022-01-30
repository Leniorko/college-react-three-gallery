import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import THREE from 'three'
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Box from "./Box";


type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {}
}

export default function Scene() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <Suspense fallback={null}>
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        {/* <MyModel /> */}
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
}

// TODO: Find out hot to load GLB file
// Probably need to load static files for parcel and serve them. There is plugin but i installed it for different version

// function MyModel(props: JSX.IntrinsicElements['group']) {
//   const group = useRef<THREE.Group>()
//   const { nodes, materials } = useGLTF('./kindoflamp.glb') as unknown as GLTFResult
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
//     </group>
//   )
// }


// useGLTF.preload('./kindoflamp.glb')