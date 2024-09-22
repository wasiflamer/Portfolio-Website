import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  // handler
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pol2wuo", "template_g4mybhi", form.current, {
        publicKey: "WFg4ohYfy98be-33W",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>reply_to</label>
      <input type="text" name="reply_to" id="reply_to" />
      <label>from_name</label>
      <input type="email" name="from_name" id="from_name" />
      <label>Message</label>
      <textarea name="message" />
      <input className="btn btn-square" type="submit" value="Send" />
    </form>
  );
}
