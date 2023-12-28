import React, { Suspense, FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, GLTF } from "@react-three/drei";

// If you have a type for the GLTF model, you can use it here
interface GLTFResult extends GLTF {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.Material;
  };
}

const Planet: FC = () => {
  const earth = useGLTF("./planet/scene.gltf") as GLTFResult;

  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  );
};

const PlanetCanvas: FC = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCanvas;
