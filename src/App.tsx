import { DarkModeProvider, useDarkMode } from "./contexts/themeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <MainComponent />
      </Router>
    </DarkModeProvider>
  );
};

const MainComponent = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-slate-400 text-black"
      } min-h-screen flex flex-col`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className="flex-grow">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Projects darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} getYear={getYear()} />
    </div>
  );
};

export default App;
