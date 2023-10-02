import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/app/hook";
import { addMessage } from "../../../store/slices/messageSlice";
import MessageRow from "./randomComponent/MessageRow";

const Contact = () => {
  const messages = useAppSelector((state) => state.message.messages);
  const dispatch = useAppDispatch();
  const handleContactUs = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.userName.value;
    const message = form.message.value;
    dispatch(addMessage({ name, message, id: messages.length + 1 }));
    form.reset();
  };
  return (
    <div
      id="contact"
      className="bg-[url('https://cdn.wallpapersafari.com/89/46/oGOhiA.jpg')] bg-cover bg-fixed"
    >
      <div className="section gap-5 dark:bg-black/30">
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

        <div className="grid grid-cols-1 gap-3">
          {messages.length > 0 &&
            messages.map((messageData) => (
              <MessageRow
                key={messageData.id}
                messageData={messageData}
              ></MessageRow>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
