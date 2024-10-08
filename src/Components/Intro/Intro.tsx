import myImage from "../../assets/images/imggggh.jpg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <header className="flex mt-16 max-md:gap-20 gap-5 ">
      <div className="flex max-sm:flex-col max-sm:items-center m-auto gap-10 max-sm:gap-12">
        <div className=" max-md:w-3/4 rounded-full">
          <img
            src={myImage}
            alt="background-img"
            loading="lazy"
            width={250}
            height={250}
            className="object-contain rounded-full"
          />
        </div>
        <section className=" m-auto max-sm:text-center max-sm:-mt-8 max-sm:flex max-sm:flex-col max-sm:gap-2">
          <p className="text-lg font-semibold mb-3 dark:text-slate-200">
            Hello! My name is
          </p>
          <h1 className="text-5xl font-bold leading-10 text-green-600">
            Dieudonne Iyabivuze
          </h1>
          <p className="my-5 text-lg font-semibold dark:text-slate-200">
            I am a Full stack developer
          </p>
          <Link
            target="blank"
            to="https://drive.google.com/file/d/1PZTIS0MoIYyK5r9Fhz9NpFmDfbHB8031/view?usp=sharing"
            className="mt-3 px-4 py-2 bg-green-600 text-white"
          >
            Resume
          </Link>
        </section>
      </div>
    </header>
  );
};

export default Intro;
