import Navbar from "./scenes/Navbar";
import Home from "./scenes/home";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState, useEffect } from "react";
import About from "./scenes/about";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <Home
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <About
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
