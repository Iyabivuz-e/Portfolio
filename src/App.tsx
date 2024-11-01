import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ThemeCollector from "./helpers/Theme";

const App = () => {

  return (
    <div>
      <div className="w-full">
        <ThemeCollector/>
        <BrowserRouter>
          <Navbar  />
          <div className="px-10">
          <Intro />
          <About />
          <Works />
          <Contact />

          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
};

export default App;
