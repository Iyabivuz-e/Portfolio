// import React from 'react'
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Navbar = () => {
  return (
    <section className="flex justify-between font-bold text-lg bg-green-600 sticky top-0 text-white p-6 ">
      <nav className=" text-2xl uppercase cursor-pointer">Dieudonne</nav>
      <nav className="">
        <ul className="flex gap-8 cursor-pointer">
          <li className="transition-all hover:text-green-600">Home</li>
          <li className="transition-all hover:text-green-600">About</li>
          <li className="transition-all hover:text-green-600">Works</li>
          <li className="transition-all hover:text-green-600">Contact</li>
          <li className="transition-all hover:text-green-600">
            <DarkModeIcon />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar
