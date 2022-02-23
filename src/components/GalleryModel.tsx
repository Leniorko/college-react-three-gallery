import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import GalleryModelGltf from "../threejsmodels/GalleryThreejsProject.gltf";
import { GLTFResult } from "../types/common.types";
import { Euler, Matrix4, Mesh, Vector3 } from "three";
import PaintingPlane from "./PaintingPlane";
import { generatePaintingPlanes } from "../utils/GalleryModel.utils";

export default function GalleryModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    GalleryModelGltf
  ) as unknown as GLTFResult;
  // const referenceMesh = useRef<Mesh>(null);
  // const [referenceSpawnPoint, setReferenceSpawnPoint] = useState(new Vector3());
  // useEffect(() => {
  //   nodes.PaintingReferencePlaceF000.geometry.computeBoundingBox();
  //   let newSpwnPoint = new Vector3();
  //   const referenceGeometry = nodes.PaintingReferencePlaceF000.geometry.boundingBox;

  //   newSpwnPoint.subVectors(referenceGeometry!!.max, referenceGeometry!!.min);
  //   newSpwnPoint.multiplyScalar(0.5);
  //   newSpwnPoint.add(referenceGeometry!!.min);
  //   newSpwnPoint.applyMatrix4(new Matrix4());
  //   console.log(newSpwnPoint);
  //   setReferenceSpawnPoint(newSpwnPoint);
  // }, [nodes.PaintingReferencePlaceF000]);

  const paintings = generatePaintingPlanes(nodes);
  
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceF000.geometry}
          material={nodes.PaintingReferencePlaceF000.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceT000.geometry}
          material={nodes.PaintingReferencePlaceT000.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceF001.geometry}
          material={nodes.PaintingReferencePlaceF001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceT002.geometry}
          material={nodes.PaintingReferencePlaceT002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceF002.geometry}
          material={nodes.PaintingReferencePlaceF002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceT001.geometry}
          material={nodes.PaintingReferencePlaceT001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceR000.geometry}
          material={nodes.PaintingReferencePlaceR000.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceR001.geometry}
          material={nodes.PaintingReferencePlaceR001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceR002.geometry}
          material={nodes.PaintingReferencePlaceR002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceL000.geometry}
          material={nodes.PaintingReferencePlaceL000.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceL001.geometry}
          material={nodes.PaintingReferencePlaceL001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PaintingReferencePlaceL002.geometry}
          material={nodes.PaintingReferencePlaceL002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Room.geometry}
          material={nodes.Room.material}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Baseboard.geometry}
            material={nodes.Baseboard.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ceiling.geometry}
            material={nodes.Ceiling.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor.geometry}
            material={nodes.Floor.material}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RoomPaintingBoard.geometry}
          material={nodes.RoomPaintingBoard.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RoomPaintingBoard001.geometry}
          material={nodes.RoomPaintingBoard001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RoomPaintingBoard002.geometry}
          material={nodes.RoomPaintingBoard002.material}
        />
      </group>
      {paintings}
      {/* <PaintingPlane
        position={referenceSpawnPoint}
        rotation={new Euler(0, Math.PI / 2, 0)}
        planeAttrs={{
          args: [3, 3],
        }}
      /> */}
    </>
  );
}

useGLTF.preload(GalleryModelGltf);
