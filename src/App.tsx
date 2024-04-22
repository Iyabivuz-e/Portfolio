import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="px-6 sm:px-14 py-3">
        <Navbar />
        <BrowserRouter>
          <Intro />
          <About />
          <Works />
          <Contact />
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};

export default App;
