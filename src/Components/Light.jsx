import { Environment, Helper, SoftShadows } from "@react-three/drei";
import * as THREE from "three";

export const Light = () => {
  return (
    <>
      <directionalLight
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        position={[10, 20, 10]}
        intensity={3}
        castShadow
        shadow-bias={0.00001}
        shadow-normalBias={0.04}
        color={"#bad2d8"}
      >
        <orthographicCamera
          attach="shadow-camera"
          near={1}
          far={32}
          top={15}
          right={18}
          left={-18}
          bottom={-15}
        >
          {/* <Helper type={THREE.CameraHelper} /> */}
        </orthographicCamera>
      </directionalLight>
      <ambientLight intensity={0.8} color={"#d8d1bd"} />

      <Environment
        files={"./HDRI/cloudy.hdr"}
        background
        backgroundBlurriness={0.2}
        environmentIntensity={0.5}
      />

      {/* Shadow */}
      <SoftShadows samples={40} size={15} />
    </>
  );
};
