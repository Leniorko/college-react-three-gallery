import { Euler } from "three"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

// Not the best way to do it, but since it's generated via program - it's fine.
// Otherwise just extend new specific type with it
export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {}
}

export enum ReferencePointNameTemplate {
  toRight = 'PaintingReferencePlaceR',
  toLeft = 'PaintingReferencePlaceL',
  toCamera = 'PaintingReferencePlaceT',
  fromCamera = 'PaintingReferencePlaceF',
}

export const rotationConstants = {
  toRight: new Euler(0, 0, 0),
  toLeft: new Euler(0, Math.PI, 0),
  toCamera: new Euler(0, -Math.PI / 2, 0),
  fromCamera: new Euler(0, Math.PI / 2, 0),
}