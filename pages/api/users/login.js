import User from "../../../models/users";
import connectDb from "../../../middleware/db";
const jwt = require("jsonwebtoken");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const secrectToken = process.env.SECRECTTOKEN;
const refreshToken = process.env.REFRESHTOKEN;

const handler = async (req, res) => {
	const { email, password } = req.body;

	if (req.method === "POST") {
		const user = await User.findOne({ email, password });
		if (user) {
			const token = jwt.sign(
				{ id: user._id, name: user.name, email: user.email, role: user.role },
				secrectToken,
				{ expiresIn: "7 days" }
			);

			const refreshT = jwt.sign(
				{ id: user._id, name: user.name, email: user.email, role: user.role },
				refreshToken,
				{ expiresIn: "28 days" }
			);

			return res.status(200).send({
				message: "Login Success",
				token,
				refreshToken: refreshT,
				user: user.name,
				id: user._id,
				role: user.role,
			});
		} else {
			return res.status(401).send("invalid credentials");
		}
	}
};

export default connectDb(handler);
