import React from "react";

const Contact = () => {
  // const [formData, setFormData] = useState<FormData>({
  //   id: "",
  //   userName: "",
  //   message: "",
  // });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     id: Date.now(),
  //     [name]: value,
  //   });
  // };

  // add review

  // const handleContactUs = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  const handleContactUs = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.userName.value;
    const message = form.message.value;
    console.log("Name: ", name, "Message: ", message);
    form.reset();
  };
  return (
    <div
      id="contact"
      className="bg-[url('https://cdn.wallpapersafari.com/89/46/oGOhiA.jpg')] bg-cover bg-fixed"
    >
      <div className="section dark:bg-black/30">
        <form
          onSubmit={handleContactUs}
          className="flex flex-col gap-4 border-2 p-10 rounded-xl bg-black/10 shadow-xl"
        >
          <h1 className="text-center text-xl font-semibold uppercase">
            Contact Us
          </h1>
          <input
            required
            type="text"
            placeholder="name"
            name="userName"
            id="userName"
            className="border-2 p-2 rounded w-96"
          />
          <input
            required
            type="text"
            placeholder="message"
            name="message"
            className="border-2 p-2 rounded w-96"
          />
          <div className="text-right">
            <button
              type="submit"
              className="btn w-28 bg-green-400 uppercase hover:bg-green-600 hover:text-gray-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
