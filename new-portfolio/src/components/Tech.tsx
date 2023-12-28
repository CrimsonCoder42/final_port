import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideInFromTop } from "../utils/motion2";

import { 
  golang,
  githubActions,
  devOps,
  ansible,
  aws,
  proxmox,
  flask,
  django,
  mySql,
  backEnd, 
  css,
  docker,
  git,
  html,
  javascript,
  mongodb,
  node,
  python,
  reactjs,
  redux,
  tailwind,
  typescript, } from '../assets';



import DisplayCard from './Cards';

const services = [
  {
    title: "Web Dev",
    icon: 'text-icon',
    tech:[html, css,javascript,reactjs,redux,tailwind,typescript]
  },
  {
    title: "Backend",
    icon: 'text-icon',
    tech:[node,mongodb, python, django, flask, mySql, golang]
  },
  {
    title: "DevOps",
    icon: 'text-icon',
    tech:[docker,git,aws, proxmox, ansible, githubActions]
  }
];

const Tech: FC = () => {
  return (
<section className={"relative w-full min-h-screen mx-auto px-4 md:px-16"}> {/* Adjusted padding */}

  <div className='mt-10 md:mt-20 flex flex-wrap gap-3 md:gap-5'> {/* Adjusted margin and gap */}
    <div className='w-full'>
      <h1 className='text-3xl md:text-6xl font-bold text-white'>Tech Stack</h1> {/* Adjusted text size */}
      <p className='text-md md:text-xl text-gray-400 mt-3 md:mt-5'>
        I have experience working with a range of technologies. 
        I am always learning new things and am excited to learn more.
      </p>
    </div>
  </div>
    <div className='mt-10 flex flex-wrap gap-3 md:gap-5'> {/* Adjusted margin and gap */}
      <AnimatePresence>
      {services.map((service, index) => (
        <motion.div 
          className='w-1/2 md:w-1/6 lg:w-1/6 min-w-[260px] mx-auto orange-pink-gradient p-[1px] rounded-[20px] shadow-card'
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={service.title}
        >
          <DisplayCard index={index} {...service} />
        </motion.div>
      ))}
    </AnimatePresence>

  </div>
  
</section>

  );
}

export default Tech;