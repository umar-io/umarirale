import { motion } from "framer-motion";
interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`flex w-full text-white font-quicksand pt-[80px] pb-12`}
    >
      <div className="w-full flex flex-col justify-center items-center gap-3">
        {/* Profile Image */}
        <div className="w-[200px] h-[200px] rounded-[50%] bg-slate-300 flex items-center justify-center">
          <span className="text-black text-2xl">H</span>
        </div>

        {/* Name */}
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[35px] font-light font-aclonica"
        >
          Hi, I'm Umar 👋
        </motion.h3>

        {/* Description and Button */}
        <motion.article
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-5 lg:text-[35px] md:text-[40px] text-[20px] lg:w-[50%] text-center font-medium font-mona"
        >
          <p>
            Crafting web solutions with code, I specialize in both frontend and
            backend development, integrating both technologies seamlessly.
          </p>

          {/* Connect Button */}
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`w-fit h-[45px] text-[18px] ${
              darkMode ? "bg-slate-400" : "bg-black"
            } text-white py-1 px-5 rounded-md cursor-pointer hover:opacity-80 transition-opacity`}
            aria-label="Connect With Me"
          >
            Connect With Me
          </motion.button>

          {/* Location */}
          <span className="text-[18px] font-aclonica text-white font-light">
            Based in 📍 Lagos, NG
          </span>
        </motion.article>
      </div>
    </section>
  );
};

export default Hero;
