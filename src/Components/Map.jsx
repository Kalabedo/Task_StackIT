import { Edges, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export const Map = () => {
  const { nodes } = useGLTF("./models/Map.glb");
  return (
    <>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh geometry={nodes.Map.geometry} castShadow receiveShadow>
          <meshStandardMaterial color="#cce1e9" side={THREE.DoubleSide} />
        </mesh>
      </RigidBody>
      <mesh geometry={nodes.Map.geometry} scale={0.999}>
        <meshBasicMaterial transparent opacity={0} />
        <Edges color={"#000000"} renderOrder={10} />
      </mesh>
    </>
  );
};
