import { Link } from 'react-router-dom';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="flex flex-col mt-20" id='contact'>
      <h1 className="text-center text-4xl font-bold text-green-600">
        Get In Touch With Me
      </h1>
      <section className="flex flex-wrap align-center justify-center mt-5 gap-5">
        <Link
          to="https://www.linkedin.com/in/iyabivuze/"
          className="flex align-center bg-green-600 opacity-70 text-white px-4 py-2 gap-1"
        >
          <LinkedInIcon />
          LinkedIn
        </Link>
        <Link
          to=""
          className="flex align-center bg-black text-white px-4 py-2 gap-1 dark:bg-slate-200 dark:text-neutral-950"
        >
          <CallIcon />
          Call
        </Link>
        <Link
          to="https://github.com/Iyabivuz-e"
          className="flex align-center bg-green-600 opacity-70 text-white px-4 py-2 gap-1"
        >
          <GitHubIcon />
          GitHub
        </Link>
      </section>
      <ContactForm />
    </div>
  );
}

export default Contact
