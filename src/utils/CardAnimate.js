"use client";
import * as motion from "motion/react-client";

export const cardVariants = {
  hidden: { x: 0, y: 0, opacity: 0, scale: 0.5 },
  visible: (custom) => ({
    x: custom.x,
    y: custom.y,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.1, ease: "easeOut" },
  }),
};

export default function CardAnimate({ children, x = 0, y = 0 }) {
  return (
    <motion.div
      className="absolute overflow-hidden hidden lg:block z-20"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
