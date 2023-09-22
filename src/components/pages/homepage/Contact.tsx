import { useState } from "react";

interface FormData {
  userName: string;
  message: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContactUs = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Name:" + formData.userName + "\n" + "Message: " + formData.message
    );
  };

  return (
    <div id="contact" className="section">
      <form
        onSubmit={handleContactUs}
        className="flex flex-col gap-4 border-2 p-10 rounded-xl"
      >
        <h1 className="text-center text-xl font-semibold uppercase">
          Contact Us
        </h1>
        <input
          type="text"
          placeholder="name"
          name="userName"
          id="userName"
          className="border-2 p-2 rounded w-96"
          onChange={handleInputChange}
        />

        <input
          placeholder="message"
          name="message"
          className="border-2 p-2 rounded w-96"
          onChange={handleInputChange}
        />
        <div className="text-right">
          <button
            type="submit"
            className="btn w-28 bg-green-400 uppercase hover:bg-green-500 hover:text-gray-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
