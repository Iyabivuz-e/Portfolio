import { v4 as uuidv4 } from "uuid";
import kiiteats from "../assets/images/KiitEats.png";
import realestate from "../assets/images/realEstate.png";
import ecommerce from "../assets/images/e-commerce.png";
import recipeApp from "../assets/images/Recipe App.png";

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
      "The Food Ordering App is a user-friendly web application that simplifies the process of ordering food online. With seamless integration with Stripe for secure payments, customers can easily browse through a variety of food options, add items to their cart, and complete transactions with confidence. Administrators can efficiently manage orders and track sales through the intuitive admin panel. Built using React.js and Node.js, this app offers a streamlined solution for online food businesses.",
    techStack: ["ReactJS", "TailwindCss", "NodeJS", "MongoDB"],
    github: "https://github.com/Iyabivuz-e/KiitEats",
    deploy: "https://kiiteats.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Real Estate - Jephte Houses Ltd.",
    image: realestate,
    description:
"Real Estate - Jephte Houses Ltd. is a ReactJS web app styled with SASS, designed as an online platform for the fictional real estate company. It showcases properties and services, boasting a modern, user-friendly interface for engaging visitors. Users can browse properties, view detailed descriptions and images, and contact the company. This project highlights my frontend skills, leveraging ReactJS for dynamic UI components and SASS for efficient styling and theming.",
    techStack: ["ReactJS, SASS"],
    github: "https://github.com/Iyabivuz-e/Real-Estate",
    deploy: "https://jephte-house-ltd.netlify.app/",
  },
  {
    id: uuidv4(), // Generate unique ID using uuid
    title: "Responsive Portfolio",
    image: ecommerce,
    description:
      "My portfolio website is a sleek and modern showcase of my work, skills, and expertise. Built using Tailwind CSS, React.js, and TypeScript, it offers a seamless user experience with responsive design for various screen sizes. The website features a clean and intuitive interface, making it easy for visitors to navigate through my projects, learn about my background, and get in touch. With a dark to light mode toggle and attention to detail, it reflects my commitment to professionalism and innovation in web development.",
    techStack: ["React", "TypeScript", "TailwindCss"],
    github: "https://github.com/Iyabivuz-e/Portfolio",
    deploy: "https://dio-portfolio.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Recipe App Landing Page",
    image: recipeApp,
    description:
      "The <Recipe App Landing Page> is a project I developed while learning Tailwind CSS which boosted my skills and experience. It serves as a simple yet visually appealing landing page designed to showcase the UI skills and color schemes I've acquired. Built using ReactJS and Tailwind CSS, the landing page features a captivating color scheme and user interface that grabs visitors' attention and its responsiveness to all screens. Despite its simplicity, the landing page demonstrates my proficiency in front-end development, particularly in creating visually engaging designs using modern web technologies like ReactJS and Tailwind CSS.",
    techStack: ["ReactJs, Tailwind Css"],
    github: "https://github.com/Iyabivuz-e/Tailwind-Recipe-Simple-App",
    deploy: "https://dioeats.netlify.app/",
  },
];

export default projects;
