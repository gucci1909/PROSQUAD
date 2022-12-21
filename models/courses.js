const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({

    course_name:{type:String,required:true},
    // canon : [{
    //     quantity : {type:Number,required:true},
    //     Megapixels : {type:String,required:true},
    //     batteryDuration : {type:String,required:true}

    // }]
    // ,nikon : [{
    //     quantity : {type:Number,required:true},
    //     Megapixels : {type:String,required:true},
    //     batteryDuration : {type:String,required:true}
    // }]

})

mongoose.models = {};
module.exports = mongoose.model("course",coursesSchema);

