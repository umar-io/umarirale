import lightLogo from "../assets/umarirale_.png";
import darkLogo from "../assets/umariraledark_.png";
import { Link } from "react-router-dom";
import { Lightbulb, LightbulbOff, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

interface NavBarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleDarkMode, darkMode }) => {
  const navLink = [
    { linkName: "Home", path: "/" },
    { linkName: "About", path: "/about" },
    { linkName: "Service", path: "/service" },
    { linkName: "Projects", path: "/projects" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavOpener = () => {
    setIsOpen(!isOpen);
  };

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
      };

      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return isMobile;
  };

  const isMobile = useIsMobile();

  return (
    <header
      className={`py-[20px] px-[40px] h-[80px] flex justify-between items-center duration-300 ease-in-out font-quicksand`}
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
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <div
            className={`fixed top-0 left-0 h-full w-64 ${
              darkMode ? "bg-slate-400" : "bg-black"
            } shadow-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } z-40`}
          >
            <nav className={`flex flex-col p-4`}>
              {navLink.map((link) => (
                <Link
                  key={link.linkName}
                  to={link.path}
                  className={`py-2  ${
                    darkMode ? "!text-black" : "!text-white"
                  } hover:underline`}
                  onClick={handleMobileNavOpener} // Close menu on link click
                >
                  {link.linkName}
                </Link>
              ))}
            </nav>
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-[50%] ${
                darkMode ? "bg-black !text-white" : "bg-white !text-black"
              } duration-300 ease-in-out`}
            >
              {darkMode ? <Lightbulb /> : <LightbulbOff />}
            </button>
          </div>
        </div>
      ) : (
        <nav className="w-[70%] lg:flex md:flex hidden justify-end items-center gap-10">
          {navLink.map((link) => (
            <Link
              key={link.linkName}
              to={link.path}
              className={`${
                darkMode ? "text-white" : "text-white"
              } hover:underline`}
            >
              {link.linkName}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`ml-4 p-2 rounded-[50%] ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            } duration-300 ease-in-out`}
          >
            {darkMode ? <Lightbulb /> : <LightbulbOff />}
          </button>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
