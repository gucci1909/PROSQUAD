const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    chat_id : {type:Number,required:true},
    message : {type:String,required:true}
},{
    versionKey:false,
    timestamps:true
});
mongoose.models = {};

module.exports = mongoose.model("Q&As",chatSchema);