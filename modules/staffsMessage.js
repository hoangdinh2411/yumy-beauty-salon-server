const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
    fullName: String,
    categories: [String],
    email:String,
    phone:String,
    selectedFile : String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    age: Number,
    createdBy: String,
    updatedAt:{
        type:Date,
        default: new Date()
    },
    updatedBy:String    
})

const staffsMessage = mongoose.model("staffsMessage",staffSchema)

module.exports =  staffsMessage