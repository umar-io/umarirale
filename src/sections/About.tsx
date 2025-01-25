interface aboutProps {
  darkMode: boolean;
}
const About: React.FC<aboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-[20px] px-[40px] ${
        darkMode ? "text-white" : ""
      } flex flex-col justify-start items-start`}
    >
      <h3 className="text-[30px] font-normal font-quicksand underline">About</h3>
    </section>
  );
};
export default About;
