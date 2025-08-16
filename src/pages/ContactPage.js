import '../styles/ContactPage.css';
import { useState } from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <form name = "contact v1"
            method = "post" data-netlify="true"
            onSubmit="submit">
            <input type="hidden" name="form-name" value="contact v1"/>
            <label>Enter your name:</label>
        <input type="text" name="name"/>
            <button type="submit">Submit The Results</button>
      </form>
    </div>
  );
};

export default ContactPage;
