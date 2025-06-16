import { motion } from "framer-motion";
import css from "./TypingAnimation.module.css";

const TypingAnimation = () => {
  return (
    <motion.div
      animate={{ x: [0, 7, -7, 0] }}
      transition={{ repeat: Infinity, duration: 0.7 }}
      className={css.animationWrapper}
    >
      👩🏻‍💻
    </motion.div>
  );
};

export default TypingAnimation;
