import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import GalleryModelGltf from "../threejsmodels/GalleryThreejsProject.gltf"
import { GLTFResult } from "../types/common.types";
import { Matrix4, Mesh, Vector3 } from "three";

export default function GalleryModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef();
  const { nodes, materials } = useGLTF(GalleryModelGltf) as unknown as GLTFResult;
  const referenceMesh = useRef<Mesh>(null);
  let myVec3 = new Vector3();
  nodes.PaintingReferencePlace.geometry.computeBoundingBox();
  const referenceGeometry = nodes.PaintingReferencePlace.geometry.boundingBox;

  myVec3.subVectors(referenceGeometry!!.max, referenceGeometry!!.min);
  myVec3.multiplyScalar(0.5);
  myVec3.add(referenceGeometry!!.min);
  myVec3.applyMatrix4(new Matrix4());
  console.log(myVec3);
  
  
  return (
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
        material={nodes.Room.material}
      >
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
  );
}

useGLTF.preload(GalleryModelGltf);
