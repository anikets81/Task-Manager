const mongoose = require("mongoose")

const Schema = mongoose.Schema

const itemSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type: Number, 
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model("item", itemSchema)