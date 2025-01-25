import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

// Define types for the context value
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the context with a default value
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Define types for the provider's props
interface DarkModeProviderProps {
  children: ReactNode; // Use ReactNode instead of any
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  // Check if the user prefers dark mode
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial state based on user preference or localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference ? JSON.parse(storedPreference) : prefersDarkMode;
  });

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save preference to localStorage
      return newMode;
    });
  };

  // Optional: Listen for changes in the user's preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      const newMode = event.matches;
      setDarkMode(newMode);
      localStorage.setItem('darkMode', JSON.stringify(newMode)); // Update localStorage
    };

    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook for consuming the context
const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkMode };