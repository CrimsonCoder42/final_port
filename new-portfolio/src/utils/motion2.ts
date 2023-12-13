import { Variants } from "framer-motion";

const slideInFromLeft = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});

const slideInFromRight = (delay: number): Variants => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});

const slideInFromTop: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const rotateAnimation: Variants = {
  initial: {
    rotate: "180deg",
    scale: 0,
    y: 0
  },
  animate: {
    rotate: "0deg",
    scale: 1,
    y: [0, 150, -150, -150, 0],
    transition: {
      duration: 1.5,
      ease: "backInOut",
      times: [0, 0.25, 0.5, 0.85, 1]
    }
  },
  exit: {
    rotate: "180deg",
    scale: 0,
    y: 0,
    transition: {
      duration: 2,
      ease: "backInOut",
    }
  }
};

// Export the animations for use
export { slideInFromLeft, slideInFromRight, slideInFromTop };

