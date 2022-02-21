const mongoose = require('mongoose');


const couponSchema = mongoose.Schema({
    id: String,
    name: String,
    createdBy:String,
    updatedBy:String,
    code: String,
    percentage: Number,
    startDate : String,
    endDate : String
    
})


const couponsMessage = mongoose.model('CouponsMessage',couponSchema)

module.exports =  couponsMessage