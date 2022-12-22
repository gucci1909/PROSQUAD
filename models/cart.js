const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    courseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: true
    }
},{
    versionKey:false,
    timestamps:true
});

// mongoose.models = {};
module.exports = mongoose.model("carts",cartSchema);

