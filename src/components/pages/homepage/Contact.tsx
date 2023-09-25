import { useState } from "react";
import { FormData } from "../../interface/interface";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    userName: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      id: Date.now(),
      [name]: value,
    });
  };

  const handleContactUs = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      id="contact"
      className="section bg-[url('https://img.freepik.com/premium-photo/clear-blue-sky-sunset-with-horizon-calm-ocean-sea-background-picturesque_31965-138504.jpg')] bg-cover bg-fixed"
    >
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
          onChange={handleInputChange}
        />

        <input
          required
          placeholder="message"
          name="message"
          className="border-2 p-2 rounded w-96"
          onChange={handleInputChange}
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
  );
};

export default Contact;
