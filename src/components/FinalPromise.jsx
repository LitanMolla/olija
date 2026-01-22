import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const FinalPromise = () => {
  const [text] = useTypewriter({
    words: [
      "Thank you for choosing me ❤️",
      "I promise to love you, care for you, and stay by your side forever ♾️",
      "You are my today, my tomorrow, and my always 💖",
    ],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 0,
    delaySpeed: 1200,
  });

  return (
    <div className="min-h-screen flex items-center justify-center container text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="
          bg-white/30 backdrop-blur-md
          rounded-3xl shadow-2xl
          px-10 py-16
          max-w-2xl w-full
          flex flex-col items-center
        "
      >
        <h2
          className="
            text-2xl md:text-4xl font-semibold
            leading-relaxed
            bg-gradient-to-r from-red-600 via-pink-600 to-rose-500
            bg-clip-text text-transparent
          "
        >
          {text}
          <Cursor />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1.2 }}
          className="mt-12 text-xl md:text-2xl font-bold text-rose-700"
        >
          — Yours, Liton
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 1.2 }}
          className="mt-4 text-lg italic text-rose-600"
        >
          I Love You More Than Words Can Say ❤️
        </motion.p>
      </motion.div>
    </div>
  );
};

export default FinalPromise;
