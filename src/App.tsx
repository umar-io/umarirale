import { DarkModeProvider, useDarkMode } from "./contexts/themeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
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

  return (
    <div className={`${darkMode ? "bg-black" : "bg-slate-400"} h-dvh`}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode}/>
    </div>
  );
};

export default App;
