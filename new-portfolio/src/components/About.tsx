import React, { FC, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const yStars = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);

  // Log a message every time scrollYProgress changes
  useEffect(() => {
    scrollYProgress.onChange(latest => {
      console.log("Scroll Progress:", latest);
    });
  }, [scrollYProgress]);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden" ref={ref}>
      <motion.div
        className="absolute inset-0 w-full h-full bg-blue-500"
        style={{ y: yStars }}
      >
        Debugging Content
      </motion.div>

      {/* Rest of your content */}
    </section>
  );
}

export default About;

