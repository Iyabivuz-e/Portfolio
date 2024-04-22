
const ContactForm = () => {
  return (
    <div className="w-full md:w-[70%] sm:w-[85%] m-auto mt-6">
      <form action="" className="flex flex-col gap-4">
        <input className="outline-none bg-slate-200 p-3" type="text" name="" id="" placeholder="Full Name" />
        <input className="outline-none bg-slate-200 p-3" type="text" name="" id="" placeholder="Email" />
        <input className="outline-none bg-slate-200 p-3" type="number" name="" id="" placeholder="Phone Number" />
        <textarea className="outline-none bg-slate-200 p-3" name="" id="" placeholder="message"></textarea>
        <button className="bg-green-600 px-4 py-2 font-semibold text-white">Send Me A Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
