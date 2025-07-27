import { Edges } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

export const Elevator = () => {
  const [entered, setEntered] = useState(false);
  const elevatorRef = useRef();

  const [state, setState] = useState("idle"); // idle | goingUp | atTop | goingDown

  useFrame((_, delta) => {
    if (!elevatorRef.current) return;

    const pos = elevatorRef.current.translation();

    switch (state) {
      case "idle":
        if (entered) setState("goingUp");
        break;

      case "goingUp":
        if (pos.y >= 4.9) {
          elevatorRef.current.setNextKinematicTranslation({
            x: pos.x,
            y: 4.9,
            z: pos.z,
          });
          setState("atTop");
        } else {
          elevatorRef.current.setNextKinematicTranslation({
            x: pos.x,
            y: pos.y + delta * 2,
            z: pos.z,
          });
        }
        break;

      case "atTop":
        if (!entered) setState("goingDown");
        break;

      case "goingDown":
        if (pos.y <= 0) {
          elevatorRef.current.setNextKinematicTranslation({
            x: pos.x,
            y: -0.1,
            z: pos.z,
          });
          setState("idle");
        } else {
          elevatorRef.current.setNextKinematicTranslation({
            x: pos.x,
            y: pos.y - delta * 2,
            z: pos.z,
          });
        }
        break;
    }
  });

  return (
    <>
      {/* Elevator */}
      <RigidBody
        ref={elevatorRef}
        type="kinematicPosition"
        position={[0, -0.1, 0]}
        colliders="cuboid"
      >
        <mesh position={[-12.001, 0, 7.5]} castShadow receiveShadow>
          <boxGeometry args={[4, 0.2, 5]} />
          <meshStandardMaterial color="#ffffff" />
          <Edges color={"#000000"} />
        </mesh>
      </RigidBody>

      {/* Sensor */}
      <RigidBody
        type="fixed"
        position={[-12.001, 4, 7.5]}
        colliders="cuboid"
        sensor
        onIntersectionEnter={() => setEntered(true)}
        onIntersectionExit={() => setEntered(false)}
      >
        <mesh>
          <boxGeometry args={[4, 8, 5]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    </>
  );
};
