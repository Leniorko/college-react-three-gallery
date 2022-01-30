import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import THREE from 'three'
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Box from "./Box";
import modelURL from "../threejsmodels/kindoflamp.gltf"


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
        <MyModel position={[0, -2, 0]} />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
}

function MyModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(modelURL) as unknown as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
    </group>
  )
}


useGLTF.preload(modelURL)