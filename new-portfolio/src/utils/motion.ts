// Define basic directional types for possible movement directions.
type Direction = "left" | "right" | "up" | "down";

// Define types for possible transition animation types.
type TransitionType = "spring" | "tween";

// Basic structure for animation variants.
type Variants = {
  hidden: Record<string, unknown>;
  show: Record<string, unknown>;
};

// Enum for ease transitions to prevent typo errors and provide better autocompletion.
enum TransitionEase {
  EaseOut = "easeOut",
}

// Enum for slide directions to ensure only valid directions are used.
enum SlideDirection {
  Left = "left",
  Right = "right",
  Up = "up",
  Down = "down",
}

// Extended type for textVariants which includes additional states.
type TextVariants = Variants & {
  initial: {
    x: number;
    opacity: number;
  };
  animate: {
    x: number;
    opacity: number;
    transition: {
      duration: number;
      staggerChildren: number;
    };
  };
  scrollButton: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      repeat: number;
    };
  };
};

// Define the text variant animations with initial, animate, and scrollButton states.
const textVariants: TextVariants = {
  initial: {
    x: -500, // Start position off-screen on the X-axis.
    opacity: 0, // Start with an opacity of 0 to be invisible.
  },
  animate: {
    x: 0, // End position at the original X-axis point.
    opacity: 1, // Animate to full opacity.
    transition: {
      duration: 1, // Duration for the animation to complete.
      staggerChildren: 0.1, // Stagger the animation for child components.
    },
  },
  scrollButton: {
    opacity: 0, // Start with an opacity of 0 to be invisible.
    y: 10, // Small vertical movement for the scroll button.
    transition: {
      duration: 2, // Longer duration for a subtle effect.
      repeat: Infinity, // Repeat this animation indefinitely.
    },
  },
  hidden: {}, // Hidden state required by Variants but not used here.
  show: {}, // Show state required by Variants but not used here.
};

// Following are the other variants from the original question with types and defaults applied:

// Define the textVariant animation with a delay.
export const textVariant = (delay: number): Variants => ({
  hidden: {
    y: -50, // Initial hidden state position on the Y-axis.
    opacity: 0, // Start with an opacity of 0 to be invisible.
  },
  show: {
    y: 0, // Animate to the original Y-axis point.
    opacity: 1, // Animate to full opacity.
    transition: {
      type: "spring", // Use a spring animation type.
      duration: 1.25, // Duration for the animation to complete.
      delay, // Delay before the animation starts.
    },
  },
});

// Define the fadeIn animation with direction, type, delay, and duration.
export const fadeIn = (
  direction: Direction,
  type: TransitionType,
  delay: number,
  duration: number = 0.3 // Default duration if not provided.
): Variants => ({
  hidden: {
    x: direction === SlideDirection.Left ? 100 : direction === SlideDirection.Right ? -100 : 0,
    y: direction === SlideDirection.Up ? 100 : direction === SlideDirection.Down ? -100 : 0,
    opacity: 0, // Start with an opacity of 0 to be invisible.
  },
  show: {
    x: 0, // End position at the original X-axis point.
    y: 0, // End position at the original Y-axis point.
    opacity: 1, // Animate to full opacity.
    transition: {
      type, // Transition type passed as parameter.
      delay, // Delay before the animation starts.
      duration, // Duration for the animation to complete.
      ease: TransitionEase.EaseOut, // Easing function to use for the transition.
    },
  },
});

// Define the zoomIn animation with a delay and duration.
export const zoomIn = (
  delay: number,
  duration: number = 0.3 // Default duration if not provided.
): Variants => ({
  hidden: {
    scale: 0, // Start with the scale at 0 to be invisible and scaled down.
    opacity: 0, // Start with an opacity of 0 to be fully transparent.
  },
  show: {
    scale: 1, // Animate to a scale of 1 to return to normal size.
    opacity: 1, // Animate to an opacity of 1 to be fully visible.
    transition: {
      type: "tween", // Use a tween transition for a smooth effect.
      delay, // Apply the provided delay before starting the animation.
      duration, // Use the provided duration for the animation length.
      ease: TransitionEase.EaseOut, // Use 'easeOut' for a smooth end to the animation.
    },
  },
});

// Define the slideIn animation with direction, type, delay, and duration.
export const slideIn = (
  direction: Direction,
  type: TransitionType,
  delay: number,
  duration: number = 0.3 // Default duration if not provided.
): Variants => ({
  hidden: {
    x: direction === SlideDirection.Left ? "-100%" : direction === SlideDirection.Right ? "100%" : "0%",
    y: direction === SlideDirection.Up ? "100%" : direction === SlideDirection.Down ? "-100%" : "0%",
    // Start position off-screen or at 0 depending on the direction provided.
  },
  show: {
    x: 0, // End at the original X-axis point.
    y: 0, // End at the original Y-axis point.
    transition: {
      type, // Use the transition type provided (spring or tween).
      delay, // Apply the provided delay before starting the animation.
      duration, // Use the provided duration for the animation length.
      ease: TransitionEase.EaseOut, // Use 'easeOut' for a smooth end to the animation.
    },
  },
});

// Define a container variant for staggering children animations.
export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number = 0 // Default delay for children if not provided.
): Variants => ({
  hidden: {}, // Hidden state can be an empty object if no initial state is needed.
  show: {
    transition: {
      staggerChildren, // Apply staggering effect to child components.
      delayChildren, // Delay the animation of each child by this amount.
    },
  },
});

// Here's the added textVariants defined earlier with its own unique structure.
// It's not an export because it was not specified as such in the question.

