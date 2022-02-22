import { PlaneBufferGeometryProps } from '@react-three/fiber';
import THREE, { Vector3 } from 'three';

type TPaintingPaintProps = {
  spawnPoint: Vector3;
  planeAttrs: PlaneBufferGeometryProps;
} & JSX.IntrinsicElements['mesh'];

export default function PainingPlane(props: TPaintingPaintProps){
  return(
    <mesh position={props.spawnPoint} rotation={props.rotation}>
      <planeBufferGeometry args={props.planeAttrs.args} />
    </mesh>
  )
}