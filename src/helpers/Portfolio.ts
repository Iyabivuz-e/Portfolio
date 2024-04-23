import { v4 as uuidv4 } from "uuid";
import kiiteats from "../assets/images/KiitEats.png"
import realestate from "../assets/images/realEstate.png"
import ecommerce from "../assets/images/e-commerce.png"
import recipeApp from "../assets/images/Recipe App.png"

type Project = {
  id: string;
  title: string;
  image: string;
  github: string;
  deploy: string;
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
    github: "https://github.com/Iyabivuz-e/KiitEats",
    deploy: "https://kiiteats.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Fantastic Project Two",
    image: realestate,
    description:
      "Another project description showcasing its key features and impact.",
    techStack: ["ReactJS, SASS"],
    github: "https://github.com/Iyabivuz-e/Real-Estate",
    deploy: "https://jephte-house-ltd.netlify.app/",
  },
  {
    id: uuidv4(), // Generate unique ID using uuid
    title: "Responsive Portfolio",
    image: ecommerce,
    description:
      "A detailed description of your first project, highlighting its functionalities and achievements.",
    techStack: ["HTML, Css, JavaScript"],
    github: "https://github.com/Iyabivuz-e/Portfolio",
    deploy: "https://dio-portfolio.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Recipe App Landing Page",
    image: recipeApp,
    description:
      "Another project description showcasing its key features and impact.",
    techStack: ["VueJS", "Python", "PostgreSQL"],
    github: "https://github.com/Iyabivuz-e/Tailwind-Recipe-Simple-App",
    deploy: "https://dioeats.netlify.app/",
  },
];

export default projects;
