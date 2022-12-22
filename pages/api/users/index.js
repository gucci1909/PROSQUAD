import User from "../../../models/users";
import connectDb from "../../../middleware/db";
const jwt = require("jsonwebtoken");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const secrectToken = process.env.SECRECTTOKEN;
const refreshToken = process.env.REFRESHTOKEN;

const handler = async (req, res) => {
	const { id } = req.query;
	if(id){
		
	}
	
};

export default connectDb(handler);
