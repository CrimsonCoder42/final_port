import React, { FC, useEffect, Suspense, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


import Cube from './Cube'; 
import AtomShape from './Atom'; 

interface ServiceCardProps {
  title: string;
  icon?: string;
  index: number;
  tech: string[];
}
                //add different shapes and check  the lighting of the canvas     
const DisplayCard: React.FC<ServiceCardProps> = ({ title, icon, tech }) => {

  const renderShape = (icon) => {
    switch(icon) {
      case 'atom-icon':
        return <AtomShape />;
      // Add cases for other icons
      default:
        return <DefaultShape />;
    }
  };

  return (
    <>
      
        <div
          className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <div className="justify-center ">
            <Canvas 
            className="z-10"
            style={{ maxHeight: '150px', maxWidth: '150px' }}
            camera={{ position: [20, 20, 20], fov: 50 }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube /> 
              <OrbitControls enableZoom={false} autoRotate maxDistance={50} />
            </Suspense>
          </Canvas>
          </div>

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

          <div className='flex flex-wrap justify-evenly items-center md:flex-row'>
            <AnimatePresence mode="popLayout">
              {tech.map((item, idx) => (
                <motion.div
                  whileHover={{ scale: 1.50, rotate: "3.5deg" }}
                  whileInView={{ opacity: 1, transition: { duration: 2 } }} // Scroll-triggered animation
                  initial={{ opacity: 0 }} // Initial state before scrolling into view
                  key={idx}
                  className='w-1/4 md:w-1/4 lg:w-1/6 p-2'
                >
                  <img
                    src={item}
                    alt='web-development'
                    className='w-full h-auto object-contain'
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
    </>
  );
}

export default DisplayCard;


