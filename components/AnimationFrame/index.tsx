import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface IProps {
  children: any;
  className?: string;
}

const AnimationFrame: FunctionComponent<IProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className && className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { delay: 0.4, duration: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationFrame;