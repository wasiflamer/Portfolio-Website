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
    <div className="hero bg-indigo-950 min-h-screen ">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold ">I'm Here</h1>
          <p className="py-6">Discuss your project or problem !</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
                name="reply_to"
                id="reply_to"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
                name="from_name"
                id="from_name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input
                type="text"
                placeholder="Your Queries and Concerns ! "
                className="input input-bordered"
                required
                id="message"
                name="message"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-secondary" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

//  <form ref={form} onSubmit={sendEmail}>
//       <label>reply_to</label>
//       <input type="text" name="reply_to" id="reply_to" />
//       <label>from_name</label>
//       <input type="email" name="from_name" id="from_name" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input className="btn btn-square" type="submit" value="Send" />
//     </form>
