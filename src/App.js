import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="App">
      <Navbar
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
