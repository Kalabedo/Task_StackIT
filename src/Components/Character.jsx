import { KeyboardControls, Outlines } from "@react-three/drei";
import Ecctrl from "ecctrl";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
];

export const Character = () => {
  return (
    <KeyboardControls map={keyboardMap}>
      <Ecctrl
        capsuleRadius={0.4}
        capsuleHalfHeight={0.5}
        camInitDis={-10}
        camMaxDis={-12}
        camMinDis={-8}
        turnSpeed={20} // 15 default
        sprintMult={3}
        autoBalance={true}
        autoBalanceSpringK={0.3} // 0.3 default
        autoBalanceDampingC={0.05} // 0.03 default
        autoBalanceSpringOnY={0.5} // 0.5 default
        autoBalanceDampingOnY={0.015} // 0.015 default
        mode={"CameraBasedMovement"}
      >
        <mesh position={[0, 0, 0]} receiveShadow castShadow>
          <capsuleGeometry args={[0.4, 1, 24, 24]} />
          <meshStandardMaterial
            color="#ff6347"
            flatShading
            envMapIntensity={0}
          />
          <Outlines color="#000000" thickness={3} renderOrder={1} />
        </mesh>
      </Ecctrl>
    </KeyboardControls>
  );
};
