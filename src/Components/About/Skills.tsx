import programmingLanguages from "../../helpers/Techskills";

const Skills = () => {
  return (
    <div>
      <h1 className="text-xl mb-5 font-bold dark:text-slate-200">My Skills</h1>
      <div>
        <ul
          className=" py-3 flex gap-3 mb-5 max-sm:flex-wrap justify-start"
        >
          <li className="bg-green-600 text-white px-4 py-2 cursor-pointer font-semibold">All</li>
          <li className="bg-green-600 text-white px-4 py-2 cursor-pointer font-semibold">Frontend</li>
          <li className="bg-green-600 text-white px-4 py-2 cursor-pointer font-semibold">Backend</li>
          <li className="bg-green-600 text-white px-4 py-2 cursor-pointer font-semibold">Database</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-4 mt-3 ">
        {programmingLanguages.map((skill) => (
          <div
            key={skill.id}
            className="bg-slate-200 px-4 py-3 flex flex-col items-center justify-center shadow-md hover:shadow-lg"
          >
            {/* <img src={skill.image} alt={skill.id} className="" /> */}
            <li className="list-none  font-medium">{skill.name}</li>
            {/* <li className="list-none text-gray-500">{skill.category}</li> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
