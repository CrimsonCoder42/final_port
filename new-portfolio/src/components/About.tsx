import React, { FC, useEffect, Suspense, useState } from 'react';
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "../utils/motion2";
import { Canvas } from "@react-three/fiber";
import { aboutPlanet } from '../assets';

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
        <motion.img 
          src={aboutPlanet}
          alt="Stylized Background"
          className="absolute top-0 left-0 right-0 w-full z-0" 
          style={{ transform: "rotate(180deg)", maxHeight: '1000px', minHeight: '450px', minWidth: '450px' }}
          
        />
        <div className={`absolute inset-x-0 top-[120px] bottom-[120px] max-w-7xl mx-auto px-6 mdx:px-16 mdx:flex mdx:flex-row mdx:items-start gap-5`}>

          {/* Text and Canvas Inline */}
          <div className='flex justify-center mdx:justify-start'>
          
        </div>

        <div className={'mdx:mt-0 text-center md:text-left '}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-white"
          >
            Passion. Focus. <span className='text-[#e8772e]'>Craftsmanship.</span>
          </motion.h1>
          <p className={'mt-2 text-white-100'}>
            I develop 3D visuals, user <br className='mdx:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
      <motion.div 
        className='absolute bottom-0 right-0 flex justify-end items-end z-0'
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
        style={{ marginRight: '5%' }}
      >
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#e8772e"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        {/* <motion.img 
          src={portpic2}
          alt="Profile Picture"
          className='w-1/2 md:w-1/2 md:max-w-none h-auto md:h-70 lg:h-90 object-cover'
          style={{ maxWidth: '800px', maxHeight: '1000px', minHeight: '450px', minWidth: '450px'}}
        /> */}
      </motion.div>
          
          
        
      </section>

    </>
  );
}

export default About;



