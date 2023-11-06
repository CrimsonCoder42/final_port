import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { portpic } from "../assets";
import { styles } from "../styles";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero: FC = () => {
  return (
<motion.section
      className="relative w-full h-screen mx-auto overflow-hidden"
      initial="initial"
      animate="animate"
    >
      {/* Use flex-col for the default mobile layout and flex-row for md screens and above */}
      {/* Double the gap size from gap-5 to gap-10 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16 mx-auto h-full">
        {/* Swap the order of text and image containers for md screens */}
        {/* Add 'order-first md:order-last' to the text container to make it come first on mobile and last on md screens */}
        <motion.div className="order-2 md:order-1">
          <motion.h1
            className="text-white font-black leading-none text-4xl md:text-5xl lg:text-6xl"
            variants={textVariants}
          >
            Hi, I'm <span className='text-orange-500'>Hero</span>
          </motion.h1>
          <motion.p
            className="text-white text-base md:text-lg lg:text-xl leading-tight"
            variants={textVariants}
          >
            I develop 3D visuals, user interfaces and web applications
          </motion.p>
        </motion.div>

        {/* Set the image container to 'order-last md:order-first' to make it come last on mobile and first on md screens */}
        <motion.div className='order-1 md:order-2 flex justify-center md:justify-start w-full md:w-auto'>
          <motion.img 
            src={portpic}
            alt="Profile Picture"
            className='w-40 h-40 rounded-full'
            variants={textVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero;



