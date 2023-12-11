import React, { FC, useEffect, useRef, useState } from 'react';
import { styles } from "../styles";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
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



import ServiceCard from './Cards';

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

const About: FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

      useEffect(() => {
    const handleScroll = () => {
    console.log("Scroll event triggered");
    const isScrolled = window.scrollY > 800;  
    setScrolled(isScrolled);
    console.log("Is scrolled:", isScrolled);
  };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={"relative w-full min-h-screen mx-auto px-16"}>

      <div className='mt-10 flex flex-wrap gap-10 justify-center'>
  <AnimatePresence>
    {scrolled && services.map((service, index) => (
      <motion.div 
        className='w-full md:w-1/2 lg:w-1/3 mx-auto' 
        key={service.title}
        initial={rotateAnimation.initial}
        animate={rotateAnimation.animate}
        exit={rotateAnimation.exit}
      >
        <ServiceCard index={index} {...service} />
      </motion.div>
    ))}
  </AnimatePresence>
</div>
      
    </section>
  );
}

export default About;