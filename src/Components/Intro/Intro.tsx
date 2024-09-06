import myImage from "../../assets/images/imggggh.jpg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <header className="flex max-sm:flex-col max-sm:items-center mt-16 max-md:gap-20 gap-5 ">
      <div className="w-[40%] max-md:w-3/4 h-2/4 rounded-full">
        <img
          src={myImage}
          alt="background-img"
          className="w-full h-full rounded-full object-fill"
        />
      </div>
      <section className="m-auto max-sm:text-center max-sm:-mt-8">
        <p className="text-lg font-semibold mb-3 dark:text-slate-200">
          Hello! My name is
        </p>
        <h1 className="text-5xl font-bold leading-10 text-green-600">
          Dieudonne Iyabivuze
        </h1>
        <p className="mt-3 mb-3 text-lg font-semibold dark:text-slate-200">
          I am a Full stack developer
        </p>
        <Link
          target="blank"
          to="https://drive.google.com/file/d/1yrVRqG_9om02Bwooii03Ci8JTHEZ3osc/view"
          className="mt-3 px-4 py-2 bg-green-600 text-white"
        >
          Resume
        </Link>
      </section>
    </header>
  );
};

export default Intro;
