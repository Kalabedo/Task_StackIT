import { Grid } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export const Ground = () => {
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      <Grid
        position={[0, 0.005, 0]}
        args={[20, 20]}
        cellSize={1}
        cellThickness={1}
        sectionSize={2}
        cellColor={"#949494"}
        sectionColor={"#7c7c7c"}
      />

      <mesh position={[0, 5, 0]} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="#f0f0f0" />
      </mesh>
      <Grid
        position={[0, 5.005, 0]}
        args={[20, 20]}
        cellSize={1}
        cellThickness={1}
        sectionSize={2}
        cellColor={"#949494"}
        sectionColor={"#7c7c7c"}
      />
    </RigidBody>
  );
};
