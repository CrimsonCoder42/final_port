import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { rotateAnimation } from "../utils/motion2";

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
  webDev, 
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
    title: "Web Development",
    icon: webDev,
    tech:[html, css,javascript,reactjs,redux,tailwind,typescript]
  },
  {
    title: "Backend Engineering",
    icon: backEnd,
    tech:[node,mongodb, python, django, flask, mySql, golang]
  },
  {
    title: "Cloud & DevOps",
    icon: devOps,
    tech:[docker,git,aws, proxmox, ansible, githubActions]
  }
];

const Tech: FC = () => {
  return (
    <section className={"relative w-full min-h-screen mx-auto px-16"}>

      <div className='mt-10 flex flex-wrap gap-10 justify-center'>
        <AnimatePresence>
          {services.map((service, index) => (
            <motion.div 
              className='w-full md:w-1/2 lg:w-1/3 mx-auto' 
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