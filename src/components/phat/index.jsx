import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Phat = () => {
  const { scene } = useLoader(GLTFLoader, "/models/phat1.glb");
  return <group>{scene && <primitive object={scene} />}</group>;
};

export default Phat;
