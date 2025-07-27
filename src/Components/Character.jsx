export const Character = () => {
  return (
    <mesh position={[0, 0, 0]} castShadow>
      <capsuleGeometry args={[0.4, 1, 24, 24]} />
      <meshStandardMaterial color="#ff6347" />
    </mesh>
  );
};
