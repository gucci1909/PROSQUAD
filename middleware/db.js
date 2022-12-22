import mongoose from "mongoose";

const connectDb = handler =>async(req,res)=>{

    // if(mongoose.connection[0].readyState){
        // return handler(req,res);
    // }
    await mongoose.connect(`mongodb+srv://umangar34:Umang2000@gucci1909.vhyhdo6.mongodb.net/prosquad?retryWrites=true&w=majority`);
    return handler(req,res);
}

export default connectDb;