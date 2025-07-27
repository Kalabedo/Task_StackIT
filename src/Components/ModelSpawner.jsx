import * as THREE from "three";
import { useEffect, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { Edges } from "@react-three/drei";

const COLORS = [
  "#e63946",
  "#457b9d",
  "#2a9d8f",
  "#f4a261",
  "#f72585",
  "#7209b7",
];
const SHAPES = ["sphere", "box", "cylinder"];
const MAX = 3;

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function randomScale(min = 0.5, max = 1.5) {
  return THREE.MathUtils.randFloat(min, max);
}

function randomRotation() {
  return [THREE.MathUtils.randFloatSpread(2 * Math.PI), 0, 0];
}

export const ModelSpawner = () => {
  const [spawned, setSpawned] = useState([]);
  const [entered, setEntered] = useState(false);

  const spawn = () => {
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const color = randomColor();
    const scale = randomScale();
    const rotation = randomRotation();

    const newItem = {
      id: crypto.randomUUID(),
      shape,
      color,
      scale,
      position: [7, 10, 0],
      rotation,
    };

    setSpawned((prev) => {
      const updated = [...prev, newItem];
      // Wenn mehr als MAX: erstes entfernen
      if (updated.length > MAX) updated.shift();
      return [...updated];
    });
  };

  useEffect(() => {
    if (entered) {
      spawn();
    }
  }, [entered]);

  return (
    <>
      {/* Spawner plattform */}
      <mesh position={[0, 5.6, 0]}>
        <cylinderGeometry args={[2, 2, 0.2, 16]} />
        <meshBasicMaterial color={"#8add75"} transparent opacity={0.5} />
        <Edges color={"#2b6633"} />
      </mesh>

      {/* Spawner sensor */}
      {/* Sensor */}
      <RigidBody
        type="fixed"
        position={[0, 6.5, 0]}
        colliders="cuboid"
        sensor
        onIntersectionEnter={() => setEntered(true)}
        onIntersectionExit={() => setEntered(false)}
      >
        <mesh>
          <cylinderGeometry args={[2, 2, 3, 16]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>

      {/* Spawner models */}
      {spawned.map((item) => (
        <RigidBody
          key={item.id}
          colliders={
            item.shape === "sphere"
              ? "ball"
              : item.shape === "box"
              ? "cuboid"
              : "hull"
          }
          position={item.position}
          rotation={item.rotation}
          scale={[item.scale, item.scale, item.scale]}
        >
          <mesh castShadow receiveShadow>
            {item.shape === "sphere" && <sphereGeometry args={[1, 16, 16]} />}
            {item.shape === "box" && <boxGeometry args={[1, 1, 1]} />}
            {item.shape === "cylinder" && (
              <cylinderGeometry args={[0.5, 0.5, 1, 16]} />
            )}
            <meshStandardMaterial color={item.color} />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
};
