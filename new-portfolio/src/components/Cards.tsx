import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

// Define an interface for the component's props
interface ServiceCardProps {
  title: string;
  icon?: string;
  index: number;
  tech: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon, tech }) => (
  <>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full violet-gradient p-[1px] rounded-[20px] shadow-card'
    >
      
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
  <div className='flex flex-wrap justify-evenly items-center md:flex-row'>
  {tech.map((item, idx) => (
    <div key={idx} className='w-1/3 md:w-1/4 lg:w-1/6 p-2'>
      <img
        src={item}
        alt='web-development'
        className='w-full h-auto object-contain'
      />
    </div>
  ))}
</div>

        </div>
    </motion.div>
  </>
);

export default ServiceCard;
