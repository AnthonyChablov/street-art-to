import { motion } from "framer-motion";

interface IFormError {
  message: String;
}

const errorMessageVariants = {
  // Framer motion config
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3,
      when: "",
    },
  },
  exit: {
    opacity: 0,
  },
};

const FormError = ({ message }: IFormError) => {
  return (
    <motion.div
      className="text-red-600"
      key="isError"
      variants={errorMessageVariants}
      initial="initial"
      animate="animate"
      exit={"exit"}
    >
      <p>{message}</p>
    </motion.div>
  );
};

export default FormError;
