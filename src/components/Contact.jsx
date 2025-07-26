import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const [isSubmitted, setSubmitted] = useState(0);
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
          setSubmitted(1);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  if (isSubmitted == 0) {
    return (
      <div id="email" className="hero bg-indigo-950 min-h-screen ">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold ">I'm Here</h1>
            <p className="py-6">Discuss your project or problem !</p>
          </div>
          <div  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                  autoComplete="false"
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
                  autoComplete="false"
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
                  autoComplete="false"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // otherwise render this ( show an icon with check mark )
  return (
    <div className="hero bg-green-400 min-h-screen ">
      <div className="hero-content flex-col lg:flex-col">
        <div className=" flex flex-col gap-2 text-center text-white">
          <div>
            <FontAwesomeIcon icon={faCheckCircle} size="3x" />
          </div>
          <h1 className="text-5xl font-bold ">Success!</h1>
          <h1 className="text-2xl font-semibold text-gray-700 font-sans">
            Check Your Email, i will respond as soon as possible.
          </h1>
        </div>
      </div>
    </div>
  );
}
