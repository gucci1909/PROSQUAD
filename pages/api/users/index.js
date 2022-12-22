import User from "../../../models/users";
import connectDb from "../../../middleware/db";
import { AuthMiddleware } from "../../../middleware/authorization";
import jwt from "jsonwebtoken";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const secrectToken = process.env.SECRECTTOKEN;
const refreshToken = process.env.REFRESHTOKEN;

const handler = async (req, res) => {
	const token = req.headers["authorization"];
	let decode = jwt.decode(token, secrectToken);
	if (decode.role === "admin" || decode.role === "teacher") {
		try {
			let users = await User.find();
			res.status(200).json({ data: users });
		} catch (err) {
			res.status(404).json({
				error: err.message,
			});
		}
	} else {
		return res.status(403).send("you are not allowed to do this operation.");
	}
};

export default connectDb(handler);