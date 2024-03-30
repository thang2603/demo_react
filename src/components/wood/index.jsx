import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Wood = () => {
  const { scene } = useLoader(GLTFLoader, "../models/wood2.glb");
  return <group scale={3}>{scene && <primitive object={scene} />}</group>;
};

export default Wood;
