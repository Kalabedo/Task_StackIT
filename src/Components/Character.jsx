import { Outlines } from "@react-three/drei";

export const Character = () => {
  return (
    <mesh position={[0, 0, 0]} receiveShadow castShadow>
      <capsuleGeometry args={[0.4, 1, 24, 24]} />
      <meshStandardMaterial color="#ff6347" flatShading envMapIntensity={0} />
      <Outlines color="#000000" thickness={3} renderOrder={1} />
    </mesh>
  );
};
