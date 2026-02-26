import { useState } from "react";
import axios from "axios";
import "../styles/contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="contact-page">
      <h1>Contact Sreshtta Performing Arts</h1>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Trivandrum, Kerala, India</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 9999999999</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>sreshttaperformingarts@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="status">{status}</p>}
        </form>
      </div>

      {/* Google Map */}
      {/* <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        allowFullScreen
        loading="lazy"
      /> */}
    </div>
  );
};

export default Contact;