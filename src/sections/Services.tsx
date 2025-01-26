interface ServicesProps {
  darkMode: boolean;
}
import { motion } from "framer-motion";
const serviceList = [
  {
    name: "Frontend Development",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Backend Development",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Webpage Optimization",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "UI/UX Design",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];
const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  return (
    <section
      id="service"
      className={`py-8 px-4 md:px-8 w-full ${
        darkMode ? "bg-black text-white" : "bg-slate-400 text-white"
      }`}
    >
      <motion.h3
        initial={{ scale: 0, y: -20 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
        className="text-3xl font-bold font-quicksand underline mb-6"
      >
        Services Offered
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 mt-8"
      >
        {serviceList.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center justify-center p-6 rounded-lg transition-shadow cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-16 h-16 mb-4"
            />
            <span
              className={`text-lg font-semibold  ${
                darkMode ? "text-white" : "text-white"
              }`}
            >
              {service.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Services;
