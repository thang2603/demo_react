import logo from "./logo.svg";
import "./App.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Fern from "./components/fern";
import Phat from "./components/phat";
import Wood from "./components/wood";
function App() {
  return (
    <h1>demo mà cũng sai</h1>
    // <Canvas style={{ backgroundColor: "#cccccc", height: "100vh" }}>
    //   <OrbitControls></OrbitControls>
    //   <directionalLight
    //     position={[3.3, 1.0, 4.4]}
    //     castShadow
    //     intensity={Math.PI * 2}
    //   />
    //   <axesHelper scale={2} />
    //   <Phat />
    // </Canvas>
  );
}

export default App;
