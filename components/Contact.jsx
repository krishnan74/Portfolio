import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RxCross1 } from "react-icons/rx";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_0g0a115",
    //     "template_tgyj4gx",
    //     form.current,
    //     "HGMQnDzaGpcAIG_Nu"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{ boxShadow: "5px 5px 1px 0px rgba(0, 0, 0, 0.75)" }}
      className="flex flex-col bg-gradient-to-r from-[#E8D6E3] via-[#E9DDF1] to-[#E9E4F8] border  border-black h-fit w-[500px] p-10 text-black "
    >
      <p className="text-center">Send me an email </p>
      <button
        onClick={() => props.callBack(false)}
        className="relative bottom-10 left-[415px]"
      >
        <RxCross1 size={20} />
      </button>

      <label>Name</label>
      <input
        type="text"
        name="user_name"
        className="pl-1 bg-[rgb(244,244,244)] border-2 border-white"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="pl-1 bg-[rgb(244,244,244)] border-2 border-white"
      />
      <label>Message</label>
      <textarea
        className="pl-1 bg-[rgb(244,244,244)] border-2 border-white"
        rows="4"
        cols="50"
        name="message"
      />
      <input
        className="mt-3 px-5 py-3 bg-black text-white cursor-pointer"
        type="submit"
        value="Send"
      />
    </form>
  );
};

export default Contact;