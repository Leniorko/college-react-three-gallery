import { Canvas } from "@react-three/fiber";
import Box from "./Box";

export default function Scene() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
