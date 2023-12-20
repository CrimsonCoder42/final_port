import React, { FC, useEffect, Suspense, useState } from 'react';
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "../utils/motion2";
import { Canvas } from "@react-three/fiber";
import { aboutPlanet, astro } from '../assets';

import { div } from 'three/examples/jsm/nodes/Nodes.js';

const About: FC = () => {
  // move scrolled and setScrolled to App.tsx
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll event triggered");
      const isScrolled = window.scrollY > 800;  
      setScrolled(isScrolled);
      console.log("Is scrolled:", isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textContainerVariants = slideInFromLeft(0.1);
  const imageContainerVariants = slideInFromRight(0.6);
  const topDownContainerVariants = slideInFromTop;

  return (
  <>
    <section className="relative w-full min-h-screen mx-auto">
      <img 
        src={aboutPlanet}
        alt="Stylized Background"
        className="absolute top-0 left-0 right-0 w-full z-0" 
        style={{ transform: "rotate(180deg)", maxHeight: '1000px', minHeight: '450px', minWidth: '450px' }}
      />
<div className={`absolute inset-x-0 top-[40px] bottom-[40px] max-w-7xl mx-auto px-6 mdx:px-16`}>
  <div className="flex flex-col justify-between items-center w-full h-1/2">
    {/* Text Section */}
    <motion.div 
      className='relative text-center md:text-right'
      variants={topDownContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none text-white"
      >
        Passion. Focus. Craftsmanship.
      </motion.h1>
      <p className={'text-1 md:text-2xl lg:text-3xl xl:text-4xl font-black leading-none text-[#e8772e]'}>
        I develop 3D visuals, 
      </p>
    </motion.div>

    {/* Canvas and Image Section */}
    <div className='flex justify-start items-center w-full h-1/2 mt-10 md:mt-0'>
      <motion.div 
        className='relative w-full h-full flex justify-center md:justify-start items-center'
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className='w-1/2 h-full flex justify-center items-center'>
          <Canvas className='z-10'>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <mesh scale={2.5}>
                <sphereBufferGeometry args={[1, 100, 200]} />
                <MeshDistortMaterial
                  color="#e8772e"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </mesh>
            </Suspense>
          </Canvas>
          <motion.img 
            src={astro}
            alt="rocket man"
            className='absolute w-1/5 h-auto object-cover z-10'
            style={{ maxWidth: '640px', maxHeight: '800px', minHeight: '260px', minWidth: '260px'}}
          />
        </div>
      </motion.div>
    </div>
  </div>
</div>


    </section>
  </>
);

}

export default About;



