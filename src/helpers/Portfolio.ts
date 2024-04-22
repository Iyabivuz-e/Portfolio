import { v4 as uuidv4 } from "uuid";
import kiiteats from "../assets/images/KiitEats.png"
import realestate from "../assets/images/realEstate.png"
import ecommerce from "../assets/images/e-commerce.png"

type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    id: uuidv4(), // Generate unique ID using uuid
    title: "Food Devlivery Web App",
    image: kiiteats,
    description:
      "A detailed description of your first project, highlighting its functionalities and achievements.",
    techStack: ["ReactJS", "TailwindCss", "NodeJS", "MongoDB"],
  },
  {
    id: uuidv4(),
    title: "Fantastic Project Two",
    image: realestate,
    description:
      "Another project description showcasing its key features and impact.",
    techStack: ["ReactJS, SASS"],
  },
  {
    id: uuidv4(), // Generate unique ID using uuid
    title: "Awesome Project One",
    image: ecommerce,
    description:
      "A detailed description of your first project, highlighting its functionalities and achievements.",
    techStack: ["HTML, Css, JavaScript"],
  },
  {
    id: uuidv4(),
    title: "Fantastic Project Two",
    image: ecommerce,
    description:
      "Another project description showcasing its key features and impact.",
    techStack: ["VueJS", "Python", "PostgreSQL"],
  },

];

// You can access the data like this
console.log(projects[0]); // { id: "some-uuid-value", title: "Awesome Project One", ... }

export default projects;
