import { Link } from "react-router-dom";
import projects from "../../helpers/Portfolio";

const Works = () => {
  return (
    <div className="flex flex-col mt-16" id="works">
      <h1 className="text-center text-4xl font-bold text-green-600">
        My Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12  ">
        {projects.map((proj) => (
          <section key={proj.id} className="bg-base-200 text-base-content">
            <div>
              <img
                src={proj.image}
                alt={proj.id}
                loading="lazy"
                className="w-full object-cover h-full"
              />
            </div>
            <ul className="flex flex-col gap-3 mt-3 px-4 py-2">
              {/* Title *********** */}
              <div className="w-full  pb-3 flex justify-between items-center gap-1 max-md:gap-3 max-md:flex-col max-md:items-start">
                <li className="font-bold">{proj.title}</li>
                <div className=" flex gap-3 justify-end ">
                  <Link
                    to={proj.deploy}
                    target="blank"
                    className="px-6 py-1 border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all"
                  >
                    View
                  </Link>
                  <Link
                    to={proj.github}
                    target="blank"
                    className="px-6 py-1 border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all"
                  >
                    Github
                  </Link>
                </div>
              </div>
              {/* Title *********** */}
              <li>{proj.description}</li>
              <li className="mr-3">
                <span className="font-bold">Tech Stack: </span>
                {proj.techStack.join(", ")}
              </li>
            </ul>
            {/* <div className="p-4 flex justify-between gap-3">
              <Link
                to={proj.deploy}
                target="blank"
                className="px-6 py-1 border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all"
              >
                View
              </Link>
              <Link
                to={proj.github}
                target="blank"
                className="px-6 py-1 border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all"
              >
                Github
              </Link>
            </div> */}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Works;
