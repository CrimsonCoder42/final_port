import React, { useRef, useEffect, useState } from "react";
import { Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

type ShapeProps = {
  text: string;
};

const ThreeDText: React.FC<ShapeProps> = ({ text }) => {
  const textRef = useRef();
  const [scale, setScale] = useState([2, 2, 2]);

  useEffect(() => {
    const handleResize = () => {
      // Example: Adjust scale based on window width
      const newScale = window.innerWidth < 700 ? [2.5, 2.5, 2.5] : [1.5, 1.5, 1.5];
      setScale(newScale);
    };

    window.addEventListener('resize', handleResize);

    // Initial scaling
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <group scale={scale} rotation={[0, 0, 0]}>
        <Text
          ref={textRef}
          fontSize={3}
          color="#fff"
          castShadow
          receiveShadow
        >
          {text}
        </Text>
      </group>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
    </>
  );
};

export default ThreeDText;


