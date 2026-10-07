import React, { useState } from "react";
 
import "./Contact.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // replace with your real submit logic later
    setSent(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
    

      <section className="contact">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            Have a question or want to place an order? Fill out the form and
            we will get back to you within 1 business day.
            it's our pleasure having and we will try out best
          </p>
          <ul>
            <li>Email: your-email@example.com</li>
            <li>Phone: +2348036685206</li>
            <li>Address: Owerri, Imo State, Nigeria</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
          {sent && <p className="success">Thanks! Your message has been sent.</p>}
        </form>
      </section>
    </div>
  );
};

export default Contactus;