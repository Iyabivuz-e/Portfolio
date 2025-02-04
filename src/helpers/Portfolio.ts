import { v4 as uuidv4 } from "uuid";
import kiiteats from "../assets/images/KeetEats.png";
import realestate from "../assets/images/RealEstate.png";
import portfolio from "../assets/images/port.png";
import recipeApp from "../assets/images/DioEats.png";
// import jephImg from "../assets/images/another.png";
// import movies from "../assets/images/image.png";
import classTap from "../assets/images/ClassTap.png";

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
    title: "ClassTap",
    image: classTap,
    description:
      "worked on a student attendance management system utilizing RFID cards for efficient attendance tracking. Built with Next.js, MongoDB, Tailwind CSS, and DaisyUI, the platform enables students to record their attendance seamlessly, while providing the Director of Studies with a comprehensive dashboard to manage and monitor attendance records effectively.",
    techStack: ["NextJs", "TailwindCss", "TypeScript", "DaisyUI, MongoDB"],
    github: "/",
    deploy: "/",
  },
  // {
  //   id: uuidv4(), // Generate unique ID using uuid
  //   title: "Movie My Mood",
  //   image: movies,
  //   description:
  //     "This app, MovieMyMood, is designed to help users discover movies based on their current mood. With an intuitive interface, users can select from various genres that reflect their emotional state, such as Action, Comedy, Drama, Romance, and more. The app enhances the movie-watching experience by tailoring recommendations to how users feel in the moment, making it easy and fun to find the perfect film for any mood.",
  //   techStack: ["NextJs", "TailwindCss", "TypeScript", "DaisyUI"],
  //   github: "https://github.com/Iyabivuz-e/movie-my-mood/",
  //   deploy: "/",
  // },
  // {
  //   id: uuidv4(), // Generate unique ID using uuid
  //   title: "Sav7N Real-Estate",
  //   image: jephImg,
  //   description:
  //     "save7n is a modern real estate platform designed to streamline the process of property discovery, buying, and selling. The website features comprehensive property listings, user-friendly search filters, and detailed property descriptions to help users find their ideal homes or investment properties.",
  //   techStack: ["NextJs", "TailwindCss", "TypeScript", "MongoDB"],
  //   github: "/",
  //   deploy: "https://save7n.vercel.app/",
  // },
  {
    id: uuidv4(), // Generate unique ID using uuid
    title: "Food Devlivery Web App",
    image: kiiteats,
    description:
      "The Food Ordering App is a streamlined web application for easy online food ordering. Integrated with Stripe for secure payments, users can browse, add items to cart, and checkout confidently. Admins manage orders and track sales efficiently via the intuitive panel. Built with React.js and Node.js for a seamless experience.",
    techStack: ["ReactJS", "TailwindCss", "NodeJS", "MongoDB"],
    github: "https://github.com/Iyabivuz-e/KiitEats",
    deploy: "https://kiiteats.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Jephte Houses Ltd.",
    image: realestate,
    description:
      "Real Estate - Jephte Houses Ltd. is a ReactJS web app styled with SASS, presenting a modern interface for the fictional company. Users can browse properties, view details, and contact the company. The project showcases my frontend skills using ReactJS for dynamic UI and SASS for efficient styling.",
    techStack: ["ReactJS, SASS"],
    github: "https://github.com/Iyabivuz-e/Real-Estate",
    deploy: "https://jephte-house-ltd.netlify.app/",
  },
  {
    id: uuidv4(), // Generate unique ID using uuid
    title: "Responsive Portfolio",
    image: portfolio,
    description:
      "My portfolio website, crafted with Tailwind CSS, React.js, and TypeScript, showcases my work and expertise with a sleek, modern design. It offers seamless navigation, responsiveness across devices, and a dark to light mode toggle. It reflects my commitment to professionalism and innovation in web development.",
    techStack: ["React", "TypeScript", "TailwindCss"],
    github: "https://github.com/Iyabivuz-e/Portfolio",
    deploy: "https://dio-portfolio.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Recipe App Landing Page",
    image: recipeApp,
    description:
      "The Recipe App Landing Page is a ReactJS project developed while learning Tailwind CSS. It showcases UI skills and color schemes, designed to engage visitors. With a captivating interface and responsiveness, it demonstrates proficiency in front-end development, leveraging modern web technologies.",
    techStack: ["ReactJs, Tailwind Css"],
    github: "https://github.com/Iyabivuz-e/Tailwind-Recipe-Simple-App",
    deploy: "https://dioeats.netlify.app/",
  },
];

export default projects;
