import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

// Type Aliases of my state
type DarkModeThingy = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ darkMode, setDarkMode }: DarkModeThingy) => {

  //Taggling dark and light theme
  const darkToLightMode = () => {
    setDarkMode(!darkMode);
  };

  //Taggling small and large screens 
  const [toggleMenu, setToggleMenu] = useState(false)
  // const [removeMenu, setRemoveMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleRemoveLinks = () => {
    setToggleMenu(false);
  }

  return (
    <section
      className={`${"flex justify-between font-bold text-lg bg-green-600 sticky top-0 text-white p-6 dark:bg-neutral-900 dark:text-slate-200"}`}
    >
      <HashLink to="#" smooth className=" text-2xl uppercase cursor-pointer">Dieudonne</HashLink>
      <nav className="flex justify-center align-center gap-8 ">
        <ul
          className={`${
            toggleMenu
              ? "absolute right-0 top-0 w-full py-5 px-4 flex flex-col gap-4 items-center bg-green-600 dark:bg-neutral-900 transition-all duration-200"
              : "flex gap-8 cursor-pointer max-md:hidden"
          }`} 
        >
          <HashLink to="#" smooth onClick={handleRemoveLinks} className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
            Home
          </HashLink>
          <HashLink to="#about-me" smooth onClick={handleRemoveLinks} className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
            About
          </HashLink>
          <HashLink to="#works" smooth onClick={handleRemoveLinks}  className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
            Works
          </HashLink>
          <HashLink to="#contact" smooth onClick={handleRemoveLinks} className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
            Contact
          </HashLink>
          <li
            onClick={handleToggleMenu}
            className="hover:text-green-900 absolute right-6 top-5 rounded-full bg-slate-200 p-2 hidden max-md:flex text-red-600"
          >
            {toggleMenu ? <CloseIcon /> : <MenuIcon />}
          </li>
          {darkMode ? (
            <li className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
              <LightModeIcon onClick={darkToLightMode} />
            </li>
          ) : (
            <li className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
              <DarkModeIcon onClick={darkToLightMode} />
            </li>
          )}
        </ul>
        <div onClick={handleToggleMenu} className="hidden max-md:flex ">
          {toggleMenu ? <CloseIcon className="transition-all" /> : <MenuIcon />}
        </div>
      </nav>
    </section>
  );
};

export default Navbar