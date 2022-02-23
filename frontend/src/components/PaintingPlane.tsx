import { Image } from '@react-three/drei';
import { PlaneBufferGeometryProps } from '@react-three/fiber';
import THREE, { Vector3 } from 'three';
import testImg from '../images/horizontal_test.jpg'


type TPaintingPaintProps = {
  // spawnPoint: Vector3;
  // planeAttrs?: PlaneBufferGeometryProps;
  imgUrl: string;
} & JSX.IntrinsicElements['mesh'];

/**
 * Plain for image render. Places at spawnPoint.
 */
export default function PaintingPlane(props: TPaintingPaintProps){

  return(
    <Image position={props.position} scale={2} rotation={props.rotation} url={props.imgUrl} />
  )
}