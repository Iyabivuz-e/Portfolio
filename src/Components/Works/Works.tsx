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
          <section
            key={proj.id}
            className="bg-slate-200 dark:text-slate-200 dark:bg-neutral-900"
          >
            <div>
              <img
                src={proj.image}
                alt={proj.id}
                className="w-full object-cover h-full"
              />
            </div>
            <ul className="flex flex-col gap-3 mt-3 px-4 py-2">
              <li className="font-bold">{proj.title}</li>
              <li>{proj.description}</li>
              <li className="mr-3">Tech Stack: {proj.techStack.join(", ")}</li>
            </ul>
            <div className="p-4 flex justify-between gap-3">
              <Link to={proj.deploy} className="px-6 py-1 border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all">
                View
              </Link>
              <Link  to={proj.github} className="px-6 py-1 border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all">
                Github
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Works;
