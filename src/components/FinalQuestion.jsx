import { motion } from "framer-motion";

const FinalQuestion = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center container text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="
          bg-white/30 backdrop-blur-md
          rounded-3xl shadow-xl
          px-8 py-14
          max-w-xl w-full
          flex flex-col items-center
          gap-10
        "
      >
        <h2 className="heading text-center">
          One Last Question…
        </h2>

        <p className="text-xl md:text-2xl text-rose-700 font-medium">
          Will you stay with me forever? 🥺❤️
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <button onClick={onNext} className="btn">
            YES 💖
          </button>

          <button onClick={onNext} className="btn">
            Of Course 😍
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalQuestion;
