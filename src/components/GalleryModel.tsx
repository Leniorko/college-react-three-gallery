import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import GalleryModelGltf from "../threejsmodels/GalleryThreejsProject.gltf";
import { GLTFResult } from "../types/common.types";
import { Euler, Matrix4, Mesh, Vector3 } from "three";
import PainingPlane from "./PaintingPlane";

export default function GalleryModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    GalleryModelGltf
  ) as unknown as GLTFResult;
  const referenceMesh = useRef<Mesh>(null);
  const [referenceSpawnPoint, setReferenceSpawnPoint] = useState(new Vector3());
  useEffect(() => {
    nodes.PaintingReferencePlace.geometry.computeBoundingBox();
    let newSpwnPoint = new Vector3();
    const referenceGeometry = nodes.PaintingReferencePlace.geometry.boundingBox;

    newSpwnPoint.subVectors(referenceGeometry!!.max, referenceGeometry!!.min);
    newSpwnPoint.multiplyScalar(0.5);
    newSpwnPoint.add(referenceGeometry!!.min);
    newSpwnPoint.applyMatrix4(new Matrix4());
    console.log(newSpwnPoint);
    setReferenceSpawnPoint(newSpwnPoint);
  }, [nodes.PaintingReferencePlace]);

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          ref={referenceMesh}
          geometry={nodes.PaintingReferencePlace.geometry}
          material={nodes.PaintingReferencePlace.material}
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
          position={[10, 1, -10]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
      </group>
      <PainingPlane
        spawnPoint={referenceSpawnPoint}
        rotation={new Euler(0, Math.PI / 2, 0)}
        planeAttrs={{
          args: [3, 3],
        }}
      />
    </>
  );
}

useGLTF.preload(GalleryModelGltf);
