import { motion } from "framer-motion";

const Welcome = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center container text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="
          bg-white/30 backdrop-blur-md
          rounded-3xl shadow-xl
          px-10 py-16
          flex flex-col items-center justify-center
          gap-10
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="heading text-center"
        >
          Welcome to Something Special 💖
        </motion.h1>

        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
        >
          Click to Continue
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Welcome;
