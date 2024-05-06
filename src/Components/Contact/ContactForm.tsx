import React, {useState} from "react";

// type FormType = {
//   fullname: String;
//   email: String;
//   phoneNo: number;
//   message: String;
//   name: React.ChangeEvent<HTMLInputElement>;
//   value: React.ChangeEvent<HTMLInputElement>;
// };


const ContactForm = () => {

  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState({
    fullname: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  const handleSubmit = (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    // Validations
    if(inputValue.fullname === ""){
      setError("Full name is required")
      console.log(error)
      return
    }
    if(inputValue.email === ""){
      setError("Email is required")
      return
    }
    if(inputValue.phoneNo.length === 0){
      setError("Phone number is required")
      return
    }
    if(inputValue.message === ""){
      setError("Message is required")
      return
    }

    console.log(inputValue)
  }

  return (
    <div className="w-full md:w-[70%] sm:w-[85%] m-auto mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="outline-none bg-slate-200 p-3"
          type="text"
          name="fullname"
          id=""
          placeholder="Full Name"
          value={inputValue.fullname}
          onChange={handleChange}
        />
        {error ? (<small className="-mt-4 text-red-500">{error}</small>): ""}
        <input
          className="outline-none bg-slate-200 p-3"
          type="text"
          name="email"
          id=""
          placeholder="Email"
          value={inputValue.email}
          onChange={handleChange}
        />
        {error ? (<small className="-mt-4 text-red-500">{error}</small>): ""}

        <input
          className="outline-none bg-slate-200 p-3"
          type="number"
          name="phoneNo"
          id=""
          placeholder="Phone Number"
          value={inputValue.phoneNo}
          onChange={handleChange}
        />
        {error ? (<small className="-mt-4 text-red-500">{error}</small>): ""}

        <textarea
          className="outline-none bg-slate-200 p-3"
          name="message"
          id=""
          placeholder="message"
          value={inputValue.message}
          onChange={handleChange}
        ></textarea>
        {error ? (<small className="-mt-4 text-red-500">{error}</small>): ""}

        <button className="bg-green-600 px-4 py-2 font-semibold text-white">
          Send Me A Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
