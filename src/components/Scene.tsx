import { Camera, Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import THREE, { Color } from 'three'
import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import modelURL from "../threejsmodels/kindoflamp.gltf"
import GalleryModel from "./GalleryModel";
import { GLTFResult } from "../types/common.types";

export default function Scene() {

  const axesHelper = useRef<THREE.AxesHelper>(null);

  useEffect(()=>{
    axesHelper.current?.setColors(new Color(0xf54260), new Color(0x42f566), new Color(0x4269f5));
  }, [])

  return (
    <Canvas style={{ height: "100vh" }}>
      <Suspense fallback={null}>
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        {/* <MyModel position={[0, -2, 0]} /> */}
        <GalleryModel />
        <gridHelper args={[100, 100]} />
        <CustomCamera />
        <axesHelper ref={axesHelper} args={[100]} />
        {/* XZY */}
        <OrbitControls target={[20, 0,-10]} makeDefault  />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
    </Canvas>
  );
}

function CustomCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(()=>{

  }, [])

  return (
    <PerspectiveCamera makeDefault ref={cameraRef} />
  )
}