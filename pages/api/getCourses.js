import course from "../../models/courses";
import connectDb from "../../middleware/db";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const  handler = async(req,res)=>{
    const product = await course.find();
    res.send(product);
}

export default connectDb(handler);
  