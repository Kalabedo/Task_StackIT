import { Canvas } from "@react-three/fiber";
import { Experience } from "./Components/Experience";
import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import { Light } from "./Components/Light";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 5, 5], fov: 50 }} shadows>
        {/* Scene */}
        <Physics>
          <Experience />
        </Physics>

        {/* Helpers */}
        {/* <OrbitControls target={[0, 0, 0]} /> */}
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={["#d35959", "#56a856", "#5353a8"]}
            labelColor="white"
          />
        </GizmoHelper>

        <Light />
        <color attach="background" args={["#41dada"]} />
      </Canvas>
    </>
  );
}

export default App;
