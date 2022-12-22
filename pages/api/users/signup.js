import User from "../../../models/users";
import connectDb from "../../../middleware/db";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
	let { name, email, password, role, status } = req.body;
	if (role === "teacher") {
		status = "pending";
	}
	if (req.method === "POST") {
		let us = await User.findOne({ email });
		try {
			if (us) {
				return res.send("Email already registered");
			}
			let newuser = new User({ name, email, password, role, status });
			await newuser.save();
			res.send("user Added");
		} catch (err) {
			return res.status(500).send(err.message);
		}
	}
};

export default connectDb(handler);
