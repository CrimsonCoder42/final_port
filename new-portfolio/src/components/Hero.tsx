import React, { FC, useEffect, Suspense, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { portpic2 } from '../assets';
import { slideInFromLeft, slideInFromRight} from '../utils/motion2';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from './threeDComp/Cube';
import { linkedin, github } from '../assets';


const Hero = () => {
  // Variants for text and image containers
  const textContainerVariants = slideInFromLeft(0.1);
  const imageContainerVariants = slideInFromRight(0.6);

  return (
    <motion.section className="relative w-full h-screen mt-auto">
      {/* Text and Canvas Container */}
      <motion.div 
        className="absolute bottom-60 flex flex-col items-start justify-center px-6 md:px-16 h-full"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text and Canvas Inline */}
        <div className="flex items-center mt-20 z-10">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-white"
          >
            Hi, I'm
          </motion.h1>
          <Canvas
            className="z-10"
            style={{ maxHeight: '150px', maxWidth: '150px' }}
            camera={{ position: [20, 20, 20], fov: 50 }}
          >
              <Cube /> 
              
          </Canvas>  
        </div>

        {/* Text Below Canvas and Title */}
        <motion.p
          className='text-1 md:text-2xl lg:text-3xl xl:text-4xl font-black leading-none text-white'
        >
          I craft polished <span className='text-[#e8772e]'>web solutions</span><br /> and <span className='text-[#e8772e]'>digital presences</span>.
          <br/>
          <div className='w-1/4 flex flex-row items-start gap-1 justify-center'>
            <a className='w-full' href="https://www.linkedin.com/in/devin-anderson-31308b59/" target="_blank" rel="noopener noreferrer">
              <img className='w-full' src={linkedin} alt="LinkedIn" />
            </a>
            <a className='w-full' href="https://github.com/CrimsonCoder42" target="_blank" rel="noopener noreferrer">
              <img className='w-full' src={github} alt="GitHub" />
            </a>
          </div>

        </motion.p>
      </motion.div>

      {/* Image Container */}
      <motion.div 
        className='absolute bottom-0 right-0 flex justify-end items-end z-0 w-full md:w-1/2 lg:w-1/2'
        style={{ maxWidth: '60vh' }}
        variants={imageContainerVariants}
      >
        <motion.img 
          src={portpic2}
          alt="Profile Picture"
          className='w-full h-auto object-cover ' // Full width, auto height for responsiveness
          style={{ maxWidth: '70vh'}} // Minimum height for smaller screens
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;














