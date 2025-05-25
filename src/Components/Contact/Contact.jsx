import React, { useState } from 'react';
import msg_icon from '../../assets/msg-icon.png'; // Ensure the correct path
import mail_icon from '../../assets/mail-icon.png'; // Ensure the correct path
import phone_icon from '../../assets/phone-icon.png'; // Ensure the correct path
import location_icon from '../../assets/location-icon.png'; // Ensure the correct path
import './Contact.css'; // Ensure the correct path

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "de88ff2c-3859-4ea8-8ac7-168e20f637ba");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }; 



  const [message, setMessage] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleMessageChange = (e) => {
    const words = e.target.value.split(/\s+/).filter(word => word.length > 0);
    if (words.length <= 50) {
      setMessage(e.target.value);
      setWordCount(words.length);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a message
          <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Planning to study abroad? We're here to help! Reach out via our contact form or use the details below. Whether it's applications, exams, or settling in — we’ve got you covered.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Mail Icon" />
             enquiry@sdbc.ac.in
          </li>
          <li>
            <img src={phone_icon} alt="Phone Icon" />
            +91-9109954633
          </li>
          <li>
            <img src={location_icon} alt="Location Icon" />
            Umaria, A.B.Road, Near Rau,Indore - 453331
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required />
            <label>Email</label>
            <input type="email" name="email" placeholder='Enter your email' required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your Number' required />
            <label>Write Your Message Here</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder='Enter your message'
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <p>{wordCount}/50 words</p>
            <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;