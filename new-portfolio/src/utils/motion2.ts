import { Variants } from "framer-motion";

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
      duration: 1,
      ease: "backInOut",
      times: [0, 0.25, 0.5, 0.85, 1]
    }
  },
  exit: {
    rotate: "180deg",
    scale: 0,
    y: 0
  }
};
