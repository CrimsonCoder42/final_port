import React, { FC, useEffect, Suspense, useState } from 'react';
import { OrbitControls } from "@react-three/drei";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { rotateAnimation } from "../utils/motion2";
import { Canvas } from "@react-three/fiber";
import Cube from './Cube'; 
import { aboutPlanet } from '../assets';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

import { styles } from "../styles";

const About: FC = () => {
  // move scrolled and setScrolled to App.tsx
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
    <>
    <section className="relative w-full min-h-screen mx-auto">
        <motion.img 
          src={aboutPlanet}
          alt="Stylized Background"
          className="absolute top-0 left-0 right-0 w-full z-0" 
          style={{ transform: "rotate(180deg)" }}
        />
        <div className={`absolute inset-x-0 top-[120px] bottom-[120px] max-w-7xl mx-auto ${styles.paddingX} mdx:flex mdx:flex-row mdx:items-start gap-5`}>

          {/* Text on the Right (on large screens) */}
          <div className="flex-1 flex flex-col justify-start">
            <motion.p
              variants={fadeIn("left", "spring", 0.1, 1)}
              className="text-lg md:text-lg lg:text-xl leading-tight text-white z-10"
            >
              As a passionate and focused software professional, I excel in roles requiring meticulous attention to detail and critical analysis. Known as a fast learner, I adeptly design software, create comprehensive documentation, and develop innovative engineering approaches. My expertise as a craftsperson in software is evident in my familiarity with advanced technical development techniques, tools, and processes. Let's connect!
            </motion.p>
          </div>

          
        </div>
      </section>

    </>
  );
}

export default About;



