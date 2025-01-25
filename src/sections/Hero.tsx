interface HeroProps {
  darkMode: boolean;
}
const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <div
      className={`flex w-full ${
        darkMode ? "text-white" : "text-white"
      } font-quicksand`}
    >
      <div className="w-[100%] flex flex-col justify-center items-center gap-3">
        <div className="w-[200px] h-[200px] rounded-[50%] bg-slate-300">h</div>
        <h3 className="text-[35px] font-light font-aclonica">
          Hi , i'm Umar 👋
        </h3>
        <article className="flex flex-col items-center lg:justify-center justify-between gap-[20px] lg:text-[35px] md:text-[40px] text-[20px] lg:w-[50%] text-center text-wrap font-medium font-mona lg:leading-[40px] leading-[20px]">
          Crafting Web Solution with code, I specialized in both frontend and
          backend development. Integrate both technologies seamlessly. <br />
          <button
            className={`w-[fit-content] h-[45px] text-[18px] ${
              darkMode ? "bg-slate-400 " : "bg-black text-white"
            } py-[4px] px-[20px] rounded-md cursor-pointer`}
          >
            Connect With Me{" "}
          </button>
          <p className="text-[18px] font-aclonica text-white font-light drop-shadow-xs">
            Based in 📍 Lagos , NG
          </p>
        </article>
      </div>
    </div>
  );
};
export default Hero;
