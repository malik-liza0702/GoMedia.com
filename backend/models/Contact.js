const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: {
    countryCode: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
      
    },
  },
  budget: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  message: { type: String, required: true, maxlength: 1000 },
});
module.exports = mongoose.model("Contact",contactSchema); 
