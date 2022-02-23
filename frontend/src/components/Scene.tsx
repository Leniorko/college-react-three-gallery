import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import THREE, { Color } from "three";
import { Environment } from "@react-three/drei";
import GalleryModel from "./GalleryModel";
import CustomControls from "./CameraControlsConfig";

/**
 * Main scene
 */
export default function Scene() {
  const axesHelper = useRef<THREE.AxesHelper>(null);

  useEffect(() => {
    axesHelper.current?.setColors(
      new Color(0xf54260),
      new Color(0x42f566),
      new Color(0x4269f5)
    );
  }, []);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <Canvas id="scene" style={{ height: "100vh" }}>
      <Suspense fallback={null}>
        <GalleryModel />
        {/* <gridHelper args={[100, 100]} /> */}
        <CustomControls />
        {/* <axesHelper ref={axesHelper} args={[100]} /> */}
        <Environment preset="studio"/>
      </Suspense>
    </Canvas>
  );
}
