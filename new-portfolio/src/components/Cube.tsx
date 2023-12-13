// Cube.tsx

import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

const Cube = () => {
  const meshRef = useRef();
  const textRef = useRef();
  const [scale, setScale] = useState(1);
  const { size } = useThree();

  useEffect(() => {
    // Calculate a new scale based on the canvas size
    const scaleBasedOnWidth = size.width / 500;
    const scaleBasedOnHeight = size.height / 500;
    const newScale = Math.min(scaleBasedOnWidth, scaleBasedOnHeight);
    setScale(newScale);
  }, [size.width, size.height]);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[scale, scale, scale]}>
      <boxGeometry args={[55, 55, 55]}/>
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#e8772e"]} />
          <Text ref={textRef} fontSize={3} color="#160666">
            Devin
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
