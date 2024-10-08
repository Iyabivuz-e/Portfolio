const Submitted = () => {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
      role="alert"
    >
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline">
        {" "}
        Your message has been submitted successfully.
      </span>
    </div>
  );
};

export default Submitted;
