import React from 'react';
import { motion } from 'framer-motion';
import { portpic, portpic1, portpic2 } from '../assets';
import { textVariant, zoomIn, staggerContainer } from '../utils/motion';

const Hero = () => {
  const containerVariants = staggerContainer(0.1);
  const titleVariants = textVariant(0.2);
  const subtitleVariants = textVariant(0.3);
  const imageVariants = zoomIn(0.3);

  return (
    <motion.section
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-30 md:gap-35 lg:gap-40 px-6 md:px-16 w-full h-full max-w-7xl">
        
        <motion.div className='flex justify-center items-center mb-5 md:mb-0' variants={imageVariants}>
          <motion.img 
            src={portpic2}
            alt="Profile Picture"
            className='w-60 h-70 md:w-50 md:h-70 lg:w-80 lg:h-90 '
            variants={imageVariants}
          />
        </motion.div>

        <motion.div className="flex flex-col items-center justify-center" variants={titleVariants}>
          <motion.h1
            className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none text-white"
            variants={titleVariants}
          >
            Hi, I'm <span className="text-orange-500">Devin</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-lg lg:text-xl leading-tight text-white"
            variants={subtitleVariants}
          >
            I engineer sleek, web solutions.
          </motion.p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Hero;








