import React from "react";
import "../stylesheets/contact.css";

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
            <p>Staff works from our offices in USA</p>
            <p>Scale up/ down on demand</p>

            <p> One time or on going projects</p>
            <p>Hire based on skill set</p>
          </div>
          <div className="enquiry-form">
            <h3>lets get connected</h3>
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Name" />
            <textarea placeholder="Enter Message" />
            <button>Send Message</button>
          </div>
        </div>
      <div className="conatct-info">
      <h1> Contact us by Phone Number or Email Address</h1>
        <h1>+91 82478 98008</h1>
        <h1>OR</h1>
        <h1>support@inapayments.com</h1>
      </div>
      </div>
    </div>
  );
};

export default Contact;
