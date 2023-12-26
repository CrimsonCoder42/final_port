import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Define the props for Shape
type ShapeProps = {
  text: string;
};

const Shape: React.FC<ShapeProps> = ({ text }) => {
  const textRef = useRef();

  return (
    <group scale={[3, 3, 3]} rotation={[0, 0, 0]}>
      <Text
        ref={textRef}
        fontSize={3}
        color="#e8772e"
        castShadow
        receiveShadow
      >
        {text}
      </Text>
    </group>
  );
};

const ThreeDText: React.FC<ShapeProps> = ({ text }) => {
  // You can change the text here
  const dynamicText = text;

  return (
    <>
      <Shape text={dynamicText} />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
    </>
  );
};

export default ThreeDText;

