const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
            type:String,
            required:true,
            trim:true,
    },

    blogs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Blog"
        }
    ],
});

module.exports = mongoose.model("User",userSchema); 