interface ProjectsProps {
  darkMode: boolean;
}
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import projects from "./projects";

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section
      id="projects"
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
        Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            technology={project.technology}
            title={project.title}
            description={project.description}
            link={project.link}
            darkMode={darkMode}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
