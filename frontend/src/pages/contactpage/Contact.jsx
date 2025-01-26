import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Contact.css";
import { useState } from "react";
import contact from "../../assets/blogs.jpg";
import axios from "axios";
import { toast } from 'react-toastify';
function Contact() {
  const [contactMessage, setContactMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");

  async function handleContact(e) {
    e.preventDefault();
    if (name && email && message) {
      const myMessage = {
        name: name,
        email: email,
        phone: phone,
        budget: budget,
        deadline: deadline,
        message: message,
      };
      console.log(myMessage);
      setContactMessage(myMessage);
    }
    try{
      const response=await axios.post("https://gomedia-com.onrender.com/api/contact/create",contactMessage);
      console.log("contact created successfully..")
      toast.success("Message sent successfully")

    }
    catch(error){
      console.log(error);
      toast.error("Something went wrong");

    }
  }
  return (
    <>
      <div className="contact">
        <Navbar></Navbar>
        <div className="contact-image">
          <img src={contact} className="image"></img>
          <div className="blog-heading-div">
            <h1 className="blog-heading">
              Get in touch with us...
            </h1>
          </div>
        </div>
        <div className="contact-us">
          <h1>Want to connect with us?</h1>
          <form className="contact-form" onSubmit={handleContact}>
            <label>Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            {/*  */}
            <label>Phone Number:</label>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <select
                id="country-code"
                value={phone.countryCode} // Bind country code
                onChange={
                  (e) => setPhone({ ...phone, countryCode: e.target.value }) // Update the country code
                }
                required
              >
                <option value="">--Select Code--</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+86">+86 (China)</option>
                <option value="+33">+33 (France)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+234">+234 (Nigeria)</option>
                <option value="+55">+55 (Brazil)</option>
                {/* Add more country codes as needed */}
              </select>

              <input
                type="text"
                id="phone"
                value={phone.number} // Bind phone number
                onChange={
                  (e) => setPhone({ ...phone, number: e.target.value }) // Update the phone number
                }
                placeholder="Enter phone number"
                required
              />
            </div>

            <label>Select Project Budget:</label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">--Select Budget--</option>
              <option value="0-50,000">0-50,000</option>
              <option value="50,000-1,00,000">50,000-1,00,000</option>
              <option value="1,00,000-5,00,000">1,00,000-5,00,000</option>
              <option value=">5,00,000">&gt; 5,00,000</option>
            </select>
            <label>Project Deadline:</label>
            <input
              type="text"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            ></input>
            <label>Enter your Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="homeButton">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
