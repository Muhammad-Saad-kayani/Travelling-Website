import React from "react";
import './Contact.css'
import icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'




const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "58be2ffa-0867-4125-8c3b-aa0906f1cfcb");

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
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a message <img src={icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi
          molestias sunt ducimus laboriosam quo necessitatibus dolorem deleniti
          mollitia illo cum architecto sed, quia cumque eius voluptate omnis vel
          eos.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" /> iamsaadk786@gmail.com</li>
            <li><img src={phone_icon} alt="" /> 03241838743</li>
            <li><img src={location_icon} alt="" /> Gulistan-e-Jauhar , Karachi</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name: ' required />
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter Your Phone Number: ' required />
        <label htmlFor="">Write Your Message here</label>
        <textarea name="message" id="" rows="6" placeholder='Enter Your Message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now <img src={arrow} alt="" /></button>
        </form>
        <span>{result}</span>


      </div>
    </div>
  );
};

export default Contact;
