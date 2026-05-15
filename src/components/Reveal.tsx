import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const animation: MotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: {
      once: true,
      amount: 0.15,
      margin: "0px 0px -80px 0px",
    },
    transition: {
      duration: 0.45,
      delay,
      ease: "easeOut",
    },
  };

  return (
    <motion.div className={className} {...animation}>
      {children}
    </motion.div>
  );
}

export default Reveal;