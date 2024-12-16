import React from 'react';
import "./Contact.css";
function Contact() {
  return (
    <section className="contact-page">
      <div id="contact-section" className="contact-section">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below.</p>
        <form className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              placeholder="Enter your message"
            ></textarea>
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
