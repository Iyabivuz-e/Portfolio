import { v4 as uuidv4 } from "uuid";

type Languages = {
  id: string;
  name: string;
  image: string;
  category: string;
};

const programmingLanguages: Languages[] = [
  // Frontend
  {
    name: "JavaScript",
    image: "http://www.w3.org/2000/svg",
    category: "Frontend",
    id: uuidv4(),
  },
  {
    name: "HTML",
    image: "https://placeimg.com/64/64/tech",
    category: "Frontend",
    id: uuidv4(),
  },
  {
    name: "CSS",
    image: "https://placeimg.com/64/64/tech",
    category: "Frontend",
    id: uuidv4(),
  },
  {
    name: "TailwindCSS",
    image: "https://placeimg.com/64/64/tech",
    category: "Frontend",
    id: uuidv4(),
  },
  {
    name: "Daisy UI",
    image: "https://placeimg.com/64/64/tech",
    category: "Frontend",
    id: uuidv4(),
  },
  {
    name: "SASS",
    image: "https://placeimg.com/64/64/tech",
    category: "Frontend",
    id: uuidv4(),
  },
  {
    name: "ReactJs",
    image: "https://placeimg.com/64/64/tech",
    category: "Frontend",
    id: uuidv4(),
  },
  {
    name: "NextJs",
    image: "https://placeimg.com/64/64/tech",
    category: "Frontend",
    id: uuidv4(),
  },

  // Backend
  {
    name: "NodeJs",
    image: "https://placeimg.com/64/64/tech",
    category: "Backend",
    id: uuidv4(),
  },
  {
    name: "Express",
    image: "https://placeimg.com/64/64/tech",
    category: "Backend",
    id: uuidv4(),
  },
  {
    name: "C#",
    image: "https://placeimg.com/64/64/tech",
    category: "Backend",
    id: uuidv4(),
  },
  // {
  //   name: "Mongoose",
  //   image: "https://placeimg.com/64/64/tech",
  //   category: "Backend (with MongoDB)",
  //   id: uuidv4(),
  // },
  {
    name: "Python",
    image: "https://placeimg.com/64/64/tech",
    category: "Backend",
    id: uuidv4(),
  },

  // Database
  {
    name: "MongoDB",
    image: "https://placeimg.com/64/64/tech",
    category: "Database",
    id: uuidv4(),
  },
  {
    name: "MySQL",
    image: "https://placeimg.com/64/64/tech",
    category: "Database",
    id: uuidv4(),
  },
  {
    name: "PostgreSQL",
    image: "https://placeimg.com/64/64/tech",
    category: "Database",
    id: uuidv4(),
  },

  // Version Control
  {
    name: "Git",
    image: "https://placeimg.com/64/64/tech",
    category: "Version-Control",
    id: uuidv4(),
  },
  {
    name: "GitHub",
    image: "https://placeimg.com/64/64/tech",
    category: "Version-Control",
    id: uuidv4(),
  },

  // API Testing
  {
    name: "Postman",
    image: "https://placeimg.com/64/64/tech",
    category: "Backend",
    id: uuidv4(),
  },
];

export default programmingLanguages;
