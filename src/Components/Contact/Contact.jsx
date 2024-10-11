import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c86fa894-d0c9-47c2-a8a4-5b3148333161");

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
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
        Feel free to reach out through our contact form or find our contact information below. Your feedback, questions, 
        and travel requests are important to us as we aim to provide you with exceptional travel experiences.
        </p>
        <ul>
            <li><img src={phone_icon} alt="" /> +977 1234567890</li>
            <li><img src={mail_icon} alt="" /> info@journeyNepal.com</li>
            <li><img src={location_icon} alt="" />New Baneshwor, Kathmandu, Nepal</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label> Your name </label>
            <input type="text" name="name" placeholder='Enter your name' required />
            <label> Phone Number </label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label> Message</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className="btn dark-btn" >
                Submit Now <img src={white_arrow} alt="" />
            </button>
            
        </form>
        {/*for submitting the form we will use web3form*/ } 
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
 