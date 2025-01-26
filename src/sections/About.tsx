import { motion } from "framer-motion";

interface AboutProps {
  darkMode: boolean;
}

const workExperience = [
  {
    name: "03developers",
    role: "Frontend Developer",
    start: "October/2024",
    end: null,
  },
  {
    name: "HNG",
    role: "Frontend Developer (intern)",
    start: "July/2024",
    end: "August/2024",
  },
  {
    name: "Amazing Grace Store",
    role: "Store Keeper",
    start: "June/2023",
    end: "October/2023",
  },
  {
    name: "Irale & Associates",
    role: "I.T specialist",
    start: "January/2020",
    end: null,
  },
];

const educationalBackground = [
  {
    name: "Codeprof Academy",
    course: "Advanced Fullstack Development",
    start: "Jan/2024",
    end: "July/2024",
  },
  {
    name: "Kevin Powell",
    course: "Beyond CSS",
    start: "2024",
    end: null,
  },
  {
    name: "Jonas Schmedtmann",
    course: "Frontend Development (ReactJS)",
    start: "2024",
    end: null,
  },
];

const language = [
  {
    name: "English",
    proficiency: "Fluent/Conversational",
  },
];

const skillSets = [
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "PHP", icon: "php/php-original" },
  { name: "Python", icon: "python/python-original" },
  { name: "React", icon: "react/react-original" },
  { name: "Django", icon: "django/django-plain" },
  { name: "Laravel", icon: "laravel/laravel-original" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
  { name: "SQLite", icon: "sqlite/sqlite-original" },
  { name: "MySQL", icon: "mysql/mysql-original" },
];

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-8 px-4 md:px-8 w-full ${
        darkMode ? "bg-black text-white" : "bg-slate-400 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h3
          initial={{ scale: 0, y: -20 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
          className="text-3xl font-bold font-quicksand underline mb-6"
        >
          About
        </motion.h3>

        {/* Open to Work Button */}
        <motion.button
          initial={{ scale: 0, y: -20 }}
          whileHover={{ scale: 0.95 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className={`${
            darkMode ? "bg-gray-700" : "bg-black"
          } rounded-lg px-4 py-2 font-quicksand flex items-center gap-2 mb-8`}
        >
          Open to work{" "}
          <span className="bg-green-500 w-2 h-2 rounded-full"></span>
        </motion.button>

        {/* Introduction Paragraph */}
        <p className="font-bold font-quicksand text-left py-8">
          I’m constantly seeking out more challenging problems in software
          engineering because they offer the opportunity to deepen my knowledge
          and push my limits. Each new challenge presents a chance to learn and
          grow, and I believe that my persistence in achieving greater
          milestones is driven by both purpose and the tangible results I aim
          for.
        </p>

        {/* Content Grid */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <div className="space-y-6">
              {workExperience.map((ex, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-4"
                >
                  {/* Content */}
                  <div className="flex-1 cursor-pointer">
                    <p className="text-sm text-white">
                      {ex.start} - {ex.end === null ? "Present" : ex.end}
                    </p>
                    <p className="text-lg font-semibold">{ex.name}</p>
                    <p
                      className={`${
                        darkMode ? "text-slate-400" : "text-black"
                      }`}
                    >
                      {ex.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-6">
              {educationalBackground.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-4"
                >
                  {/* Content */}
                  <div className="flex-1 cursor-pointer">
                    <p className="text-sm text-white">
                      {edu.start} - {edu.end === null ? "Present" : edu.end}
                    </p>
                    <p className="text-lg font-semibold">{edu.name}</p>
                    <p
                      className={`${
                        darkMode ? "text-slate-400" : "text-black"
                      }`}
                    >
                      {edu.course}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Language Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Language</h3>
            <div className="space-y-4">
              {language.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <p className="text-lg font-semibold">{lang.name}</p>
                  <p
                    className={`${darkMode ? "text-slate-400" : "text-black"}`}
                  >
                    - {lang.proficiency}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </article>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 mt-8"
        >
          {skillSets.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center p-6 rounded-lg transition-shadow cursor-pointer"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}.svg`}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <span
                className={`text-lg font-semibold  ${
                  darkMode ? "text-white" : "text-white"
                }`}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
