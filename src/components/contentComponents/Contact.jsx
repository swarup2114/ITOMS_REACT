import React, { useState } from "react";
import "../stylesheets/contact.css";
import { HiChevronDoubleRight } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div className="about-card-show">
        <h1>Contact Us</h1>
        <p>Drop us Message for any Query</p>
      </div>
      <div className="about-container">
        <div className="about-card-container">
          <div>
            <h1>Some other great reasons to choose us</h1>
            <p>
              Take the first steps towards increased productivity and reduced
              stress with Strax.
            </p>

            <p>
              We are a highly trained, dedicated team, helping entrepreneurs,
              professionals, and small teams streamline success - not just in
              work, but in life too. We help spare your time to focus on the
              bigger picture by taking care of the little details.
            </p>
            <p>
              {" "}
              <HiChevronDoubleRight />
              Staff works from our offices in USA
            </p>
            <p>
              {" "}
              <HiChevronDoubleRight />
              Scale up/ down on demand
            </p>

            <p>
              {" "}
              <HiChevronDoubleRight /> One time or on going projects
            </p>
            <p>
              {" "}
              <HiChevronDoubleRight /> Hire based on skill set
            </p>
          </div>
          <div className="enquiry-form">
            <h3>Let's Get Connected</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="input-style"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="input-style"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="input-style"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="input-style"
            />

            <textarea placeholder="Your Message" className="big-input-style " />
            <button className="send-message-style">
              {" "}
              <BsFillSendFill /> Send Message
            </button>
          </div>
        </div>
        <div className="contact-deatils">
          <h1> Contact us by Phone Number or Email Address</h1>
          <h1>
            <a href="tel:+918247898008" target="_blank">
              +91 82478 98008
            </a>
          </h1>
          <h1>OR</h1>

          <h1>
            {" "}
            <a href="mailto:support@inapayments.com" target="_blank">
              support@inapayments.com
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
