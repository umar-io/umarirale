import { motion } from "framer-motion";
import { useEffect } from "react";
import Typed from "typed.js";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  useEffect(() => {
    const options = {
      strings: ["Frontend Development", "Backend Development", "DApp", "SEO"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(".typed-js", options);

    return () => {
      typed.destroy(); // Cleanup the Typed.js instance on unmount
    };
  }, []);
  return (
    <section
      id="home"
      className={`flex w-full text-white font-quicksand pt-[80px] pb-12 ${
        darkMode ? "bg-black" : "bg-slate-400"
      }`}
    >
      <div className="w-full flex flex-col justify-center items-center gap-3">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[200px] h-[200px] rounded-[50%] bg-slate-300 flex items-center justify-center"
        >
          <span className="text-black text-2xl">H</span>
        </motion.div>

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
            Crafting web solutions with code, I specialize in both{" "}
            <span className={`typed-js font-aclonica`}></span>, integrating
            technologies into existence seamlessly.
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
            onClick={() => {
              window.location.href = "https://linktr.ee/umar_d3v";
            }}
          >
            Connect With Me
          </motion.button>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-[18px] font-aclonica text-white font-light"
          >
            Based in 📍 Lagos, NG
          </motion.p>
        </motion.article>
      </div>
    </section>
  );
};

export default Hero;
