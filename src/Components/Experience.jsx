import { KeyboardControls } from "@react-three/drei";
import { Character } from "./Character";
import Ecctrl from "ecctrl";
import { Map } from "./Map";
import { Elevator } from "./Elevator";
import { Light } from "./Light";
import { ModelSpawner } from "./ModelSpawner";

export const Experience = () => {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Ecctrl
          disableControls={true}
          debug
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
          <Character />
        </Ecctrl>
      </KeyboardControls>

      <Map />

      <Elevator />

      <ModelSpawner />

      <Light />
    </>
  );
};
