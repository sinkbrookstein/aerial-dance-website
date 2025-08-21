import '../styles/ContactPage.css';
import Swal from 'sweetalert2'
import Footer from "../components/Footer";
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2db59eb2-6df3-40b5-a11b-33787dea550a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Email Sent",
        text: "Thank you for your message! We will get back to you as soon as possible.",
        icon: "success"
      });
      setFormData({ name: '', email: '', message:'' });
    }
  };

  return (
    <div className="contact-container">
      <h2>Bookings, Questions, Comments?</h2>
      <h3>Contact Us!</h3>
      <form name="contact" onSubmit={onSubmit}>
        <div className="input-box">
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="field" name="name" required/>
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="field" name="email" required/>
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            className="field-message" name="message" required/>
        </div>
        <button className="submit-button" type="submit">Send Message</button>
      </form>
      <Footer/>
    </div>
  );
};

export default ContactPage;
