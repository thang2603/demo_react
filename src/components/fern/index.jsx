import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Fern = () => {
  const { scene } = useLoader(GLTFLoader, "../models/fern.glb");
  return <group>{scene && <primitive object={scene} />}</group>;
};

export default Fern;
