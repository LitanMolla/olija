import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ayshaImg from "../assets/images/aysha.jpg";

const LoveMessage = ({ onNext }) => {
  const [text] = useTypewriter({
    words: ["I Love You", "Aysha Akter Olija ❤️"],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="min-h-screen flex items-center justify-center container text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="
          bg-white/30 backdrop-blur-md
          rounded-3xl shadow-xl
          px-8 py-14
          w-full max-w-4xl
        "
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <h2 className="heading text-center md:text-left">
              {text}
              <Cursor />
            </h2>

            <button onClick={onNext} className="btn">
              Next 💖
            </button>
          </div>

          {/* Image */}
          <motion.img
            src={ayshaImg}
            alt="Aysha"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="
              rounded-2xl shadow-2xl
              w-72 md:w-80
              mx-auto
            "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoveMessage;
