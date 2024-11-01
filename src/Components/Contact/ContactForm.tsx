import React, {useState} from "react";
import Submitted from "../../helpers/Submitted";

const ContactForm = () => {

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [inputValue, setInputValue] = useState({
    fullname: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [ submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    // Validations
    const newErrors = {
      fullname: inputValue.fullname === "" ? "Full name is required" : "",
      email: inputValue.email === "" ? "Email is required" : "",
      phoneNo: inputValue.phoneNo === "" ? "Phone number is required" : "",
      message: inputValue.message === "" ? "Message is required" : "",
    };

    setErrors(newErrors);

    // If there are no errors, submit the form (all errors should be empty)
    if (!Object.values(newErrors).some((error) => error !== "")) {
      setInputValue({
        fullname: "",
        email: "",
        phoneNo: "",
        message: "",
      });
      setSubmitted(true);
      console.log("Form Submitted: ", inputValue);

      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    }
  };

  return (
    <div className="w-full md:w-[70%] sm:w-[85%] m-auto mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="outline-none bg-base-200 p-3"
          type="text"
          name="fullname"
          id=""
          placeholder="Full Name"
          value={inputValue.fullname}
          onChange={handleChange}
        />
        {errors.fullname && (
          <small className="-mt-4 text-red-500">{errors.fullname}</small>
        )}
        <input
          className="outline-none bg-base-200 p-3"
          type="text"
          name="email"
          id=""
          placeholder="Email"
          value={inputValue.email}
          onChange={handleChange}
        />
        {errors.email && (
          <small className="-mt-4 text-red-500">{errors.email}</small>
        )}

        <input
          className="outline-none bg-base-200 p-3"
          type="number"
          name="phoneNo"
          id=""
          placeholder="Phone Number"
          value={inputValue.phoneNo}
          onChange={handleChange}
        />
        {errors.phoneNo && (
          <small className="-mt-4 text-red-500">{errors.phoneNo}</small>
        )}

        <textarea
          className="outline-none bg-base-200 p-3"
          name="message"
          id=""
          placeholder="message"
          value={inputValue.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <small className="-mt-4 text-red-500">{errors.message}</small>
        )}

        <button className="bg-green-600 opacity-70 px-4 py-2 font-semibold text-white">
          Send Me A Message
        </button>
        {submitted && (
          <Submitted/>
        ) }
      </form>
    </div>
  );
};

export default ContactForm;
