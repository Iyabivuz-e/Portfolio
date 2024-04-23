// import React from 'react'

import AboutMe from "./AboutMe";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="flex flex-col mt-16 ">
      <h1 className="text-center text-4xl font-bold text-green-600">
        About Me
      </h1>
      <div className="flex max-lg:jusstify-between max-md:flex-col max-sm:flex-col gap-8 mt-12  ">
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
};

export default About;
