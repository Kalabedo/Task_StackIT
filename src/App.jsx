import { Canvas } from "@react-three/fiber";
import { Experience } from "./Components/Experience";
import { Physics } from "@react-three/rapier";

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 5, 5], fov: 50 }}
        shadows
        onPointerDown={(e) => e.target.requestPointerLock()}
      >
        {/* Scene */}
        <Physics>
          <Experience />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
