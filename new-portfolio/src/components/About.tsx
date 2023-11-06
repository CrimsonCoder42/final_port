import React, { FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { styles } from "../styles";
import { portpic } from "../assets";

const About: FC = () => {
  const ref = useRef(null);

  // Scroll-related motion values
  const { scrollYProgress } = useScroll({ target: ref });
  const yStars = useTransform(scrollYProgress, [0, 1], ['-10%', '-50%']);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden" ref={ref}>
      {/* Parallax Background with stars */}
      <motion.div
        className="bg-stars-pattern absolute inset-0 w-full h-full"
        style={{ y: yStars }}
      />

      {/* Foreground content */}
      <div className="relative z-10">
        <div
          className={`absolute inset-x-0 top-[120px] bottom-[120px] max-w-7xl mx-auto ${styles.paddingX} mdx:flex mdx:flex-row mdx:items-start gap-5`}
        >
          {/* Content here */}
        </div>
      </div>
    </section>
  )
}

export default About;