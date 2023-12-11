import React, { FC, useEffect, Suspense, useState } from 'react';
import { OrbitControls } from "@react-three/drei";
import { styles } from "../styles";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { rotateAnimation } from "../utils/motion2";
import { Canvas } from "@react-three/fiber";
import Cube from './Cube'; 

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
    <section className={"relative w-full min-h-screen mx-auto px-16"}>

      <motion.div variants={textVariant(2)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "spring", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a passionate and focused software professional, I excel in roles requiring meticulous attention to detail and critical analysis. Known as a fast learner, I adeptly design software, create comprehensive documentation, and develop innovative engineering approaches. My expertise as a craftsperson in software is evident in my familiarity with advanced technical development techniques, tools, and processes.Let's connect!
      </motion.p>

      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
      
    </section>
  );
}

export default About;

