interface ProjectCardProps {
  key: number;
  image: string;
  technology: string;
  title: string;
  description: string;
  link: string;
  darkMode: boolean;
}

import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

const ProjectCard: React.FC<ProjectCardProps> = ({
  key,
  image,
  technology,
  title,
  description,
  link,
  darkMode,
}) => {
  return (
    <motion.div
      initial={{ scale: 0, x: -20 }}
      whileInView={{ scale: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ ease: easeInOut, duration: 0.3 }}
      className="flex flex-col gap-2 md:mb-10 mb-5 hover:-translate-y-1 transition-all duration-300 font-quicksand cursor-pointer"
      key={key}
    >
      <img
        src={image}
        alt={`${title} project thumbnail`}
        className="w-full h-auto rounded-lg"
      />
      <p className="text-gray-500">{technology}</p>
      <hr className="border-gray-500" />
      <h2 className="text-white text-2xl font-semibold">{title}</h2>
      <p className={`${darkMode ? "text-white" : "text-black"}`}>
        {description}
      </p>
      <div className="flex">
        <Link
          to={link}
          rel="noreferrer noopener"
          target="_blank"
          className={`btn flex items-center gap-2 px-2 py-2 rounded-md ${
            darkMode
              ? "bg-slate-400 text-white hover:text-black"
              : "text-white bg-black hover:text-slate-400"
          } transition-colors duration-300`}
          aria-label={`View ${title} project`}
        >
          View project
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            ></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
