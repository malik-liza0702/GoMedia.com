const Contact=require("../models/Contact");
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS,
    },
  });
  
  exports.sendMessage = async (req, res) => {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: email, 
      to: process.env.ADMIN_EMAIL, 
      subject: `Contact Us Message from ${name}`,
      text: `You received a message from ${name} (${email}):\n\n${message}`,
    };
  
    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send message. Please try again.' });
    }
  };

exports.createContact = async (req,res) =>{
    try{
        let {name,email,phone,budget,deadline,message} = req.body;
        console.log(req.body);

        if( !name || !email || !phone || !budget || !deadline || !message ){
            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
            })
        }
        const newContact = await Contact.create({
            name:name,
            email:email,
            phone:phone,
            budget:budget,
            deadline:deadline,
            message:message
        });
        await newContact.save();
        res.status(200).json({
            success: true,
            data: newContact,
            message: "Contact Created Successfully",
        })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to create contact",
          error: error.message,
        })
      }
}