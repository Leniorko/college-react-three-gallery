import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

// Not the best way to do it, but since it's generated via program - it's fine.
// Otherwise just extend new specific type with it
export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {}
}