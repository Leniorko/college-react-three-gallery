import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import GalleryModelGltf from "../threejsmodels/GalleryThreejsProject.gltf"
import { GLTFResult } from "../types/common.types";

export default function GalleryModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef();
  const { nodes, materials } = useGLTF(GalleryModelGltf) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
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
