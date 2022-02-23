import { BufferGeometry, Material, Matrix4, Mesh, Vector3 } from "three";
import PaintingPlane from "../components/PaintingPlane";
import { ReferencePointNameTemplate, rotationConstants } from "../types/common.types";

export function calculateSpawnPoint(node: THREE.Mesh ){
  let spawnPointToReturn = new Vector3();
  node.geometry.computeBoundingBox();
  const nodeBoundingBox = node.geometry.boundingBox;
  
  spawnPointToReturn.subVectors(nodeBoundingBox!!.max, nodeBoundingBox!!.min);
  spawnPointToReturn.multiplyScalar(0.5);
  spawnPointToReturn.add(nodeBoundingBox!!.min);
  spawnPointToReturn.applyMatrix4(new Matrix4());

  return spawnPointToReturn;
}

export function generatePaintingPlanes(nodes: {[key: string]: THREE.Mesh}){
  const paintingsArray = [];
  let counter = 0;

  for (const [nodeName, node] of Object.entries(nodes)){
    if(nodeName.includes(ReferencePointNameTemplate.toRight)){
      const newPainting = <PaintingPlane key={`to-right-${counter++}`} position={calculateSpawnPoint(node)} rotation={rotationConstants.toRight} />
      paintingsArray.push(newPainting)
      continue;
    }
    if(nodeName.includes(ReferencePointNameTemplate.toLeft)){
      const newPainting = <PaintingPlane key={`to-left-${counter++}`} position={calculateSpawnPoint(node)} rotation={rotationConstants.toLeft} />
      paintingsArray.push(newPainting)
      continue;
    }if(nodeName.includes(ReferencePointNameTemplate.toCamera)){
      const newPainting = <PaintingPlane key={`to-camera-${counter++}`} position={calculateSpawnPoint(node)} rotation={rotationConstants.toCamera} />
      paintingsArray.push(newPainting)
      continue;
    }if(nodeName.includes(ReferencePointNameTemplate.fromCamera)){
      const newPainting = <PaintingPlane key={`from-camera-${counter++}`} position={calculateSpawnPoint(node)} rotation={rotationConstants.fromCamera} />
      paintingsArray.push(newPainting)
      continue;
    }
  }

  return paintingsArray;
}