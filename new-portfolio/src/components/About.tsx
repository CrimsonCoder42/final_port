import React, { FC, useEffect, useRef } from 'react';
import { styles } from "../styles";
import { motion, useScroll, useTransform } from 'framer-motion';
import { portpic } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const About: FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const yStars = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);

  return (
    <section className={"relative w-full h-screen mx-auto px-16"}>
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

      
    </section>
  );
}

export default About;

