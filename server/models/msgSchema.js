const mongoose = require('mongoose');


// User Schema Or Document Structuress
const msgSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true
    }
})


// Create Model
const Message = new mongoose.model("MESSAGE", msgSchema);

module.exports = Message;












