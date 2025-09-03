import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

function NotebookModel() {
  // Load materials
  const materials = useLoader(MTLLoader, "/models/Lowpoly_Notebook_2.mtl");

  // Load OBJ with MTL
  const obj = useLoader(OBJLoader, "/models/Lowpoly_Notebook_2.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} scale={0.5} position={[0, -1, 0]} />;
}

const Notebook3D = () => {
  return (
    <div className="w-full h-[500px] bg-gray-100 rounded-xl shadow-lg">
      <Canvas camera={{ position: [2, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <NotebookModel />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Notebook3D;
