import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import {useState} from "react"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="px-6 sm:px-12 py-3 dark:bg-neutral-950 max-sm:px-4">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <BrowserRouter>
          <Intro />
          <About />
          <Works />
          <Contact />
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
};

export default App;
