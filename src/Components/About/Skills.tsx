import { useState } from "react";
import programmingLanguages from "../../helpers/Techskills";

const Skills = () => {
  const [filteredSkills, setFilteredSkills] = useState(programmingLanguages);

  const handleFilter = (category: string) => {
    if (category === "All") {
      setFilteredSkills(programmingLanguages);
    } else {
      const filtered = programmingLanguages.filter(
        (skill) => skill.category === category
      );
      setFilteredSkills(filtered);
      console.log(filtered);
    }
  };

  return (
    <div className="">
      <h1 className="text-xl mb-5 font-bold text-base-neutral">My Skills</h1>
      <div>
        <ul className="py-3 flex max-sm:grid grid-cols-2 gap-3 mb-5 justify-start">
          <li
            onClick={() => handleFilter("All")}
            className="bg-green-500 btn max-sm:w-full text-neutral px-4 py-2 cursor-pointer font-semibold"
          >
            All
          </li>
          <li
            onClick={() => handleFilter("Frontend")}
            className="bg-green-500 btn max-sm:w-full text-neutral px-4 py-2 cursor-pointer font-semibold"
          >
            Frontend
          </li>
          <li
            onClick={() => handleFilter("Backend")}
            className="bg-green-500 btn max-sm:w-full text-neutral px-4 py-2 cursor-pointer font-semibold"
          >
            Backend
          </li>
          <li
            onClick={() => handleFilter("Database")}
            className="bg-green-500 btn max-sm:w-full text-neutral px-4 py-2 cursor-pointer font-semibold"
          >
            Database
          </li>
          <li
            onClick={() => handleFilter("Version-Control")}
            className="bg-green-500 btn max-sm:w-full text-neutral px-4 py-2 cursor-pointer font-semibold"
          >
            Version-Control
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-4 mt-3">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="text-base-neutral px-2 py-1 flex flex-col items-center justify-center"
          >
            <button className=" btn ">{skill.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
