import { Camera, Canvas, PerspectiveCameraProps, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import THREE, { Color, Vector3 } from "three";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  useGLTF,
} from "@react-three/drei";
import modelURL from "../threejsmodels/kindoflamp.gltf";
import GalleryModel from "./GalleryModel";
import { GLTFResult } from "../types/common.types";

export default function Scene() {
  const axesHelper = useRef<THREE.AxesHelper>(null);

  useEffect(() => {
    axesHelper.current?.setColors(
      new Color(0xf54260),
      new Color(0x42f566),
      new Color(0x4269f5)
    );
  }, []);

 

  return (
    <Canvas id="scene" style={{ height: "100vh" }} camera={{
      position: [0.2, 1.8, -2],
    }}>
      <Suspense fallback={null}>
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        {/* <MyModel position={[0, -2, 0]} /> */}
        <GalleryModel />
        <gridHelper args={[100, 100]} />
        <CustomControls />
        <axesHelper ref={axesHelper} args={[100]} />
        {/* XZY */}
        {/* <OrbitControls target={[20, 0,-10]} makeDefault  /> */}
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
}

function CustomControls() {
  const controls = useRef<any>();
  const isLocked = useRef(false);

  const { camera } = useThree();

  useEffect(()=>{
    camera.position.set(0.5 , 1.8, -2)
    camera.lookAt(1, 1.8, -2);
  }, [])

  const onKeyDown = function (event: KeyboardEvent) {
    switch (event.code) {
      case "KeyW":
        controls.current.moveForward(0.11);
        break;
      case "KeyA":
        controls.current.moveRight(-0.11);
        break;
      case "KeyS":
        controls.current.moveForward(-0.11);
        break;
      case "KeyD":
        controls.current.moveRight(0.11);
        break;
    }
  };
  document.addEventListener("keydown", onKeyDown, false);

  return (
    <PointerLockControls
    position={new Vector3(100, 100, 100)}
      onUpdate={() => {
        if (controls.current) {
          controls.current.addEventListener("lock", () => {
            console.log("lock");
            isLocked.current = true;
          });
          controls.current.addEventListener("unlock", () => {
            console.log("unlock");
            isLocked.current = false;
          });
        }
      }}
      ref={controls}
    />
  );
}

function CustomCamera(props: PerspectiveCameraProps) {
  return <PerspectiveCamera 
  position={[5, 5, 5]} near={0.1} far={10}
  makeDefault
  />;
}
