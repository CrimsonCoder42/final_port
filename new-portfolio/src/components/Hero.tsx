import React from 'react';
import { motion } from 'framer-motion';
import { portpic2 } from '../assets'; 
import { textVariant, zoomIn, staggerContainer } from '../utils/motion';

const Hero = () => {
  const containerVariants = staggerContainer(0.3);
  const titleVariants = textVariant(0.2);
  const subtitleVariants = textVariant(0.3);
  const imageVariants = zoomIn(0.3);

  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div 
        className="absolute inset-0 flex flex-col justify-center px-6 md:px-16"
        variants={titleVariants}
      >
        <motion.h1
          className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none text-white z-10"
          variants={titleVariants}
        >
          Hi, I'm <span className="text-orange-500">Devin</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-lg lg:text-xl leading-tight text-white z-10"
          variants={subtitleVariants}
        >
          I engineer sleek, web solutions.
        </motion.p>
      </motion.div>

      <motion.div 
        className='absolute bottom-0 left-0 right-0 flex justify-end items-end z-0'
        variants={imageVariants}
        style={{marginRight:'10%'}}
      >
        <motion.img 
          src={portpic2}
          alt="Profile Picture"
          className='w-1/3 md:w-1/2 md:max-w-none h-auto md:h-70 lg:h-90 object-cover'
          variants={imageVariants}
          style={{ maxWidth: '600px', maxHeight: '800px', minHeight: '500px', minWidth: '500px'}}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;










