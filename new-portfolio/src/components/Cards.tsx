import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface ServiceCardProps {
  title: string;
  icon?: string;
  index: number;
  tech: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon, tech }) => {
  return (
    <>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full violet-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }} // Semi-transparent background
        >
          <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img
              src={icon}
              alt='web-development'
              className='w-full h-auto object-contain'
            />
          </div>

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

          <div className='flex flex-wrap justify-evenly items-center md:flex-row'>
            <AnimatePresence mode="popLayout">
              {tech.map((item, idx) => (
                <motion.div
                  whileHover={{ scale: 1.50, rotate: "3.5deg" }}
                  whileInView={{ opacity: 1, transition: { duration: 0.5 } }} // Scroll-triggered animation
                  initial={{ opacity: 0 }} // Initial state before scrolling into view
                  key={idx}
                  className='w-1/3 md:w-1/4 lg:w-1/6 p-2'
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
      </motion.div>
    </>
  );
}

export default ServiceCard;


