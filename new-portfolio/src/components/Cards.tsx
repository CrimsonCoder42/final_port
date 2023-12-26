import React, { FC, useEffect, Suspense, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


import Cube from './Cube'; 
import Text3D from './Text3D'; 

interface ServiceCardProps {
  title: string;
  icon?: string;
  index?: number;
  tech: string[];
}
                //add different shapes and check  the lighting of the canvas     
const DisplayCard: React.FC<ServiceCardProps> = ({ title, icon, tech }) => {

  const renderShape = (icon, title) => {
    switch(icon) {
      case 'text-icon':
        return <Text3D text={title}/>;
      // Add cases for other icons
      default:
        return <Cube />;
    }
  };

  return (
    <>
      
        <div
          className=' min-h-[360px] flex justify-evenly items-center flex-col rounded-[20px] bg-tertiary shadow-card'
        >
          <div className="py-5 px-12 flex justify-evenly items-center flex-col">
            <Canvas 
            className="z-10"
            style={{ minHeight: '100px', minWidth: '250px', marginTop: '10px' }}
            camera={{ position: [0, 0, 30], fov: 50 }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.9} />
              <directionalLight position={[3, 2, 1]} />
              {renderShape(icon, title)} 
              <OrbitControls enableZoom={false} autoRotate maxDistance={50} />
            </Suspense>
          </Canvas>
          </div>

          <div className='flex flex-wrap justify-evenly items-center md:flex-row'>
            <AnimatePresence mode="popLayout">
              {tech.map((item, idx) => (
                <motion.div
                  whileHover={{ scale: 1.50, rotate: "3.5deg" }}
                  whileInView={{ opacity: 1, transition: { duration: 2 } }} // Scroll-triggered animation
                  initial={{ opacity: 0 }} // Initial state before scrolling into view
                  key={idx}
                  className='w-1/4 p-1'
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


