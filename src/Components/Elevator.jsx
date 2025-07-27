import { Edges } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState, useEffect } from "react";

/**
 * Elevator component simulates elevator platform.
 *
 * - Moves up when a character enters the elevator sensor.
 * - Moves down when the character exits at the top.
 * - Uses a timer to delay movement transitions.
 * - Elevator movement is handled via kinematic translation in useFrame.
 *
 * State transitions:
 * - "idle": Elevator is at the bottom, waiting for entry.
 * - "waitingUp": Character entered, waiting before going up.
 * - "goingUp": Elevator is moving up.
 * - "atTop": Elevator reached the top, waiting for exit.
 * - "waitingDown": Character exited, waiting before going down.
 * - "goingDown": Elevator is moving down.
 */

export const Elevator = () => {
  const [entered, setEntered] = useState(false);
  const elevatorRef = useRef();

  const [state, setState] = useState("idle"); // idle | goingUp | atTop | goingDown | waitingUp | waitingDown
  const timerRef = useRef(null);

  useEffect(() => {
    // wenn char in elevator, kurz warten, dann hochfahren
    if (entered && state === "idle") {
      setState("waitingUp");
      timerRef.current = setTimeout(() => {
        setState("goingUp");
      }, 500);
    }

    // wenn char aus elevator, kurz warten, dann runterfahren
    if (!entered && state === "atTop") {
      setState("waitingDown");
      timerRef.current = setTimeout(() => {
        setState("goingDown");
      }, 500);
    }

    // cleanup timer
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [entered]);

  useFrame((_, delta) => {
    if (!elevatorRef.current) return;
    const pos = elevatorRef.current.translation();

    switch (state) {
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
