import lightLogo from "../assets/umarirale_.png";
import darkLogo from "../assets/umariraledark_.png";
import { Link } from "react-router-dom";
import { Lightbulb, LightbulbOff, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavBarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleDarkMode, darkMode }) => {
  const navLink = [
    { linkName: "Home", id: "home" },
    { linkName: "About", id: "about" },
    { linkName: "Service", id: "/service" },
    { linkName: "Projects", id: "/projects" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavOpener = () => {
    setIsOpen(!isOpen);
  };

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return isMobile;
  };

  const isMobile = useIsMobile();

  return (
    <header
      className={`py-[20px] px-[40px] h-[70px] flex justify-between items-center duration-300 ease-in-out font-quicksand sticky top-0 shadow-md`}
    >
      <div className="w-[30%]">
        <img
          src={darkMode ? darkLogo : lightLogo}
          alt="Logo"
          className="w-[50px]"
        />
      </div>

      {isMobile ? (
        <div>
          <button
            onClick={handleMobileNavOpener}
            className={`p-2 ${darkMode ? "text-white" : "text-black"}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* AnimatePresence for mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -300 }} // Start off-screen and invisible
                animate={{ opacity: 1, x: 0 }} // Fade in and slide in
                exit={{ opacity: 0, x: -300 }} // Fade out and slide out
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-0 left-0 h-full w-64 ${
                  darkMode ? "bg-slate-400" : "bg-black"
                } shadow-lg z-40`}
              >
                <nav className={`flex flex-col p-4`}>
                  {navLink.map((link) => (
                    <motion.div
                      key={link.linkName}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <Link
                        to={"#"}
                        onClick={() => {
                          scrollToSection(link.id);
                          handleMobileNavOpener();
                        }}
                        className={`py-2 ${
                          darkMode ? "!text-black" : "!text-white"
                        } hover:underline`}
                      >
                        {link.linkName}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <button
                  onClick={toggleDarkMode}
                  className={`ml-4 p-2 rounded-[50%] ${
                    darkMode ? "bg-black !text-white" : "bg-white !text-black"
                  } duration-300 ease-in-out`}
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <Lightbulb /> : <LightbulbOff />}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <motion.nav
          initial={{ opacity: 0, y: -20 }} // Fade in from the top
          animate={{ opacity: 1, y: 0 }} // Move to the final position
          transition={{ duration: 0.5 }}
          className="w-[70%] lg:flex md:flex hidden justify-end items-center gap-10"
        >
          {navLink.map((link) => (
            <motion.div
              key={link.linkName}
              whileHover={{ scale: 1.1 }} // Add hover effect
              whileTap={{ scale: 0.9 }} // Add tap effect
            >
              <Link
                to={"#"}
                onClick={() => {
                  scrollToSection(link.id);
                }}
                className={`${
                  darkMode ? "text-white" : "text-black"
                } hover:underline`}
              >
                {link.linkName}
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }} // Add hover effect
            whileTap={{ scale: 0.9 }} // Add tap effect
            className={`ml-4 p-2 rounded-[50%] ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            } duration-300 ease-in-out`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Lightbulb /> : <LightbulbOff />}
          </motion.button>
        </motion.nav>
      )}
    </header>
  );
};

export default NavBar;
