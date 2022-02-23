import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

/**
 * Component to define custom camera ant controls
 */
// FIXME: Jittering movement. Should be smooth. Probably onKeyDown should add velocity and stop it onKeyUp
// TODO: Collision detection
export default function CustomControls() {
  const controls = useRef<any>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isFirstConfig, setIsFirstConfig] = useState(true);

  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0.5, 1.8, -2);
    camera.lookAt(1, 1.8, -2);
  }, []);

  const onKeyDown = useCallback(function (event: KeyboardEvent) {
    switch (event.code) {
      case "KeyW":
        controls.current.moveForward(0.11);
        break;
      case "KeyA":
        controls.current.moveRight(-0.11);
        break;
      case "KeyS":
        controls.current.moveForward(-0.11);
        break;
      case "KeyD":
        controls.current.moveRight(0.11);
        break;
    }
  }, []);

  useEffect(() => {
    if (controls.current && isLocked) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }

    if (controls.current && isFirstConfig) {
      controls.current.addEventListener("lock", () => {
        setIsLocked(true);
      });
      controls.current.addEventListener("unlock", () => {
        setIsLocked(false);
      });

      setIsFirstConfig(false);
    }
  }, [controls.current, isLocked]);

  return <PointerLockControls ref={controls} />;
}
