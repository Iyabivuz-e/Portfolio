// import React from 'react'

const Intro = () => {
  return (
    <header className="flex flex-col mt-16 ">
      <section className="m-auto">
        <p className="text-lg font-semibold mb-3">Hello! My name is</p>
        <h1 className="text-5xl font-bold leading-10 text-green-600">
          Dieudonne Iyabivuze
        </h1>
        <p className="mt-3 text-lg font-semibold">
          I am a Full stack developer
        </p>
        <button className="mt-3 px-4 py-2 bg-green-600 text-white">
          Resume
        </button>
      </section>
    </header>
  );
};

export default Intro;
