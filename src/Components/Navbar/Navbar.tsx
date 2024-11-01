import { HashLink } from "react-router-hash-link";


const Navbar = () => {

  return (
    <div className="px-10 py-5 flex justify-center navbar bg-base-100 shadow-md w-full sticky top-0">
      <div className="navbar-start">
        <div className="dropdown max-lg:hidden max-sm:flex max-sm:gap-3 max-sm:justify-start ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow flex gap-3"
          >
            <HashLink to="#" smooth className="btn neutral">
              Home
            </HashLink>

            <HashLink to="#about-me" smooth className="btn neutral">
              About
            </HashLink>

            <HashLink to="#works" smooth className="btn neutral">
              Works
            </HashLink>

            <HashLink to="#contact" smooth className="btn neutral">
              Contact
            </HashLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl capitalize max-sm:flex ">
          Dieudonne
        </a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end  gap-5 max-sm:hidden flex">
        <HashLink to="#" smooth className="btn neutral">
          Home
        </HashLink>

        <HashLink to="#about-me" smooth className="btn neutral">
          About
        </HashLink>

        <HashLink to="#works" smooth className="btn neutral">
          Works
        </HashLink>

        <HashLink to="#contact" smooth className="btn neutral">
          Contact
        </HashLink>
      </div>
    </div>
    // <section
    //   className={`${"flex justify-between font-bold text-lg bg-green-600 sticky top-0 text-white p-6 dark:bg-neutral-900 dark:text-slate-200"}`}
    // >
    //   <HashLink to="#" smooth className=" text-2xl uppercase cursor-pointer">Dieudonne</HashLink>
    //   <nav className="flex justify-center align-center gap-8 ">
    //     <ul
    //       className={`${
    //         toggleMenu
    //           ? "absolute right-0 top-0 w-full py-5 px-4 flex flex-col gap-4 items-center bg-green-600 dark:bg-neutral-900 transition-all duration-200"
    //           : "flex gap-8 cursor-pointer max-md:hidden"
    //       }`}
    //     >
    //       <HashLink to="#" smooth onClick={handleRemoveLinks} className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
    //         Home
    //       </HashLink>
    //       <HashLink to="#about-me" smooth onClick={handleRemoveLinks} className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
    //         About
    //       </HashLink>
    //       <HashLink to="#works" smooth onClick={handleRemoveLinks}  className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
    //         Works
    //       </HashLink>
    //       <HashLink to="#contact" smooth onClick={handleRemoveLinks} className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
    //         Contact
    //       </HashLink>
    //       <li
    //         onClick={handleToggleMenu}
    //         className="hover:text-green-900 absolute right-6 top-5 rounded-full bg-slate-200 p-2 hidden max-md:flex text-red-600"
    //       >
    //         {toggleMenu ? <CloseIcon /> : <MenuIcon />}
    //       </li>
    //       {darkMode ? (
    //         <li className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
    //           <LightModeIcon onClick={darkToLightMode} />
    //         </li>
    //       ) : (
    //         <li className="transition-all hover:text-neutral-900 dark:hover:text-green-600">
    //           <DarkModeIcon onClick={darkToLightMode} />
    //         </li>
    //       )}
    //     </ul>
    //     <div onClick={handleToggleMenu} className="hidden max-md:flex ">
    //       {toggleMenu ? <CloseIcon className="transition-all" /> : <MenuIcon />}
    //     </div>
    //   </nav>
    // </section>
  );
};

export default Navbar